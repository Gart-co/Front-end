import React from 'react';
import LeftSidebar from '../../components/SideBar/SideBar';
import { TopBar } from '../../components/TopBar/TopBar';
import SingleSelector from '../../components/SingleSelector/SingleSelector';
function AirDrop(props) {
  return(
    <div className='background home' style={{position:"relative"}}>
      <div style={{width:"130px",zIndex:3,position:"absolute",}}>
        <LeftSidebar></LeftSidebar>
      </div>
      <div style={{top:0, width:"100%", height:"130px",zIndex:2,position:"fixed",}}>
        <TopBar></TopBar>
      </div>
      <div className='content' style={{margin:"0 0 0 80px", position:"relative", zIndex:1}}>
        <SingleSelector  value_list={[6,1,2,3,4,5]} text_list={["All", "G1", "G2", "G3", "G4", "G5"]}/>
      </div>
    </div>
  );
}

export default AirDrop;
