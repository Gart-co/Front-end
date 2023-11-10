import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {fx_query_actions, fx_query_generativeTokens, fx_query_user,fx_query_general} from '../../queries/strings/FxQueryStrings';
import variables from '../../fxhash.json' ;
import { gentkLiveDisplayUrl } from '../../fxdisplay';
import {MultiItemTable, IterationTable, SingleItemTable, Table, AbListTable} from '../../components/components'
//import { act } from 'react-dom/test-utils';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { ab_fetch_metadata, ab_query, ab_query_client, imageShow } from '../../queries/strings/AbQueryStrings';
import jsonSave from '../../receives/jsonSave';
import LeftSidebar from '../../components/SideBar/SideBar';
import {TopBar} from '../../components/TopBar/TopBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Advertisement from "../Advertisement/Advertisement"
import "./Test.css"
import { openseafetch } from '../../queries/OpenseaQuery';



const uriSet = ["displayUri", "avatarUri", "metadataUri", ]

const options = {
  headers: {
    accept: 'application/json',
    'X-API-Key': '1a0129b9-0a02-48c0-95a8-db79749e5649'
  }
};

axios.get('localhost::3001/orders',options)
  .then(function (response) {
    console.log("x2 data:", response.data);
  })
  .catch(function (error) {
    console.log(error);
  });


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
var tzkt_url = 'https://api.tzkt.io/v1/delegates?active=true&limit=20'

function Test(){
    const [loading, setLoading] = useState(true);
    const [loading_ab, setLoadingab] = useState(true);
    const [loading_ab_sub, setLoadingabsub] = useState(true);
    const [fx, setFx] = useState([]);
    const [ab, setAb] = useState([]);
    const [sub, setSub] = useState({"projects":[{"artistAddress":"0","artistName":"0","contract":{"id":"0"},"displayUri":"","description":"","id":"0","invocations":"0","name":"0","royaltyPercentage":"0","tokens":[{"tokenId":0}],"website":""}]});
    const [bakers, setBakers] = useState([]);
    useEffect(() => {
      let projectlist = `in App()`;
      ab_query().then(response =>{
      projectlist = response;
      setSub(projectlist);setTimeout(setLoadingabsub(false),5000);console.log(sub);});

      ab_fetch_metadata(`0x0a1bbd57033f57e7b6743621b79fcb9eb2ce3676`,`28000000`)
      .then(response => {setAb(response.data);setLoadingab(false); })
      .catch(error => {console.log(error);});


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
      
    }, []);
  
    return (
<div className='background home' style={{position:"relative"}}>
<div style={{width:"130px",zIndex:3,position:"absolute",}}>
  <LeftSidebar></LeftSidebar>
</div>
<div style={{top:0, width:"100%", height:"130px",zIndex:2,position:"fixed",}}>
  <TopBar></TopBar>
</div>
<div className='content' style={{margin:"0 0 0 80px", position:"relative", zIndex:1}}>
{openseafetch()}
{/* <Advertisement></Advertisement> */}
{console.log('fxhash data:', fx)}
{console.log("artblock data:", ab)}
{console.log("artblock subgraph data:", sub)}
{/* {axios.post} */}
{loading? <p>loading</p> :
<div>
<div>
<p>Fxhash Data Table</p>
</div>
<div>
  <SingleItemTable column = {["name","avatarUri","id","description"]} data = {fx.user} />
  <SingleItemTable column = {["name","avatarUri","id","description"]} data = {fx.user} />
  <SingleItemTable column = {["name","avatarUri","id","description"]} data = {fx.user} />
  <SingleItemTable column = {["name","avatarUri","id","description"]} data = {fx.user} />
  <SingleItemTable column = {["name","avatarUri","id","description"]} data = {fx.user} />
  <SingleItemTable column = {["name","avatarUri","id","description"]} data = {fx.user} />

  <topBar/>
  <MultiItemTable 
  column = {["displayUri","name","platform","marketStats_floor","marketStats_primVolumeTz","marketStats_secVolumeNb","marketStats_secVolumeNb7d","marketStats_secVolumeNb24","marketStats_secVolumeTz","marketStats_secVolumeTz7d","marketStats_secVolumeTz24","supply"]} 
  data = {fx.generativeTokens}
  name = {{displayUri:"",marketStats_floor:"price_floor", marketStats_primVolumeTz: "primVolume", marketStats_primVolumeNb: "primVolume"}}/>
  <SingleItemTable column = {["thumbnailUri","id","name","author_name","marketStats_floor","marketStats_highestSold","marketStats_listed","marketStats_primVolumeTz","marketStats_secVolumeNb","marketStats_secVolumeNb7d","marketStats_secVolumeNb24","marketStats_secVolumeTz","marketStats_secVolumeTz7d","marketStats_secVolumeTz24","royalties","supply"]} data = {fx.generativeToken}/>
  <IterationTable data = {fx.objkt}/>
  <Table data = {fx.objkt.features}/>
</div>
</div>
}
{loading_ab ? <p>loading</p> :
<div>
<p>ArtBlocks Data Table</p>
<SingleItemTable column = {["name","artist","collection_name","image","platform","website"]} data = {ab} />
</div>
}
{loading_ab_sub ? <p>loading</p> :
<div>
<p>ArtBlocks Data Table</p>
<AbListTable column = {["id","name","artistAddress","artistName","invocations","royaltyPercentage","displayUri"]} data = {sub.projects}></AbListTable>
</div>
}
</div>
</div>
    )
}

export default Test;