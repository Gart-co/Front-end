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
  
  const [fx, setFx] = useState([]);
    useEffect(() => {
        let query = fx_query_generativeToken;
        let variables =  {
            "generativeTokenId": 24169,
            "generativeTokenId2": 24169,
        };
        variables.generativeTokenId = id_num;
        console.log("variables", variables);
        axios.post('https://api.fxhash.xyz/graphql',{ query
        , variables,
        }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(response => {
        let fxhash_data = (response.data.data);
        let json_obj = [];
        for(let i in fxhash_data)
        {
          json_obj[`${i}`]= (fx_data_traverse(fxhash_data[i]));
        }
        setFx(json_obj);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
    })
    
    useEffect(()=>{
      drawCardBorder1();
  }, loading)
  return (
    <div className='background home' style={{position:"relative"}}>
      <div style={{top:0, width:"100%", position:"relative"}}>
        <TopBar></TopBar>
      </div>
      {console.log("Project Data", fx)}
      {loading===false?<div>
                        <div style={{top:130, left:100, position:"relative",width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
                            <ProjectInfo data={fx.generativeToken}></ProjectInfo>
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
                            <ProjectList data={fx.generativeToken.entireCollection}></ProjectList>
                        </div>
        </div>:null
    }</div>
  )
}
