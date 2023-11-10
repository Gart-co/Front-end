import React, { useState, useEffect } from 'react';
import "./Advertisement.css"

function Advertisement(props){
    return(
    <div className="ad-frame gen-art-card">
        <div className="card-frame">
            <img className='card-img' src = "./trending.png"/>
            <div className='card-content'>
                <div className='card-title'>
                    {props.data.name}
                </div>
                <div className='card-text'>
                    {props.data.author}
                </div>
                <button className='card-button'>
                    <div className='card-button-text'>Follow</div>
                </button>
            
            </div>
        </div>
        <div className="title">
            Trending NFT this month
        </div>
        <div className="desc">
            don't run out of the best NFT this month, you have to collect it soon
        </div>
        <button className="button">
            <div className="button-text">Check it now</div>
        </button>
    </div>
    )
}

export default Advertisement