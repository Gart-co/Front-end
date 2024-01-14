import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { TopBar } from '../../components/TopBar/TopBar'
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo'
import ProjectList from '../../components/ProjectList/ProjectList'
import axios from 'axios';
import { gentkLiveDisplayUrl } from '../../fxdisplay';
import { fx_query_generativeToken } from '../../queries/strings/FxQueryStrings';
import { drawCardBorder1 } from '../../04/script';
let json_obj = [];

function jsonExtract(modifyingJson, platform){
  let modifiedJson = {};

  if (platform === "Fxhash"){
      modifiedJson.id = modifyingJson.id;
      modifiedJson.name = modifyingJson.name;
      modifiedJson.displayUri = modifyingJson.displayUri;
      modifiedJson.platform = modifyingJson.platform;
      modifiedJson.artist = modifyingJson.author_name;
      modifiedJson.gentkContractAddress = modifyingJson.gentkContractAddress;
      modifiedJson.iteration = modifyingJson.entireCollection.length;
      modifiedJson.mintOpensAt = modifyingJson.mintOpensAt;
      modifiedJson.royalties = modifyingJson.royalties;
      
      modifiedJson.listed = modifyingJson.marketStats_listed;
      //Market Price Stat
      modifiedJson.currency = "Tezos";
      modifiedJson.floor = modifyingJson.marketStats_floor/1000000;
      modifiedJson.floor_usd = modifiedJson.floor!=='-'?0.823*modifiedJson.floor:0;
      // modifiedJson.floorChange = modifyingJson.floorChange;
      modifiedJson.secNumNb = modifyingJson.marketStats_secVolumeNb;
      modifiedJson.secVol = modifyingJson.marketStats_secVolumeTz/1000000;
      modifiedJson.secNum1d = modifyingJson.marketStats_secVolumeNb24;
      modifiedJson.secVol1d = modifyingJson.marketStats_secVolumeTz24/1000000;
      modifiedJson.secNum7d = modifyingJson.marketStats_secVolumeNb7d;
      modifiedJson.secVol7d = modifyingJson.marketStats_secVolumeTz7d/1000000;
  }

  if (platform === "ArtBlock"){
      modifiedJson.name = modifyingJson.name;
      modifiedJson.displayUri = modifyingJson.image_url;
      modifiedJson.platform = "Opensea";
      modifiedJson.artist = "TBC";
      //Market Price Stat
      modifiedJson.currency = "Ethereum";
      modifiedJson.floor = modifyingJson.stats.floor_price;
      // modifiedJson.floorChange = modifyingJson.floorChange;
      modifiedJson.secVol = modifyingJson.stats.total_sales;
      modifiedJson.secNum1d = modifyingJson.stats.one_day_sales;
      modifiedJson.secVol1d = modifyingJson.stats.one_day_volume;
      modifiedJson.secNum7d = modifyingJson.stats.seven_day_sales;
      modifiedJson.secVol7d = modifyingJson.stats.seven_day_volume;
  }

  if (platform === "Reservoir"){
      modifiedJson.id = modifyingJson.id;
      modifiedJson.name = modifyingJson.name;
      modifiedJson.displayUri = modifyingJson.image;
      modifiedJson.platform = "Ethereum";
      modifiedJson.artist = modifyingJson.creator;
      modifiedJson.gentkContractAddress = modifyingJson.primaryContract;
      modifiedJson.iteration = modifyingJson.tokenCount;
      modifiedJson.mintOpensAt = modifyingJson.createdAt;
      modifiedJson.royalties = modifyingJson.allRoyalties.onchain.bps/1000;
      
      modifiedJson.listed = modifyingJson.onSaleCount;
      //Market Price Stat
      modifiedJson.currency = "Ethereum";
      modifiedJson.floor = modifyingJson.floorSale["30day"];
      modifiedJson.floor_usd = modifyingJson.floorAsk.price.amount.usd;
      // modifiedJson.floorChange = modifyingJson.floorChange;
      modifiedJson.secVol = modifyingJson.volume.allTime;
      modifiedJson.secNum1d = modifyingJson.volumeChange['1day'];
      modifiedJson.secVol1d = modifyingJson.volume['1day'];
      modifiedJson.secNum7d = modifyingJson.volumeChange['7day'];
      modifiedJson.secVol7d = modifyingJson.volume['7day'];

  }

  return (modifiedJson);
}



