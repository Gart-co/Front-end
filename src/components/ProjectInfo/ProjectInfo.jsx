import React from 'react'

export default function ProjectInfo(props) {
  return (
  <div className="Frame48095493" style={{paddingTop: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
  <div className="Rectangle30392" >
    <img style={{width: 110, height: 110, background: '#5B5B5B', borderRadius: 12}} src={props.data.entireCollection[0].displayUri}/>
  </div>
  <div className="Frame48095491" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, display: 'inline-flex'}}>
  <div className="Frame48096666" style={{width: '100%', height:80, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
    <div className="Frame48095492" style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
        <div className="ProjectInfo-Title" style={{width: 200, color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '800',  wordWrap: 'break-word'}}>{props.data.name.length<=14?props.data.name:props.data.name.slice(0,12)+"..."}</div>
        <div className="ProjectInfo-Title" style={{color: '#5B5B5B', fontSize: 12, fontFamily: 'Inter', fontWeight: '200',  wordWrap: 'break-word'}}>{props.data.gentkContractAddress.substring(0,10)+"..."+props.data.gentkContractAddress.substring(props.data.gentkContractAddress.length-6)}</div>
        <div style={{width: 20, height: 20, position: 'relative'}}>
            <div className="Vector" style={{width: 15.37, height: 13.33, left: 2.17, top: 3, position: 'absolute', background: 'white', border: '1px #5B5B5B solid'}}></div>
        </div>
        <div className="Group48096638" style={{width: 16, height: 16, position: 'relative'}}>
            <div className="Rectangle30387" style={{width: 12, height: 12, left: 4, top: 0, position: 'absolute', background: 'white', borderRadius: 4, border: '1px #5B5B5B solid'}} />
            <div className="Rectangle30386" style={{width: 12, height: 12, left: 0, top: 4, position: 'absolute', background: 'white', borderRadius: 4, border: '1px #5B5B5B solid'}} />
        </div>
    </div>
    <div className="Frame48096665" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
        <div className="Frame48096663" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
            <div className="ProjectInfo-Title" style={{width: 52, height: 10, color: '#5B5B5B', fontSize: 10, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>Created by</div>
            <div className="ProjectInfo-Title" style={{width: 80, height: 10, color: '#5B5B5B', fontSize: 12, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>{props.data.author_name}</div>
        </div>
        <div className="Frame48096664" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
            <div className="ProjectInfo-Title" style={{width: 36, height: 10, color: '#5B5B5B', fontSize: 10, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>Gallery</div>
            <div className="ProjectInfo-Title" style={{width: 80, height: 10, color: '#5B5B5B', fontSize: 12, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Fxhash</div>
        </div>
    </div>
</div>
      <div className="Frame48095483" style={{height: 40, justifyContent: 'center', alignItems: 'flex-end', gap: 10, display: 'inline-flex'}}>
          <div className="ProjectInfo-Title" style={{flexDirection:"column",textAlign: 'center'}}><div style={{color: '#5B5B5B', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>{props.data.entireCollection.length}</div><div style={{color: '#5B5B5B', fontSize: 14, fontFamily: 'Inter', fontWeight: '800',  wordWrap: 'break-word'}}>Items</div></div>
          <div className="ProjectInfo-Title" style={{flexDirection:"column",textAlign: 'center'}}><div style={{color: '#5B5B5B', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>{props.data.mintOpensAt.substring(2,19)}</div><div style={{color: '#5B5B5B', fontSize: 14, fontFamily: 'Inter', fontWeight: '800',  wordWrap: 'break-word'}}>Minted</div></div>
          <div className="ProjectInfo-Title" style={{flexDirection:"column",textAlign: 'center'}}><div style={{color: '#5B5B5B', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>{props.data.royalties}</div><div style={{color: '#5B5B5B', fontSize: 14, fontFamily: 'Inter', fontWeight: '800',  wordWrap: 'break-word'}}>Royalties</div></div>
          <div className="ProjectInfo-Title" style={{flexDirection:"column",textAlign: 'center'}}><div style={{color: '#5B5B5B', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>12 XTZ</div><div style={{color: '#5B5B5B', fontSize: 14, fontFamily: 'Inter', fontWeight: '800',  wordWrap: 'break-word'}}>Final Mint</div></div>
          <div className="ProjectInfo-Title" style={{flexDirection:"column",textAlign: 'center'}}><div style={{color: '#5B5B5B', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>2.5%</div><div style={{color: '#5B5B5B', fontSize: 14, fontFamily: 'Inter', fontWeight: '800',  wordWrap: 'break-word'}}>Creator Fee</div></div>
      </div>
  </div>
  <div className="Counters" style={{width: 600, height: 58, position: 'relative'}}>
      <div className="Frame48095494" style={{left: 30, top: 4, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
          <div className="Frame48096659" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
              <div className="Frame48096645" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                  <div className="Counters" style={{textAlign: 'center', color: '#5B5B5B', fontSize: 18, fontFamily: 'Inter', fontWeight: '600',  wordWrap: 'break-word'}}>{props.data.marketStats_listed}</div>
                  <div className="ProjectInfo-Title" style={{textAlign: 'center', color: '#5B5B5B', fontSize: 12, fontFamily: 'Inter', fontWeight: '500',  wordWrap: 'break-word'}}>Listed</div>
              </div>
              <div className="Frame48096649" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                  <div className="Frame48096658" style={{justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                      <div className="XtzIcon" style={{width: 14, height: 14, padding: 1, borderRadius: 11, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                      <img className="icon-img" alt="Xtz ICON" src="../Path.svg"/>
                      </div>
                      <div className="Counters" style={{textAlign: 'center', color: '#5B5B5B', fontSize: 18, fontFamily: 'Inter', fontWeight: '600',  wordWrap: 'break-word'}}>{props.data.marketStats_floor/1000000}</div>
                  </div>
                  <div className="ProjectInfo-Title" style={{textAlign: 'center', color: '#5B5B5B', fontSize: 12, fontFamily: 'Inter', fontWeight: '500',  wordWrap: 'break-word'}}>Floor</div>
              </div>
              <div className="Frame48096650" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                  <div className="Counters" style={{textAlign: 'center', color: '#5B5B5B', fontSize: 18, fontFamily: 'Inter', fontWeight: '600',  wordWrap: 'break-word'}}>{props.data.marketStats_secVolumeNb}</div>
                  <div className="ProjectInfo-Title" style={{textAlign: 'center', color: '#5B5B5B', fontSize: 12, fontFamily: 'Inter', fontWeight: '500',  wordWrap: 'break-word'}}>Total change</div>
              </div>
              <div className="Frame48096653" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                  <div className="Frame48096658" style={{justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                      <div className="XtzIcon" style={{width: 14, height: 14, padding: 1, borderRadius: 11, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                      <img className="icon-img" alt="Xtz ICON" src="../Path.svg"/>
                      </div>
                      <div className="Counters" style={{textAlign: 'center', color: '#5B5B5B', fontSize: 18, fontFamily: 'Inter', fontWeight: '600',  wordWrap: 'break-word'}}>{Math.round(props.data.marketStats_secVolumeTz/1000000)}</div>
                  </div>
                  <div className="ProjectInfo-Title" style={{textAlign: 'center', color: '#5B5B5B', fontSize: 12, fontFamily: 'Inter', fontWeight: '500',  wordWrap: 'break-word'}}>Total Volume</div>
              </div>
          </div>
          <div className="Frame48096660" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
              <div className="Frame48096652" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                  <div className="Counters" style={{textAlign: 'center', color: '#5B5B5B', fontSize: 18, fontFamily: 'Inter', fontWeight: '600',  wordWrap: 'break-word'}}>{props.data.marketStats_secVolumeNb24}</div>
                  <div className="ProjectInfo-Title" style={{textAlign: 'center', color: '#5B5B5B', fontSize: 12, fontFamily: 'Inter', fontWeight: '500',  wordWrap: 'break-word'}}>1D Change</div>
              </div>
              <div className="Frame48096654" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                  <div className="Frame48096658" style={{justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                      <div className="XtzIcon" style={{width: 14, height: 14, padding: 1, borderRadius: 11, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <img className="icon-img" alt="Xtz ICON" src={"../Path.svg"}/>
                      </div>
                      <div className="Counters" style={{textAlign: 'center', color: '#5B5B5B', fontSize: 18, fontFamily: 'Inter', fontWeight: '600',  wordWrap: 'break-word'}}>{props.data.marketStats_secVolumeTz24/1000000}</div>
                  </div>
                  <div className="ProjectInfo-Title" style={{textAlign: 'center', color: '#5B5B5B', fontSize: 12, fontFamily: 'Inter', fontWeight: '500',  wordWrap: 'break-word'}}>1D Volume</div>
              </div>
              <div className="Frame48096647" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                  <div className="Counters" style={{textAlign: 'center', color: '#5B5B5B', fontSize: 18, fontFamily: 'Inter', fontWeight: '600',  wordWrap: 'break-word'}}>{props.data.marketStats_secVolumeNb7d}</div>
                  <div className="ProjectInfo-Title" style={{textAlign: 'center', color: '#5B5B5B', fontSize: 12, fontFamily: 'Inter', fontWeight: '500',  wordWrap: 'break-word'}}>7D Change</div>
              </div>
              <div className="Frame48096655" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                  <div className="Frame48096658" style={{justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                      <div className="XtzIcon" style={{width: 14, height: 14, padding: 1, borderRadius: 11, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <img className="icon-img" alt="Xtz ICON" src="../Path.svg"/>  
                    </div>
                      <div className="Counters" style={{textAlign: 'center', color: '#5B5B5B', fontSize: 18, fontFamily: 'Inter', fontWeight: '600',  wordWrap: 'break-word'}}>{props.data.marketStats_secVolumeTz7d/1000000}</div>
                  </div>
                  <div className="ProjectInfo-Title" style={{textAlign: 'center', color: '#5B5B5B', fontSize: 12, fontFamily: 'Inter', fontWeight: '500',  wordWrap: 'break-word'}}>7D Volume</div>
              </div>
          </div>
      </div>
      <div className="Line" style={{width: 585, height: 1, left: 21, top: 0, position: 'absolute', border: '0.50px #5B5B5B solid'}}></div>
      <div className="Line" style={{width: 585, height: 1, left: 21, top: 57, position: 'absolute', border: '0.50px #5B5B5B solid'}}></div>
  </div>
</div>
  )
}
