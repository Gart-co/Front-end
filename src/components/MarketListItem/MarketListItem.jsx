import PropTypes from "prop-types";
import React, {useEffect} from "react";
import "./MarketListItem.css";

const ListItem = (props) => {
  if (typeof props.data.name !== 'string'){
    console.log(props.data);
    return <div>{typeof props.data.name}</div>
  }
  return (
    <div className="jobs-list-web-item-v gen-art-card1">
      <div className="frame">
        <img className="art" alt="Art" src={props.data.displayUri} />
        <div className="div">
        <a href={"http://localhost:3000/Project/"+props.data.id}>
          <div className="name">{props.data.name.length<=20?props.data.name:props.data.name.slice(0,18)+"..."}</div>
        </a>
          <div className="frame-2">
            <img className="element" alt="Element" src="Vector.svg" />
            <div className="title0">{props.data.artist}</div>
            <div className="text-wrapper">{props.data.platform}</div>
          </div>
        </div>
        <div className="frame-3">
          <div className="group">

            
            <div className="floor">
              {props.data.platform == 'Fxhash'? 
              <img className="img" alt="Xtz ICON" src={"Path.svg"} /> 
              : <img className="img" alt="Xtz ICON" src={"Eth middle.svg"} />}
              
              <div className="price">{Math.round(props.data.secVol)}</div>
            </div>
            <div className="subtitle">Transaction</div>
          </div>
          <div className="group-2">
              <div className="element-h">{Math.round(props.data.secNum1d)}</div>
            <div className="subtitle-2">24h Sales</div>
          </div>
          <div className="group-3">
          <div className="floor">
              {props.data.platform == 'Fxhash'? 
              <img className="img" alt="Xtz ICON" src={"Path.svg"} /> 
              : <img className="img" alt="Xtz ICON" src={"Eth middle.svg"} />}
              <div className="price">{Math.round(props.data.secVol1d)}</div>
            </div>
            <div className="subtitle-3">24h Volume</div>
          </div>
          <div className="group-4">
            <div className="element-h">{Math.round(props.data.secNum7d)}</div>
            <div className="subtitle-4">7D Sales</div>
          </div>
          <div className="group-5">
            <div className="floor">
              {props.data.platform == 'Fxhash'? 
              <img className="img" alt="Xtz ICON" src={"Path.svg"} /> 
              : <img className="img" alt="Xtz ICON" src={"Eth middle.svg"} />}
              <div className="price">{Math.round(props.data.secVol7d)}</div>
            </div>
            <div className="subtitle-5">7D Volume</div>
          </div>
          <div className="group-5">
            <div className="floor">
              {props.data.platform == 'Fxhash'? 
              <img className="img" alt="Xtz ICON" src={"Path.svg"} /> 
              : <img className="img" alt="Xtz ICON" src={"Eth middle.svg"} />}
              <div className="price"></div>
            </div>
            <div className="subtitle-5">Collection Offer</div>
          </div>
          <div className="frame-6">
            <div className="floor">
              {props.data.platform == 'Fxhash'? 
              <img className="img" alt="Xtz ICON" src={"Path.svg"} /> 
              : <img className="img" alt="Xtz ICON" src={"Eth middle.svg"} />}
              <div className="price">{props.data.floor!=='-'?(props.data.floor):0}</div>
            </div>
            <div className="subtitle-7">Floor ${Math.round(props.data.floor_usd)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ListItem