function jsonExtractToken(modifyingJson){
  let modifiedJson = {};
  {
    modifiedJson.name = modifyingJson.token.name;
    modifiedJson.displayUri = modifyingJson.token.image;
    modifiedJson.platform = "Ethereum";
    modifiedJson.artist = modifyingJson.creator;
    modifiedJson.listingprice = Number(modifyingJson.market.floorAsk.price.amount.raw);
    modifiedJson.iteration = modifyingJson.tokenCount;
    modifiedJson.price = modifyingJson.price;
    
    modifiedJson.listed = modifyingJson.onSaleCount;
    modifiedJson.iteration = modifyingJson.token.tokenId;
    modifiedJson.owner_name = modifyingJson.token.owner;
    //Market Price Stat
    modifiedJson.currency = "Ethereum";
    modifiedJson.price = Number(modifyingJson.market.floorAsk.price.amount.raw);
    modifiedJson.floor_usd = modifyingJson.market.floorAsk.price.amount.usd;
    // modifiedJson.floorChange = modifyingJson.floorChange;

}

return (modifiedJson);
}
function fx_data_traverse(obj, path = '') {
    if (Array.isArray(obj))
    {
      var traverse_set = [];
      for (const key in obj){
      traverse_set[`${key}`] = fx_data_traverse(obj[key],'');
      }
      return traverse_set;
    }
    const result = {};
    for (const key in obj) {
      const value = obj[key];
      const newPath = path ? `${path}_${key}` : key;
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.assign(result, fx_data_traverse(value, newPath));
      } else {
        result[newPath] = (value === null) ? '-' : value;
      }
      if (Array.isArray(value)) {
        result[newPath] = value.map((item, i) => {
          if (typeof item === 'object') {
            //item[`platform`] = "fxhash";
            return fx_data_traverse(item, ``);
          } else {
            return item;
          }
        });
      } 
      if (typeof key === "string" && key.match(/Uri/) !== null && value !== null)
         result[newPath] = gentkLiveDisplayUrl(value);
    }
    result[`platform`] = "Fxhash";
    return result;
  }
  
