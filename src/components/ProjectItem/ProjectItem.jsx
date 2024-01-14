import React from "react";
import "./ProjectItem.css";

const ProjectItem = (props) => {
  return (<ProjectItemPriced data={props.data}></ProjectItemPriced>);
};

const ProjectItemPriced = (props) => {
    return (
      // <div className="project-item">
      //   <div className="image">
      //     <div className="art-wrapper">
      //       <img className="art" alt="Art" src={props.data.displayUri} />
      //     </div>
      //   </div>
      //   <div className="frame">
      //     <div className="group">
      //       <div className="div">
      //         <div className="title">{props.data.name}</div>
      //         <div className="text-wrapper">  </div>
      //         <div className="div-2">
      //           {props.data.artist==="-"?"Anonymous":props.data.artist}
      //         </div>
      
      //       </div>
      //       <div className="floor-wrapper">
      //         <div className="floor">
      //           <div className="title-4">Floor</div>
      //           <div className="XTZ-ICON">
      //             <img className="icon-img" alt="Xtz ICON" src="Path.svg"/>
      //           </div> 
      //           <div className="price">{props.data.price/1000000}</div>
      //         </div>
      //           {props.data.platform==="Fxhash"?
      //           <div className="div-2" style={{display:"flex", flexDirection:"row"}}>
      //             <div>{props.data.platform}</div>
      //             <img className="icon-img" src="FxhashSquare.png"/>
      //           </div>
      //           :null}
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div className="Frame48095482" style={{width: 248, height: 318, margin:5, background: '#FFFAED', boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.20)', borderRadius: 6, justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex'}}>
      <div className="Frame48095482" style={{width: 240, height: 300, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
          <div className="MarketplaceItemV1OnlightCopy" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                     <img className="Art" alt="Art" style={{width: 240, height: 240}} src={props.data.displayUri} />
              <div className="Frame48096662" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                  <div className="Title" style={{width: 45, height: 10, color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>{"#"+props.data.iteration}</div>
                  <div className="Frame48096663" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                      <div className="Title" style={{width: 48, height: 10, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>Owned by</div>
                      <div className="Title" style={{width: 80, height: 10, color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>{props.data.owner_name.length<=10?props.data.owner_name:props.data.owner_name.slice(0,10)+"..."}</div>
                  </div>
              </div>
              <div className="Frame48096661" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                  <div className="Frame48096653" style={{justifyContent: 'center', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                      <div className="Title" style={{width: 54, height: 11, color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>List Price</div>
                      <div className="Floor" style={{justifyContent: 'flex-end', alignItems: 'center', display: 'flex'}}>
                          <div className="XtzIcon" style={{width: 22, height: 22, padding: 1, background: '#FFFAED', borderRadius: 11, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>    
                           
                          </div>
                          <div className="Price" style={{width: 48, height:22, textAlign: 'right', color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>{typeof props.data.listingprice !== void 0?props.data.listingprice/1000000:"Null"}</div>
                      </div>
                      <div className="Frame48096645" style={{width: 90, height: 21, paddingTop: 1, paddingBottom: 9, background: '#FFFAED', borderRadius: 100, border: '0.50px black solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                          <div className="Buy" style={{flex: '1 1 0', height: 2, textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word'}}>Buy</div>
                      </div>
                  </div>
                  <div className="Frame48096653" style={{justifyContent: 'center', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                      <div className="Title" style={{width: 54, height: 11, color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Last Sale</div>
                      <div className="Floor" style={{justifyContent: 'flex-end', alignItems: 'center', display: 'flex'}}>
                          <div className="XtzIcon" style={{width: 22, height: 22, padding: 1, background: '#FFFAED', borderRadius: 11, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                               
                            </div>
                          <div className="Price" style={{width: 48, textAlign: 'right', color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>{props.data.price/1000000}</div>
                      </div>
                      <div className="Frame48096645" style={{width: 90, height: 21, paddingTop: 1, paddingBottom: 9, background: '#FFFAED', borderRadius: 100, border: '0.50px black solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                          <div className="Offer" style={{flex: '1 1 0', height: 2, textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word'}}>Offer</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
  };

const ProjectItemUnpriced =(props) =>{
    return (
        <div className="MarketplaceItemV1OnlightCopy" style={{width: '100%', height: '100%', background: '#FFFAED', boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.20)', borderRadius: 6, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
    <div className="MarketplaceItemV1OnlightCopy" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <img className="Art" style={{width: 240, height: 240, borderRadius: 14}} src="https://via.placeholder.com/240x240" />
        <div className="Frame48096662" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
            <div className="Title" style={{width: 45, height: 10, color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>#2290</div>
            <div className="Frame48096663" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                <div className="Title" style={{width: 48, height: 10, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>Owned by</div>
                <div className="Title" style={{width: 80, height: 10, color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>cestfreya.eth</div>
            </div>
        </div>
        <div className="Frame48096661" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
            <div className="Frame48096653" style={{justifyContent: 'center', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                <div className="Title" style={{width: 54, height: 11, color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Last Sale</div>
                <div className="Floor" style={{justifyContent: 'flex-end', alignItems: 'center', display: 'flex'}}>
                    <div className="XtzIcon" style={{width: 22, height: 22, padding: 1, borderRadius: 11, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div className="Path" style={{width: 13.15, height: 18, background: '#3391F6'}}></div>
                    </div>
                    <div className="Price" style={{width: 48, textAlign: 'right', color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', lineHeight: 21, wordWrap: 'break-word'}}>4,915</div>
                </div>
                <div className="Frame48096645" style={{width: 90, height: 21, paddingTop: 9, paddingBottom: 9, background: '#FFFAED', borderRadius: 100, border: '0.50px black solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                    <div className="Offer" style={{flex: '1 1 0', height: 2, textAlign: 'center', color: '#4B81A3', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word'}}>Offer</div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}
export default ProjectItem
