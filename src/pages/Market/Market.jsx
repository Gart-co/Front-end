import React, { useEffect, useState } from 'react';
import MarketList from '../../components/MarketList/MarketList'
import LeftSidebar from '../../components/SideBar/SideBar';
import { TopBar } from '../../components/TopBar/TopBar';
import ListItem from '../../components/MarketListItem/MarketListItem';
import { openseafetch } from '../../queries/OpenseaQuery';
import {fx_query_actions, fx_query_generativeTokens, fx_query_user,fx_query_general} from '../../queries/strings/FxQueryStrings';
import { gentkLiveDisplayUrl } from '../../fxdisplay';
import axios from 'axios';
import variables from '../../fxhash.json';
import SingleSelector from '../../components/SingleSelector/SingleSelector';

import {drawCardBorder} from "../../04/script"

function MarketHead(){
  return (
    <div className="Frame48096662" style={{width: 1104, height: 32, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
    <div className="AnalyticsCountersV1" style={{flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 0, paddingRight: 0, background: 'white', borderRadius: 12, overflow: 'hidden', border: '1px black solid', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <div className="Frame48096661" style={{justifyContent: 'center', alignItems: 'center', gap: 20, display: 'flex'}}>
            <div className="Frame48096660" style={{justifyContent: 'center', alignItems: 'flex-start', display: 'flex'}}>
            <img src='./Dollar.svg'/>
                <div className="Number" style={{color: '#090000', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>316.94k</div>
            </div>
            <div className="Title" style={{color: 'rgba(0, 0, 0, 0.50)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>All</div>
            <div className="Amount" style={{textAlign: 'right', color: '#090000', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>+19%</div>
        </div>
    </div>
    <div className="AnalyticsCountersV1" style={{flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 0, paddingRight: 0, background: 'white', borderRadius: 12, overflow: 'hidden', border: '1px black solid', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <div className="Frame48096661" style={{justifyContent: 'center', alignItems: 'center', gap: 20, display: 'flex'}}>
            <div className="Frame48096660" style={{justifyContent: 'center', alignItems: 'flex-start', display: 'flex'}}>
                <div className="EthIcon" style={{width: 22, height: 22, padding: 1, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <img src='./ETH middle.svg'/>
                </div>
                <div className="Number" style={{color: '#090000', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>36.94k</div>
            </div>
            <div className="Title" style={{color: 'rgba(0, 0, 0, 0.50)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Ethereum </div>
            <div className="Amount" style={{textAlign: 'right', color: '#090000', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>+29%</div>
        </div>
    </div>
    <div className="AnalyticsCountersV1" style={{width: 252, alignSelf: 'stretch', paddingLeft: 0, paddingRight: 0, background: 'white', borderRadius: 12, overflow: 'hidden', border: '1px black solid', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <div className="XtzIcon" style={{width: 22, height: 22, padding: 1, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
           
        <img src='./Tez middle.svg'/></div>
        <div className="Frame48096661" style={{justifyContent: 'center', alignItems: 'center', gap: 20, display: 'flex'}}>
            <div className="Frame48096660" style={{justifyContent: 'center', alignItems: 'flex-start', display: 'flex'}}>
                <div className="Number" style={{color: '#090000', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>200.94k</div>
            </div>
            <div className="Title" style={{color: 'rgba(0, 0, 0, 0.50)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Tezos </div>
            <div className="Amount" style={{textAlign: 'right', color: '#090000', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>+9%</div>
        </div>
        
    </div>
    <div className="AnalyticsCountersV1" style={{flex: '1 1 0', alignSelf: 'stretch', background: 'white', borderRadius: 12, overflow: 'hidden', border: '1px black solid', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <div className="Frame48096661" style={{justifyContent: 'center', alignItems: 'center', gap: 60, display: 'flex'}}>
            <div className="Frame48096659" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                <div className="FloorHighToLow" style={{color: 'black', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', wordWrap: 'break-word'}}>Floor high to low</div>
            </div>
            <div className="VuesaxLinearArrowDown" style={{width: 14, height: 14, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div className="ArrowDown" style={{width: 14, height: 14, position: 'relative'}}>
                 <img src='arrow-down.svg'/>
                 </div>
            </div>
        </div>
      </div>
</div>
  )
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

function Market(props) {
  const [loading, setLoading] = useState(true);
  const [loadingOs, setLoadingOs] = useState(true);
  const [fx, setFx] = useState([]);
  const [opensea, setOpensea] = useState({});
  const [reservoir, setReservoir] = useState({});
  const [drawed, setDrawed] = useState(false);
  useEffect(() => {

    const options = {method: 'GET', headers: {accept: '*/*', 'x-api-key': 'demo-api-key'}};

    fetch('https://api.reservoir.tools/collections/trending/v1?limit=10&sortBy=volume', options)
    .then(response => response.json())
    .then(response => {console.log("Res response", response); setReservoir(response.collections)})
    .catch(err => console.error(err));
  }, [])

  useEffect(() => {

    let query = fx_query_general;
    axios.post('https://api.fxhash.xyz/graphql',{ query
    , variables,
    }, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response => {
    let fxhash_data = (response.data.data);
    console.log('fxhash data 114', fxhash_data)
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



  const options = 
  {
    method: 'GET',
    headers: {accept: 'application/json', 'X-API-KEY': '5da1e9f9b0524a3c834c143be0614642'}
  }
  
      
  fetch('https://api.opensea.io/api/v1/collections?offset=0&limit=300', options)
    .then(response => response.json())
    .then(response => {setOpensea(response);setLoadingOs(false);console.log("opensea data for market page",response);})
    .catch(err => console.error(err));
  }, [])

  function drawlocal(){
    drawCardBorder();
    setDrawed(true);
  }
  return(
    <div className='background home' style={{position:"relative",background:"#FFFAED"}}>
      <div style={{width:"130px",zIndex:3,position:"absolute",}}>
        <LeftSidebar path ="/Market"></LeftSidebar>
      </div>
      <div style={{top:0, width:"100%", height:"130px",zIndex:2,position:"fixed",}}>
        <TopBar></TopBar>
      </div>
      <div className='content' style={{margin:"0 0 0 80px", position:"relative", zIndex:1}}>
        <MarketHead/>
      {
        loading?<p>Loading</p>:
          <div>
          <MarketList data={reservoir} platform="Reservoir"></MarketList>
            <MarketList data={fx.generativeTokens} platform="Fxhash"></MarketList>
            {/* <MarketList data={opensea} platform="ArtBlock"></MarketList> */}
          </div>
      }
      {loading||loadingOs||drawed?console.log("Not Drawed"):drawlocal()}
      </div>
    </div>
  );
}

export default Market;