export default function Project(props) {
    const { id } = useParams();
    let id_num = Number(id);
  const [loading, setLoading] = useState(true);
  const [tokens, setTokens] = useState([]);
  const [reservoir, setReservoir] = useState({});
  const [data, setData] = useState({});
  
  const [fx, setFx] = useState([]);
    useEffect(() => {
      if(id.startsWith('0x')){
      const options = {method: 'GET', headers: {accept: '*/*', 'x-api-key': 'demo-api-key'}};


      fetch(`https://api.reservoir.tools/tokens/v7?collection=${id}`, options)
        .then(response => response.json())
        .then(response => {
          console.log("Tokens:", response);
          setTokens(response.tokens.map(jsonExtractToken));
          })
        .catch(err => console.error(err));


      fetch(`https://api.reservoir.tools/collections/v7?collection=${id}`, options)
      .then(response => response.json())
      .then(response => {
        console.log("Res response", response);
       setData(jsonExtract(response.collections[0],"Reservoir"));
      setLoading(false);})
      .catch(err => console.error(err));
      }
      else{
        let query = fx_query_generativeToken;
        let variables =  {
            "generativeTokenId": 24169,
            "generativeTokenId2": 24169,
        };
        variables.generativeTokenId = id_num;
        axios.post('https://api.fxhash.xyz/graphql',{ query
        , variables,
        }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(response => {
        console.log("Fx Response Received");
        let fxhash_data = (response.data.data);
        let json_obj = [];
        for(let i in fxhash_data)
        {
          json_obj[`${i}`]= (fx_data_traverse(fxhash_data[i]));
        }
        setFx(json_obj);
        console.log("Fx Data", fx);
        setData(jsonExtract(json_obj.generativeToken,"Fxhash"));
        setTokens(fx.generativeToken.entireCollection);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });}
    },[])
    
    useEffect(()=>{
      console.log("Fx Data", fx);
      console.log("Eth Data", reservoir);
      //drawCardBorder1();
  }, [loading])
  return (
    <div className='background home' style={{position:"relative"}}>
      <div style={{top:0, width:"100%", position:"relative"}}>
        <TopBar></TopBar>
      </div>
      {loading===false?<div>
                        <div style={{top:130, left:100, position:"relative",width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
                            <ProjectInfo data={data}></ProjectInfo>
                            {/* <div className="Frame48095496" style={{width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="Frame48095477" style={{height: 40, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 21, display: 'flex'}}>
                            <div className="Group48096641" style={{width: 100, height: 40, position: 'relative'}}>
                                <div className="Rectangle30383" style={{width: 100, height: 40, left: 0, top: 0, position: 'absolute', background: 'black', borderRadius: 100}} />
                                <div className="Items" style={{width: 100, height: 21, left: 0, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', wordWrap: 'break-word'}}>Items</div>
                            </div>
                            <div className="Group48096642" style={{width: 100, height: 40, position: 'relative'}}>
                                <div className="Rectangle30383" style={{width: 100, height: 40, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 100, border: '1px black solid'}} />
                                <div className="Activity" style={{width: 100, height: 21, left: 0, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', wordWrap: 'break-word'}}>Activity</div>
                            </div>
                            <div className="Group48096643" style={{width: 100, height: 40, position: 'relative'}}>
                                <div className="Rectangle30383" style={{width: 100, height: 40, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 100, border: '1px black solid'}} />
                                <div className="Offer" style={{width: 100, height: 21, left: 0, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', wordWrap: 'break-word'}}>Offer</div>
                            </div>
                            <div className="Group48096644" style={{width: 100, height: 40, position: 'relative'}}>
                                <div className="Rectangle30383" style={{width: 100, height: 40, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 100, border: '1px black solid'}} />
                                <div className="Owner" style={{width: 100, height: 21, left: 0, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', wordWrap: 'break-word'}}>Owner</div>
                            </div>
                        </div>
                        <div className="Frame48096668" style={{height: 40, justifyContent: 'flex-end', alignItems: 'flex-start', gap: 21, display: 'flex'}}>
                            <div className="Search" style={{width: 320, height: 40, paddingLeft: 16, paddingRight: 16, paddingTop: 5, paddingBottom: 5, background: '#F0F2F5', borderRadius: 32, overflow: 'hidden', border: '1px black solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                                <div className="Group9156" style={{position: 'relative'}}>
                                    <div style={{width: 16, height: 16, paddingTop: 2.21, paddingBottom: 2.67, paddingLeft: 2.21, paddingRight: 2.67, left: 0, top: 3, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                                        <div className="Group" style={{width: 11.13, height: 11.13, position: 'relative'}}>
                                            <div className="Vector" style={{width: 9.71, height: 9.71, left: 0, top: 0, position: 'absolute', border: '0.65px black solid'}}></div>
                                            <div className="Vector" style={{width: 2.84, height: 2.84, left: 8.29, top: 8.29, position: 'absolute', border: '0.65px black solid'}}></div>
                                        </div>
                                    </div>
                                    <div className="SearchByNameOrTrait" style={{left: 24, top: 0, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Search by name or trait</div>
                                </div>
                            </div>
                            <div className="Frame48096667" style={{width: 192, height: 40, background: '#F0F2F5', borderRadius: 32, border: '1px black solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 161, display: 'inline-flex'}}>
                                <div className="Group48096655" style={{position: 'relative'}}>
                                    <div className="Frame48096659" style={{width: 122, height: 21, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                                        <div className="PriceLowToHigh" style={{color: 'black', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', wordWrap: 'break-word'}}>Price low to high</div>
                                    </div>
                                    <div className="VuesaxLinearArrowDown" style={{width: 14, height: 14, left: 158, top: 3, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                                        <div className="ArrowDown" style={{width: 14, height: 14, position: 'relative'}}>
                                            <div className="Vector" style={{width: 9.24, height: 4.14, left: 2.38, top: 5.22, position: 'absolute', border: '0.60px black solid'}}></div>
                                            <div className="Vector" style={{width: 14, height: 14, left: 14, top: 14, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', opacity: 0}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                            <ProjectList data={tokens}></ProjectList>
                        </div>
        </div>:<div>loading</div>
    }</div>
  )
}
