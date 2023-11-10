import React, { useEffect } from 'react';
import LeftSidebar from '../../components/SideBar/SideBar';
import { TopBar } from '../../components/TopBar/TopBar';
import Advertisement from '../Advertisement/Advertisement';
import TrendingProject from "../TrendProject/TrendingProject"
import UpcomingProject from '../UpcomingProject/UpcomingProject';
import { ab_fetch_metadata } from '../../queries/strings/AbQueryStrings';
import "./Home.css"
let json1, json2, json3, json4, json5, json6;
function Home(props) {
  const trend = {
    name:"Invisibles",
    author:"IsmaHelio"
  }
  useEffect(() => {
    
    ab_fetch_metadata(`0x059edd72cd353df5106d2b9cc5ab83a52287ac3a`,`0`)
    .then(response => {json1 = response.data;})
    .catch(error => {console.log(error);});
    ab_fetch_metadata(`0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270`,`215000000`)
    .then(response => {json2 = response.data; })
    .catch(error => {console.log(error);});
    ab_fetch_metadata(`0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270`,`163000000`)
    .then(response => {json3 = response.data; })
    .catch(error => {console.log(error);});
    
    ab_fetch_metadata(`0x99a9b7c1116f9ceeb1652de04d5969cce509b069`,`441000000`)
    .then(response => {json4 = response.data;})
    .catch(error => {console.log(error);});
    ab_fetch_metadata(`0x99a9b7c1116f9ceeb1652de04d5969cce509b069`,`451000000`)
    .then(response => {json5 = response.data; })
    .catch(error => {console.log(error);});
    ab_fetch_metadata(`0x99a9b7c1116f9ceeb1652de04d5969cce509b069`,`447000000`)
    .then(response => {json6 = response.data; })
    .catch(error => {console.log(error);});

    

  }, []);
  return(
    <div className='background' style={{width: "1440px",height:"1460px",position:"relative", background:"#FFFAED"}}>
      <div style={{width:"130px",zIndex:3,position:"absolute",}}>
        <LeftSidebar path ="/Home"></LeftSidebar>
      </div>
        <TopBar></TopBar>
      <div style={{left: 290,  top: 186, margin:"0 0 0 0px", position:"absolute", zIndex:1, flexDirection:"column"}}>
        <div style={{position:"relative", left: 150}}> 
          <Advertisement data = {trend}></Advertisement>
        </div>
        <div style={{position:"relative",top:90}}>
          {json1!==undefined&json2!==undefined&json3!==undefined?<div><TrendingProject json1={json1} json2={json2} json3={json3}/></div>:<div>Not Loaded</div>}
          {json4!==undefined&json5!==undefined&json6!==undefined?<div style={{position:"absolute",top:450}}><UpcomingProject json1={json4} json2={json5} json3={json6}/></div>:<div>Not Loaded</div>}
        </div>
      </div>
    </div>
  );
}

export default Home;
