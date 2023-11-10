import React from 'react';
import LeftSidebar from '../../components/SideBar/SideBar';
import { TopBar } from '../../components/TopBar/TopBar';
import Profile from '../../components/ProfileInfo/Profile'
import ProfileList from '../../components/ProfileList/ProfileList';
import ProfileFilter from '../../components/ProfileFilter/ProfileFilter';
function Owned(props) {
  return(
    <div className='background home' style={{position:"relative", background:"#FFFAED"}}>
      <img src='./profile-bg.png' style={{position:"absolute", top:0, left:0, width:"100%",height:382, zIndex:1}}/>
      <div style={{top:0, width:"100%", zIndex:2,position:"fixed", backgroundColor: "rgba(255, 0, 0, 0.5)"}}>
        <TopBar></TopBar>
      </div>
      <div className='content' style={{margin:"0 0 0 -170px", position:"relative", zIndex:1, display:"flex", flexDirection:"column", top:330}}>
        <Profile style={{width:"100%", height:"32.375rem", flexShrink:0}} data = {props.data}></Profile>
        <ProfileFilter></ProfileFilter>
        <ProfileList data={props.data}></ProfileList>
      </div>
    </div>
  );
}

export default Owned;
