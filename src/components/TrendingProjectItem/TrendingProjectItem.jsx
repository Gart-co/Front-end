import React, { useEffect } from "react"
import "./TrendingProjectItem.css"
import {drawCardBorder1} from "../../04/script"
function TrendingProjectItem(props){
    useEffect(()=>{
        drawCardBorder1();
    }, [])
    return(
    <div className="trending-item gen-art-card1">
            <img src = {props.data.image} className="item-img"/>

        <div className="item-content">
            <div className="item-content-header">
                <div className="item-title">
                    {props.data.name.length>16?props.data.name.substring(0,10)+"..."+props.data.name.substring(props.data.name.length-6):props.data.name}

                </div>
                <div className="item-platform">
                    Art Block
                </div>
            </div>
            <div className="user">
                <img className="user-avatar" src={props.avatar}/>
                <div className="user-component">
                    <div className="user-name">
                        {props.data.artist}
                    </div>
                    <div className="follow-button">
                        <div className="follow">Follow</div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="line"></div>
        <div className="market-trend">
            <div className="floor">
                <div className="market-title">
                    Floor
                </div>
                <div className="market-price-frame">
                    <img src="./Eth White.svg" className="coin-logo"/>
                    <div className="market-price-text">
                        2.33
                    </div>
                </div>
            </div>
            <div className="change">
                <div className="market-title">
                    Change
                </div>
                <div className="market-price-frame">
                    <div className="market-price-text">
                        10.2k
                    </div>
                </div>
            </div>
            <div className="percentage">
                <div className="market-title">
                    Percentage
                </div>
                <div className="market-price-frame">
                    <div className="market-price-text">
                        12%
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export default TrendingProjectItem