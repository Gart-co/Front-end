import React, { useEffect, useState } from 'react';
import "./SideBar.css"
function clickButton(Url){
    
}



function LeftSidebar(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const BarButton = (props) => (
    <div>
        <a href={props.Url}  style={{width:"50px", display: "flex", alignItems: "center", background: "transparent", border: "none",padding:0}}>
        <div>
            <img src = {props.img} style = {{width:"24px",height:"24px"}}/>
        </div>
        <div className={props.selected?'selected':'font'}>{props.title}</div>
        {/* {isExpanded?(<p style={{marginLeft: "10px", color: "white"}}>{props.title}</p>):(null)} */}
        </a>
    </div>
)

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const sidebarStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    width: isExpanded ? '130px' : '80px',
    transition: 'width 0.3s ease-in-out',
    background: "blue",
  };

  const bottomButtonStyle = {
    position: 'fixed',
    bottom: 0,
  };
  

  return (
    <div
      className='sidebar gen-art-card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >  
      <div className='menu'>MENU</div>
      <div className='frame-menu'>
        <BarButton selected={props.path == "/Market"} className='frame' img='./Market_Icon.svg' title = {"Market"} Url={"/Market"}/>
        <BarButton selected={props.path == "/Mint"} className='frame' img='./Mint_Icon.svg' title = {"Mint"} Url={"/Mint"}/>
        <BarButton selected={props.path == "/Owned"} className='frame' img='./Owned_Icon.svg' title = {"Owned"} Url={"/Owned"}/>
        <BarButton selected={props.path == "/Watchlist"} className='frame' img='./Watchlist_Icon.svg' title = {"Watchlist"} Url={"/Watchlist"}/>
        <BarButton selected={props.path == "/Airdrop"} className='frame' img='./Airdrop_Icon.svg' title = {"Airdrop"} Url={"/Airdrop"}/>
        <BarButton selected={props.path == "/Membership"} className='frame' img='./Membership_Icon.svg' title = {"Membership"} Url={"/Membership"}/>
      </div>
      <div className='setting'>SETTING</div>
      <div className='frame-setting'>
        <BarButton className='frame' img='./Setting_Icon.svg' title = {"General Setting"} Url={"/"}/>
        <BarButton className='frame' img='./Profile_Setting_Icon.svg' title = {"Profile Setting"} Url={"/"}/>
      </div>
      <a href='/Curation' className='frame-profile'>
          <div className='profile-name'>Arctic</div>
          <div className='profile-role'>ETH/XTZ login</div>
          <img class="profile-image" src="https://gateway.fxhash.xyz/ipfs/QmcHasWHsaUVvZezurTeBEpKC3MyS223gMrucGraxvcQPn"/>
      </a>
      <div>

      </div>
    </div>
  );
}

export default LeftSidebar;