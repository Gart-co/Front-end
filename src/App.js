import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {query_actions, query_generativeTokens, query_user,query_general} from './query';
import {Table, TableList} from "./Table";
import variables from './fxhash.json' ;
import { gentkLiveDisplayUrl } from './display';
import {GenTKTable, UserTable, UserCollectionTable, IterationTable, ProjectTable, SingleItemTable} from './components'
//import { act } from 'react-dom/test-utils';

const uriSet = ["displayUri", "avatarUri", "metadataUri", ]

function data_traverse(obj, path = '') {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    const newPath = path ? `${path}_${key}` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(result, data_traverse(value, newPath));
    } else {
      result[newPath] = (value === null) ? '[Null]' : value;
    }

    if (Array.isArray(value)) {
      result[newPath] = value.map((item, i) => {
        if (typeof item === 'object') {
          item[`platform`] = "fxhash";
          return data_traverse(item, ``);
        } else {
          return item;
        }
      });
    } 

    if (typeof key === "string" && key.match(/Uri/) !== null && value !== null)
       result[newPath] = gentkLiveDisplayUrl(value);
  } 
  return result;
}
var tzkt_url = 'https://api.tzkt.io/v1/delegates?active=true&limit=20'
function App() {
  const [loading, setLoading] = useState(true);
  const [fx, setFx] = useState([]);
  const [bakers, setBakers] = useState([]);
  useEffect(() => {
    let query = query_general;
    axios.post('https://api.fxhash.xyz/graphql',{ query
   , variables,
  }, {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}).then(response => {
    let fxhash_data = (response.data.data);
    console.log("response:", fxhash_data);
      fxhash_data = data_traverse(fxhash_data);
    setFx(fxhash_data);
    setLoading(false);
  })
  .catch(error => {
    console.log(error);
  });
    axios.get('https://token.artblocks.io/0')
    .then(response => {
      console.log("art  block", response);
    })
    
    // axios.get(tzkt_url)
    //   .then(response => {
    //     setBakers(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }, []);

  return (
    <div>
    {console.log('fxhash data:', fx)}
    {axios.post}
    {/* {console.log('tzkt data:', bakers)} */}
    {loading? <p>loading</p> :
    <div>
    <SingleItemTable column = {["user_name","user_avatarUri","user_id","user_description"]} data = {fx} />
    <GenTKTable column = {["displayUri","id","name","author_name","marketStats_floor","marketStats_highestSold","marketStats_listed","marketStats_primVolumeTz","marketStats_secVolumeNb","marketStats_secVolumeNb7d","marketStats_secVolumeNb24","marketStats_secVolumeTz","marketStats_secVolumeTz7d","marketStats_secVolumeTz24","platform","royalties","supply"]} data = {fx.generativeTokens}/>
    <ProjectTable data = {fx}/>
    <IterationTable data = {fx}/>
    </div>
    } 
    </div>
  );
}

export default App;