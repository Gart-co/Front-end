import React, {useEffect} from "react";
import "./Profile.css"
import { drawCardBorder } from "../../04/script";
function Profile(props){
    useEffect(()=>{
        drawCardBorder();
    }, [])
    const ETH_address = "0xa199563f55D5689765E6098c1aCC179Ab1bFD15f"
    return (
    
    <div className="Frame48096664" style={{width: '100%', height: '100%',  alignItems: 'flex-end', gap: 16, display: 'inline-flex'}}>
        {console.log(props.data)}
    <div className="Frame48096706" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
        <div className="Frame48096705" style={{justifyContent: 'center', alignItems: 'flex-end', gap: 16, display: 'inline-flex'}}>
            <img className="Img" style={{width: 108, height: 108, borderRadius: 9999, border: '1px black solid'}} src={props.data.avatarUri} />
            <div className="WaianoAkarana" style={{width: 278, height: 54, textAlign: 'center', color: 'black', fontSize: 28, fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word'}}>{props.data.name}</div>
        </div>
        <div className="Frame48096704" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div className="Actions" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                <div className="ButtonsIconLabelFilledRestingOnlightCopy3" style={{width: 120, height: 46, position: 'relative'}}>
                    <div className="Bg" style={{width: 108, height: 32, left: 6, top: 7, position: 'absolute', border: '1px black solid'}} />
                    <div className="Link" style={{left: 27.50, top: 12, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                        <div className="Frame48096699" style={{width: 12, height: 12, position: 'relative'}}>
                            <div className="Vector47" style={{width: 12, height: 0, left: 0, top: 6, position: 'absolute', border: '1px black solid'}}></div>
                            <div className="Vector48" style={{width: 12, height: 0, left: 6, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px black solid'}}></div>
                        </div>
                        <div className="Lable" style={{color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Follow</div>
                    </div>
                </div>
            </div>
            <div className="Counters" style={{width: 278, height: 45, position: 'relative'}}>
                <div className="Title" style={{width: 53, left: 20.50, top: 28, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>followers</div>
                <div className="Counters" style={{width: 25, left: 34.50, top: -2, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '800',  wordWrap: 'break-word'}}>96</div>
                <div className="Title" style={{width: 52, left: 204.50, top: 28, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '500',  wordWrap: 'break-word'}}>following</div>
                <div className="Counters" style={{width: 24, left: 218.50, top: -2, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '800',  wordWrap: 'break-word'}}>28</div>
                <div className="Title" style={{width: 32, left: 122.50, top: 28, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '500',  wordWrap: 'break-word'}}>items</div>
                <div className="Counters" style={{width: 25, left: 126.50, top: -2, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word'}}>64</div>
                <div className="Line" style={{width: 278, height: 0.52, left: 0, top: 0, position: 'absolute', border: '0.50px black solid'}}></div>
                <div className="Line" style={{width: 278, height: 0.52, left: 0, top: 44.48, position: 'absolute', border: '0.50px black solid'}}></div>
            </div>
        </div>
    </div>
    <div className="Frame48096707" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
        <div className="Frame48096703" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div style={{color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>🔗</div>
            <div className="ButtonsSocialWoLableOnlightCopy" style={{width: 22, height: 22, position: 'relative'}}>
                <div className="Bg" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: 'rgba(215.99, 215.99, 215.99, 0)', borderRadius: 23, border: '0.50px rgba(215.99, 215.99, 215.99, 0) solid'}} />
                <div className="ButtonsSocialLogoTwitter" style={{width: 16, height: 16, left: 3, top: 3, position: 'absolute'}}>
                    <img src="./Twitter.svg"/>
                </div>
            </div>
            <div className="ButtonsSocialWLableOnlightCopy" style={{width: 155, height: 46, position: 'relative'}}>
                <div className="Bg" style={{width: 155, height: 46, left: 0, top: 0, position: 'absolute', background: 'rgba(215.99, 215.99, 215.99, 0)', borderRadius: 23, border: '0.50px rgba(215.99, 215.99, 215.99, 0) solid'}} />
                <div className="Lable" style={{left: 5, top: 12, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div className="ButtonsSocialLogoEthereum" style={{width: 16, height: 16, position: 'relative'}}>
                        <img className="Shape" style={{width: 10, height: 16, left: 3, top: 0, position: 'absolute'}} src="./Eth middle.svg" />
                    </div>
                    <div className="Lable" style={{color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>0x59485…82590</div>
                </div>
            </div>
            <div className="ButtonsSocialWLableOnlightCopy" style={{width: 155, height: 46, position: 'relative'}}>
                <div className="Bg" style={{width: 155, height: 46, left: 0, top: 0, position: 'absolute', background: 'rgba(215.99, 215.99, 215.99, 0)', borderRadius: 23, border: '0.50px rgba(215.99, 215.99, 215.99, 0) solid'}} />
                <div className="Lable" style={{left: 5, top: 12, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div className="ButtonsSocialLogoEthereum" style={{width: 16, height: 16, position: 'relative'}}>
                        <img className="Shape" style={{width: 10, height: 16, left: 3, top: 0, position: 'absolute'}} src="./Tez middle.svg"  />
                    </div>
                    <div className="Lable" style={{color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>tz1Rgnd...RzyGr</div>
                </div>
            </div>
            <div className="ButtonsSocialWLableOnlightCopy" style={{width: 155, height: 46, position: 'relative'}}>
                <div className="Bg" style={{width: 155, height: 46, left: 0, top: 0, position: 'absolute', background: 'rgba(215.99, 215.99, 215.99, 0)', borderRadius: 23, border: '0.50px rgba(215.99, 215.99, 215.99, 0) solid'}} />
                <div className="Lable" style={{left: 5, top: 12, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div className="ButtonsSocialLogoEthereum" style={{width: 16, height: 16, position: 'relative'}}>
                        <img className="Shape" style={{width: 10, height: 16, left: 3, top: 0, position: 'absolute'}} src="./Eth middle.svg" />
                    </div>
                    <div className="Lable" style={{color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>0x59485…82590</div>
                </div>
            </div>
        </div>
        <div className="Name" style={{width: 540, height: 45, color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>{props.data.description}</div>
    </div>
</div>
    )
}

export default Profile