import React, {useEffect,useState} from 'react'
import "./ScrollList.css"
import { CurationRow } from '../CurationHead/CurationHead';
import { hover } from '@testing-library/user-event/dist/hover';
import PubSub from 'pubsub-js';


function ScrollItem(){
    return(
        <div className="CollectionCard" style={{width: 250, height: 209, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <div className="Group48096685" style={{width: 250, height: 209, position: 'relative'}}>
            <div className="Rectangle2" style={{width: 250, height: 209, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.58)', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.12)', borderRadius: 12, border: '2px white solid'}} />
            <div className="Frame143725884" style={{width: 232, height: 195, left: 9, top: 7, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                <div className="Frame143725885" style={{alignSelf: 'stretch', height: 195, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex'}}>
                    <img className="Rectangle3" style={{width: 232, height: 144, background: 'linear-gradient(0deg, #C4C4C4 0%, #C4C4C4 100%)', borderRadius: 10}} src="./Curation.png" />
                    <div className="Frame143725883" style={{alignSelf: 'stretch', paddingLeft: 8, paddingRight: 8, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="Frame48096685" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'inline-flex'}}>
                            <div className="StepByStep" style={{color: 'black', fontSize: 16, fontFamily: 'Courier New', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>Step by Step</div>
                            <div className="Yazid" style={{ height: 18, color: 'black', fontSize: 12, fontFamily: 'Courier New', fontWeight: '400', wordWrap: 'break-word'}}>Yazid</div>
                        </div>
                        <div className="Frame143725882" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', gap: 2, display: 'inline-flex'}}>
                            <img className="Image116" style={{width: 24, height: 24, borderRadius: 4}} src="ArtBlockSquare.png" />
                            <div className="Frame48096683" style={{justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
                                        <div className="Floor" style={{color: 'black', fontSize: 12, fontFamily: 'Courier New', fontWeight: '400', wordWrap: 'break-word'}}>Floor</div>
                                        <div className="XtzIcon" style={{width: 16, height: 16, padding: 1, borderRadius: 11, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                                            <img className="Path" src='./Tez middle.svg' style={{width: 8.77, height: 12}}/>
                                        </div>
                                        <div className="Price" style={{textAlign: 'right', color: 'black', fontSize: 12, fontFamily: 'Courier New', fontWeight: '400', wordWrap: 'break-word'}}>4,915</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

function CuratedItem(){

    

    return(
        
        <div className="Frame1000004758" style={{width: 124, height: 124, position: 'relative'}}>
        <img className="Art" style={{width: 120, height: 120, left: 0, top: 4, position: 'absolute', borderRadius: 14}} src="./Curation.png" />
        <div className="Shutdown" style={{width: 32, height: 32, left: 92, top: 0, position: 'absolute'}}>
            {/* <div className="Ellipse2165" style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', background: '#ffffff', borderRadius: 9999, border: '2px white solid'}} /> */}
            {/* <div className="Vector2069" style={{width: 16, height: 16, left: 8, top: 8, position: 'absolute', border: '2px white solid'}}></div>
            <div className="Vector2070" style={{width: 16, height: 16, left: 8, top: 24, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '2px white solid'}}></div> */}
            <img style={{position:'relative'}} src='./shutdown.svg'/>
        </div>
    </div>
    )
}

function ListItem(id, ifSelected){
    const [selected, setSelected] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const url = "./Curation.png";//记得改
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    useEffect(() =>{
        setSelected(id.ifSelected)
    }, [])
    const handleMouseClick = () =>{
        setSelected(!selected);
        PubSub.publish('flip', id.id);
    }
    return (
        <div className="Frame48095484" onClick={handleMouseClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
            <div className="MarketplaceItemV1OnlightCopy" style={{background: 'white', borderRadius: 14, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <img className="Art" style={{width: 240, height: 240, borderRadius: 14}} src={url} />
                <div className="Frame1000004754" style={{alignSelf: 'stretch', height: 24, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div className="Frame48095492" style={{justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
                        <div className="Title" style={{color: 'black', fontSize: 16, fontFamily: 'Yantramanav', fontWeight: '900', wordWrap: 'break-word'}}>K Garden Mom</div>
                        <div className="Title" style={{width: 30, height: 24, color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>#290</div>
                        <div className="Title" style={{color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Zancan</div>
                    </div>
                </div>
            </div>
            <div style={{position:"relative", left:-48, width:0}}>
            {selected? 
                isHovered?
                <img src='shutdown.svg'/>
                :<img src='shutup.svg'/>
                :isHovered?
                    <img src='shutup.svg'/>
                    : null    }
            </div>
        </div>
    )
}

export default function ScrollList() {
    const [position, setPosition] = React.useState(0)
    const totalWidth = 100;
    const scrollbarLeft = (position / totalWidth) * 100;
    const [isDragging, setIsDragging] = useState(false);
    const [curating, setCurating] = useState(false);
    const [page, setPage] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
    const [curatedCollection, setCuratedCollection] = useState(JSON.parse(localStorage.getItem('isCurated'))||[]);
    const handleMouseDown = (e) => {
        setIsDragging(true);
      };
    
      const handleMouseUp = () => {
        setIsDragging(false);
      };

      const handleMouseMove = (e) => {
        if (!isDragging) return;
    
        const scrollbar = document.getElementById('horizontal-scrollbar');
        const scrollbarRect = scrollbar.getBoundingClientRect();
        const offsetX = e.clientX - scrollbarRect.left;
        const newPosition = (offsetX / scrollbarRect.width) * 100;
        
        setPosition(newPosition);
      };

    
      const curatedCollectionFlip = (msg,  targetID) => {
        let temp = curatedCollection;
        if(temp.includes(targetID))
            temp = temp.filter(item => item !== targetID)
        else
            temp.push(targetID)
        temp.push(16)
        setCuratedCollection(temp);
        temp = temp.filter(item => item !== 16)
        setCuratedCollection(temp);
        console.log(curatedCollection)
        
        localStorage.setItem('isCurated', JSON.stringify(temp))
      }
    useEffect(() =>{
        PubSub.subscribe('flip', curatedCollectionFlip);
    })
      if(curating==true)
        return (
    
            <div>       
     <div className="Frame48096697" style={{height: 36, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
          <div className="Categories" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
              <div className="ElementTagsF5f5faEditableOnlightCopy" style={{width: 106, height: 36, position: 'relative'}}>
                  <div className="BgHover" style={{width: 106, height: 36, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
                  <div className="Tag" style={{left: 28.12, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Curated</div>
              </div>
              <div className="ElementTagsF5f5faEditableOnlightCopy4" style={{width: 112, height: 36, position: 'relative'}}>
                  <div className="BgHover" style={{width: 112, height: 36, left: 0, top: 0, position: 'absolute', border: '0.50px black solid'}}></div>
                  <div className="Tag" style={{left: 22.50, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Collections</div>
              </div>
              <div className="ElementTagsF5f5faEditableOnlightCopy5" style={{width: 112, height: 36, position: 'relative'}}>
                  <div className="BgHover" style={{width: 112, height: 36, left: 0, top: 0, position: 'absolute', border: '0.50px black solid'}}></div>
                  <div className="Tag" style={{left: 32.50, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Articles</div>
              </div>
              <div className="ElementTagsF5f5faEditableOnlightCopy6" style={{width: 112, height: 36, position: 'relative'}}>
                  <div className="BgHover" style={{width: 112, height: 36, left: 0, top: 0, position: 'absolute', border: '0.50px black solid'}}></div>
                  <div className="Tag" style={{left: 23.50, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Comments</div>
              </div>
              <div className="ElementTagsF5f5faEditableOnlightCopy7" style={{width: 112, height: 36, position: 'relative'}}>
                  <div className="BgHover" style={{width: 112, height: 36, left: 0, top: 0, position: 'absolute', border: '0.50px black solid'}}></div>
                  <div className="Tag" style={{left: 31.50, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Projects</div>
              </div>
              <div className="Frame1000004752" style={{height: 36, justifyContent: 'center', alignItems: 'flex-start', gap: 766, display: 'inline-flex'}}>
            <div className="ElementTagsF5f5faEditableOnlightCopy" style={{left:640 ,width: 106, height: 36, position: 'relative'}} onClick={()=>setCurating(!curating)}>
                <div className="BgHover" style={{width: 106, height: 36, background: 'black'}}></div>
                <div className="Tag" style={{position: 'Absolute', left: 12, top:8 ,textAlign: 'center', color: '#D9D9D9', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Finish editing</div>
            </div>
            
        </div>
          </div>
        </div>
            <div className="Search" style={{top:12, width: 1440, height: 1237, position: 'relative', left:-50, background: '#DED5CB'}}>
    <div className="Frame1000004768" style={{left: 45, top: 40, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 22, display: 'inline-flex'}}>
        
        <div className="Selected" style={{width: 1350, height: 140, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div className="Group1000004752" style={{width: 1350, height: 140, position: 'relative'}}>
                <div className="Rectangle30421" style={{width: 1350, height: 140, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 20}} />
                <div className="Frame1000004759" style={{width: 1048, height: 124, left: 155, top: 8, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                {curatedCollection.map(item => (
                    <CuratedItem id={item} ifSelected = {curatedCollection.indexOf(item)!==-1}/>))}
                </div>
                <div className="Frame1000004769" style={{width: 120, height: 88, left: 19, top: 26, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                    <div className="Button" style={{width: 120, height: 36, padding: 0, background: 'black', borderRadius: 12, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div className="Search" style={{color: 'white', fontSize: 20, fontFamily: 'Yantramanav', fontWeight: '500', wordWrap: 'break-word'}}>Selected</div>
                    </div>
                    <div className="Button" style={{width: 120, height: 36, padding: 0, background: '#D2975C', borderRadius: 12, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div className="Search" style={{color: 'white', fontSize: 20, fontFamily: 'Yantramanav', fontWeight: '500', wordWrap: 'break-word'}}>Display</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="SearchModule" style={{height: 84, padding: 24, background: 'white', borderRadius: 20, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'flex'}}>
            <div className="SearchComponents" style={{height:36, justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'inline-flex'}}>
                <div className="SearchBox" style={{width: 608, padding: 12, background: '#F2F4F8', borderRadius: 12, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                    <div className="SearchIcon" style={{width: 24, height: 25, position: 'relative'}}>
                        <img className="SearchIcon" style={{width: 23.48, height: 24.48, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/23x24" />
                    </div>
                    <div className="CollectionOrArtist" style={{width: 538, height: 25, color: 'black', fontSize: 20, fontFamily: 'Yantramanav', fontWeight: '500', wordWrap: 'break-word'}}>Collection or Artist</div>
                </div>
                <div className="DropDown" style={{width: 304, padding: 6, borderRadius: 12, overflow: 'hidden', border: '2px #F2F4F8 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div className="AllCategories" style={{width: 228, color: 'black', fontSize: 20, fontFamily: 'Yantramanav', fontWeight: '500', wordWrap: 'break-word'}}>All Chain</div>
                    <div className="Caret" style={{width: 18, height: 6, position: 'relative'}}>
                        <div className="Caret" style={{width: 18, height: 6, left: 6, top: 0, position: 'absolute', border: '3px black solid'}}></div>
                    </div>
                </div>
                <div className="Button" style={{width: 105, padding: 6, background: 'black', borderRadius: 12, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div className="Search" style={{color: 'white', fontSize: 20, fontFamily: 'Yantramanav', fontWeight: '500', wordWrap: 'break-word'}}>Search</div>
                </div>
            </div>
        </div>
        <div className="Frame1000004764" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 44, display: 'inline-flex'}}>
            <div className="Frame1000004763" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
                <div className="Frame1000004755" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex', flexWrap:'wrap'}}>
                    {page.map(item => (
                        <ListItem id={item} ifSelected = {curatedCollection.indexOf(item)!==-1}/>))}
                    
                </div>
            </div>
            <div className="Group1000004750" style={{width: 0, height: 680, position: 'relative'}}>
                <div className="Vector2071" style={{width: 0, height: 680, left: 0, top: 0, position: 'absolute', border: '10px #A4A5A6 solid'}}></div>
                <div className="Vector2072" style={{width: 0, height: 88, left: 0, top: 19, position: 'absolute', border: '20px white solid'}}></div>
            </div>
        </div>
    </div>
</div>
</div>
            )
    else
  return (
    <div>
        <div className="Frame48096697" style={{height: 36, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
          <div className="Categories" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
              <div className="ElementTagsF5f5faEditableOnlightCopy" style={{width: 106, height: 36, position: 'relative'}}>
                  <div className="BgHover" style={{width: 106, height: 36, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
                  <div className="Tag" style={{left: 28.12, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Curated</div>
              </div>
              <div className="ElementTagsF5f5faEditableOnlightCopy4" style={{width: 112, height: 36, position: 'relative'}}>
                  <div className="BgHover" style={{width: 112, height: 36, left: 0, top: 0, position: 'absolute', border: '0.50px black solid'}}></div>
                  <div className="Tag" style={{left: 22.50, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Collections</div>
              </div>
              <div className="ElementTagsF5f5faEditableOnlightCopy5" style={{width: 112, height: 36, position: 'relative'}}>
                  <div className="BgHover" style={{width: 112, height: 36, left: 0, top: 0, position: 'absolute', border: '0.50px black solid'}}></div>
                  <div className="Tag" style={{left: 32.50, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Articles</div>
              </div>
              <div className="ElementTagsF5f5faEditableOnlightCopy6" style={{width: 112, height: 36, position: 'relative'}}>
                  <div className="BgHover" style={{width: 112, height: 36, left: 0, top: 0, position: 'absolute', border: '0.50px black solid'}}></div>
                  <div className="Tag" style={{left: 23.50, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Comments</div>
              </div>
              <div className="ElementTagsF5f5faEditableOnlightCopy7" style={{width: 112, height: 36, position: 'relative'}}>
                  <div className="BgHover" style={{width: 112, height: 36, left: 0, top: 0, position: 'absolute', border: '0.50px black solid'}}></div>
                  <div className="Tag" style={{left: 31.50, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Projects</div>
              </div>
              <div className="ElementTagsF5f5faEditableOnlightCopy" style={{left:640 ,width: 106, height: 36, position: 'relative'}} onClick={()=>setCurating(!curating)}>
                <div className="BgHover" style={{width: 106, height: 36, background: 'black'}}></div>
                <div className="Tag" style={{position: 'Absolute', left: 14, top:8 ,textAlign: 'center', color: '#D9D9D9', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Edit Curation</div>
            </div>
          </div>
          </div>
        <CurationRow images={["https://gateway.fxhash.xyz/ipfs/QmVRQKaFoMUybxmUefj5TExktFWqTVMXBduKcaZgUHYctD", "https://media.fxhash.xyz/w_512/Qmcg7DaHFPcgRyZ3pbwuTgNAS9CP1U7zp5HkjFfKJ9FYWZ", "https://media.fxhash.xyz/w_512/QmahdQdRpX4bh83p3oo1zQRFVfMBYrfP4uiRg86LDpK1dx"]}></CurationRow>
        <CurationRow images={["https://i.seadn.io/s/raw/files/2eab16a8662a01daa44cfc803997ce6c.png", "https://i.seadn.io/gcs/files/3d7f982c2f9699caa9e1d2ca4061aa23.png", "https://i.seadn.io/gcs/files/6123b7e074613dde85dbc987fb3e7843.png"]}></CurationRow>

        <div  style={{top: 12, position:"relative",height: 36, justifyContent: 'center', alignItems: 'flex-start', gap: 1138, display: 'inline-flex'}}>
        <div className="ElementTagsF5f5faEditableOnlightCopy" style={{width: 106, height: 36, position: 'relative'}}>
                <div className="BgHover" style={{width: 106, height: 36, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
                <div className="Tag" style={{left: 19.12, top: 9, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 12, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>Collections</div>
        </div>
        <div className="ElementTagsF5f5faEditableOnlightCopy" style={{right: 0, width: 106, height: 36, position: 'relative'}} >
            <div className="BgHover" style={{width: 106, height: 36, left: 0, top: 0, position: 'absolute',background: 'black'}}></div>
            <div className="Tag" style={{left: 11, top: 9, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Edit Collection</div>
        </div>
        </div>

    <div className="Frame143725881" style={{width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex', 
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflowX: 'scroll',
        overflowY: 'hidden',
        left:{position},
        position:'relative',
        top: 16}}>
    
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
        <ScrollItem/>
</div>
    {/* <div className="Collection" style={{width: '100%', height: '100%', paddingTop: 10, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
    <div id='horizontal-scrollbar' className="Group48096629" style={{width: 807, height: 26, position: 'relative'}}>
        <div className="Vector2062" style={{width: 807, height: 0, left: 0, top: 13, position: 'absolute', border: '5px black solid'}}></div>
        <div className="Frame48096687" style={{width: 608, height: 0, left: 199, top: 13, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div className="Vector2061" style={{width: 608, height: 0, border: '5px #A4A4A4 solid'}}></div>
        </div>
        <div 
        draggable='true' className="Ellipse2164" style={{width: 26, height: 26, left: {position}, top: -0, position: 'absolute', background: 'white', borderRadius: 9999, border: '3px black solid'}} />
    </div>
</div> */}
</div>
  )
}
