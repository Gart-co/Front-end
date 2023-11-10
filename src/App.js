import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {fx_query_actions, fx_query_generativeTokens, fx_query_user,fx_query_general} from './queries/strings/FxQueryStrings';
import variables from './fxhash.json' ;
import { gentkLiveDisplayUrl } from './fxdisplay';
import {MultiItemTable, IterationTable, SingleItemTable, Table, AbListTable} from './components/components'
//import { act } from 'react-dom/test-utils';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { ab_fetch_metadata, ab_query, ab_query_client, imageShow } from './queries/strings/AbQueryStrings';
import jsonSave from './receives/jsonSave';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Market from './pages/Market/Market';
import Test from './pages/Test/Test';
import Owned from './pages/Owned/Owned';
import SingleSelector from './components/SingleSelector/SingleSelector';
import AirDrop from './pages/AirDrop/AirDrop';
import Home from './pages/Home/Home.jsx';
import Project from './pages/Project/Project';
import Curation from './pages/Curation/Curation';
import {drawCardBorder} from "./04/script.js";
import { openseafetch } from './queries/OpenseaQuery';
import UrlDataFetcher from './components/UrlAnalyse/UrlDataFetcher';
import ConnectWalletPanel from './components/ConnectWalletPanel/ConnectWalletPanel';
import ComponentTest from './components/componentTest.jsx';


const uriSet = ["displayUri", "avatarUri", "metadataUri", ]

// const options = {
//   headers: {
//     accept: 'application/json',
//     'X-API-Key': '1a0129b9-0a02-48c0-95a8-db79749e5649'
//   }
// };

// axios.get('https://api.x2y2.org/v1/orders',options)
//   .then(function (response) {
//     console.log("x2 data:", response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


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

function App() {
  const [loading, setLoading] = useState(true);
  const [loadingOs, setLoadingOs] = useState(true);
  const [loading_ab, setLoadingab] = useState(true);
  const [loading_ab_sub, setLoadingabsub] = useState(true);
  const [fx, setFx] = useState([]);
  const [ab, setAb] = useState([]);
  const [sub, setSub] = useState({"projects":[{"artistAddress":"0","artistName":"0","contract":{"id":"0"},"displayUri":"","description":"","id":"0","invocations":"0","name":"0","royaltyPercentage":"0","tokens":[{"tokenId":0}],"website":""}]});
  const [bakers, setBakers] = useState([]);
  const [opensea, setOpensea] = useState({});
  useEffect(() => {

    let projectlist = `in App()`;
    ab_query().then(response =>{
    projectlist = response;
    setSub(projectlist);setTimeout(setLoadingabsub(false),5000);console.log(sub);})

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

  const options = 
  {
    method: 'GET',
    headers: {accept: 'application/json', 'X-API-KEY': '5da1e9f9b0524a3c834c143be0614642'}
  }
  
      
  fetch('https://api.opensea.io/api/v1/collections', options)
    .then(response => response.json())
    .then(response => {setOpensea(response);setLoadingOs(false);})
    .catch(err => console.error(err));

  // if (json1!==undefined&json2!==undefined&json3!==undefined)
  //   console.log(setAb(mergeJSONObjects(json1, json2, json3)))
    
  }, []);
  useEffect(() => {
    drawCardBorder();
  }, []);
  return (
    <BrowserRouter>
    {console.log('fxhash data:', fx)}
    {console.log("artblock data:", ab)}
    {console.log("artblock subgraph data:", sub)}
    {console.log("opensea loaded data", opensea)}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/Market" element={<div><Market data = {fx.generativeTokens}/></div>}/>
        <Route exact path="/Owned" element={loading?<p>Loading</p>:<Owned data = {fx.user}/>}/>
        <Route exact path="/Airdrop" element={<AirDrop/>}/>
        <Route exact path="/Test" element={<ConnectWalletPanel/>}/>
        <Route exact path="/Curation" element={<Curation data = {fx.user}/>}/>
        <Route exact path="/DataFetcher" element={<UrlDataFetcher/>}/>
        <Route exact path="/Project/:id" element={<Project/>}/>
        <Route exact path="/ComponentTest" element = {<ComponentTest/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;