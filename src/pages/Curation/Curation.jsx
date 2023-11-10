import React, {useEffect, useState} from 'react'
import { TopBar, TopBarFixed } from '../../components/TopBar/TopBar'
import CurationCollectionItem from '../../components/CurationCollectionItem/CurationCollectionItem'
import CurationArticleItem from '../../components/CurationArticleItem/CurationArticleItem'
import {CurationRow} from '../../components/CurationHead/CurationHead'
import ScrollList from '../../components/ScrollList/ScrollList'
import Input from '../../components/Input/Input'
import Footer from '../../components/CurationHeadItem/Footer/Footer'
function AddArticle(){
    const [Add, setAdd] = useState(false);

    function clicked() {
        setAdd(true); 
    }

    if(!Add)
        return (
        <div className="AddArticle" style={{ width: 240, height: 342, position: 'relative' }}>
            <div className="Rectangle30420" style={{ width: 240, height: 342, left: 0, top: 0, position: 'absolute', borderRadius: 12, border: '2px white solid' }} />
            <button onClick={clicked} className="Frame143725878" style={{ left: 10, top: 93.50, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
            <div className="InterfaceEssentialPluseRegtangle" style={{ width: 72, height: 72, position: 'relative' }}>
                <img className="Icon" style={{ width: 60, height: 60, left: 6, top: 6, position: 'absolute' }} src='./Pluse regtangle.svg' alt="Plus Rectangle" />
            </div>
            <div className="AddArticle" style={{ width: 220, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Courier New', fontWeight: '700', wordWrap: 'break-word' }}>Add Article</div>
            <div className="ImportYourWork" style={{ width: 220, textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Courier New', fontWeight: '400', wordWrap: 'break-word' }}>Import your work.</div>
            </button>
        </div>
        );
    else
        return(       
            <div className="AddArticle" style={{width: 792, height: 342, position: 'relative', background: '#E3DAD0',borderRadius: 12, border: '2px white solid'}}>
            <div className="Rectangle30420" style={{width: 792, height: 342, left: 0, top: 0, position: 'absolute', borderRadius: 12}} />
            <div className="Frame143725878" style={{left: 343, top: 112, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div className="PasteLinkHere" style={{width: 418, color: 'black', fontSize: 32, fontFamily: 'Courier New', fontWeight: '700', wordWrap: 'break-word'}}>Paste link here</div>
                <input type="text" className="Http" style={{ width: 424, color: '#B1B1B1', fontSize: 20, fontFamily: 'Courier New', fontWeight: '400', wordWrap: 'break-word' }} value="http://" />
                <div className="Vector2068" style={{width: 424, height: 0, border: '1px black solid'}}></div>
                <div className="ElementTagsF5f5faEditableOnlightCopy" style={{width: 106, height: 36, position: 'relative'}}>
                    <div className="BgHover" style={{width: 106, height: 36, left: 0, top: 0, position: 'absolute', background: 'black', borderRadius: 10}}></div>
                    <div className="Tag" style={{left: 28.12, top: 9, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Preview</div>
                </div>
            </div>
            <div className="Group48096687" style={{width: 330, height: 342, left: 0, top: 0, position: 'absolute'}}>
                <div className="Rectangle30420" style={{width: 330, height: 342, left: 0, top: 0, position: 'absolute', borderRadius: 12, border: '2px white solid'}} />
                <div className="Frame143725878" style={{left: 9, top: 21, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                    <div className="Rectangle30419" style={{width: 312, height: 200, background: '#E6E6E6', borderRadius: 10}} />
                <Input initialValue={"Enter Your Title Here..."} style={{ width: 312, color: 'black', fontSize: 20, fontFamily: 'Courier New', fontWeight: '400', wordWrap: 'break-word',background:'transparent' }}/>
                <Input initialValue={"Enter Your Description Here..."} style={{ width: 312, color: 'black', fontSize: 20, fontFamily: 'Courier New', fontWeight: '400', wordWrap: 'break-word',background:'transparent' }}/>
                    <div style={{position: 'relative', left:0}}>
                        <Input className="Sep10Kaloh" style={{width: 100, color: 'black', fontSize: 12, fontFamily: 'Courier New', fontStyle: 'italic', fontWeight: '700', wordWrap: 'break-word'}} initialValue={"Time"}/>
                        <Input className="Sep10Kaloh" style={{width: 100, color: 'black', fontSize: 12, fontFamily: 'Courier New', fontStyle: 'italic', fontWeight: '700', wordWrap: 'break-word'}} initialValue={"Author"}/>
                    </div>
                </div>
            </div>
        </div>)
}

  
function ArticleItem(){
    return(    <div className="Frame143725883" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
    <div className="Group48096687" style={{width: 330, height: 342, position: 'relative'}}>
        <div className="Rectangle30420" style={{width: 330, height: 342, left: 0, top: 0, position: 'absolute', borderRadius: 12, border: '2px white solid'}} />
        <div className="Frame143725878" style={{left: 9, top: 14, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
            <img className="Rectangle30419" style={{width: 312, height: 200, borderRadius: 10}} src="./Rectangle 30419.png" />
            <div className="AVeryCoolProjectInWhichYouCanDrawBasicallyAnything" style={{width: 312, color: 'black', fontSize: 16, fontFamily: 'Courier New', fontWeight: '700', wordWrap: 'break-word'}}>A very cool project in which you can draw basically anything.</div>
            <div className="CollectorFocusedProjectWhereAGoodChunkOfTheCommunity" style={{width: 312, color: 'black', fontSize: 12, fontFamily: 'Courier New', fontWeight: '400', wordWrap: 'break-word'}}>Collector focused project where a good chunk of the community…</div>
            <div className="Sep10Kaloh" style={{width: 312, color: 'black', fontSize: 12, fontFamily: 'Courier New', fontStyle: 'italic', fontWeight: '700', wordWrap: 'break-word'}}>Sep 10｜KALOH</div>
        </div>
    </div>
</div>)
}

function ProjectItem(){
    return(
        <div className="CollectionCard" style={{width: 330, height: 296, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div className="Group48096685" style={{width: 330, height: 296, position: 'relative'}}>
                    <div className="Rectangle2" style={{width: 330, height: 296, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.58)', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.12)', borderRadius: 12, border: '2px white solid'}} />
                    <div className="Frame143725884" style={{width: 306.24, height: 283, left: 11.88, top: 7, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                        <div className="Frame143725885" style={{alignSelf: 'stretch', height: 283, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex'}}>
                            <img className="Rectangle3" style={{width: 316, height: 232, borderRadius: 10}} src="./Rectangle 3.png" />
                            <div className="Frame143725883" style={{alignSelf: 'stretch', paddingLeft: 8, paddingRight: 8, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                                <div className="Frame48096685" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'inline-flex'}}>
                                    <div className="StepByStep" style={{color: 'black', fontSize: 16, fontFamily: 'Courier New', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>Step by Step</div>
                                    <div className="Yazid" style={{alignSelf: 'stretch', height: 18, color: 'black', fontSize: 12, fontFamily: 'Courier New', fontWeight: '400', wordWrap: 'break-word'}}>Yazid</div>
                                </div>
                                <div className="Frame143725882" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', gap: 2, display: 'inline-flex'}}>
                                    <img className="Image116" style={{width: 24, height: 24, borderRadius: 4}} src="./ABlogo 1.png" />
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

export default function Curation() {
  return (
  <div className="Profile" style={{width: 1440, height: 3100, position: 'relative', background: '#FFFAED', borderRadius: 0, overflow: 'hidden'}}>
  <div className="ButtonsLabelFilledRestingOnlight" style={{width: 241, height: 46, left: 763, top: 1599, position: 'absolute'}}>
      <div className="Bg" style={{width: 241, height: 46, left: 0, top: 0, position: 'absolute', background: 'rgba(235, 240, 240, 0.10)', borderRadius: 23}} />
      <div className="Lable" style={{left: 83.78, top: 12, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Load More</div>
  </div>
  <img alt="img" className="Bg" style={{width: 1440, height: 362, left: 0, top: 0, position: 'absolute'}} src='./profile-bg.png' />
  <div className="Profile" style={{width: 291, height: 518, left: 74, top: 308, position: 'absolute'}} />
  <div className="Frame48096664" style={{left: 48, top: 308, position: 'absolute', justifyContent: 'center', alignItems: 'flex-end', gap: 16, display: 'inline-flex'}}>
      <div className="Frame48096706" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
          <div className="Frame48096705" style={{justifyContent: 'center', alignItems: 'flex-end', gap: 16, display: 'inline-flex'}}>
              <img alt="img" className="Img gen-art-card" style={{width: 108, height: 108, borderRadius: 9999}} src="./Img.png" />
              <div className="WaianoAkarana" style={{width: 278, height: 54, color: 'black', fontSize: 28, fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word'}}>Yazid</div>
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
                  <div className="Title" style={{width: 52, left: 204.50, top: 28, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>following</div>
                  <div className="Counters" style={{width: 24, left: 218.50, top: -2, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word'}}>28</div>
                  <div className="Title" style={{width: 32, left: 122.50, top: 28, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>items</div>
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
                          <img alt="img" className="Shape" style={{width: 10, height: 16, left: 3, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x16" />
                      </div>
                      <div className="Lable" style={{color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>0x59485…82590</div>
                  </div>
              </div>
              <div className="ButtonsSocialWLableOnlightCopy" style={{width: 155, height: 46, position: 'relative'}}>
                  <div className="Bg" style={{width: 155, height: 46, left: 0, top: 0, position: 'absolute', background: 'rgba(215.99, 215.99, 215.99, 0)', borderRadius: 23, border: '0.50px rgba(215.99, 215.99, 215.99, 0) solid'}} />
                  <div className="Lable" style={{left: 2, top: 12, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                      <div className="ButtonsSocialLogoEthereum" style={{width: 16, height: 16, position: 'relative'}}>
                          <img alt="img" className="Shape" style={{width: 10, height: 16, left: 3, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x16" />
                      </div>
                      <div className="Lable" style={{color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>0x5s7d5…8w90e1</div>
                  </div>
              </div>
          </div>
          <div className="Name" style={{width: 540, height: 45}}></div>
      </div>
  </div>
    <TopBarFixed/>
  
  <div className="Frame48096698" style={{left: 49, top: 500, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
      
        <ScrollList/>
      <div className="Articles" style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
    <div className="Frame1000004751" style={{height: 36, justifyContent: 'center', alignItems: 'flex-start', gap: 1138, display: 'inline-flex'}}>
        <div className="ElementTagsF5f5faEditableOnlightCopy" style={{width: 106, height: 36, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div className="BgHover" style={{width: 106, height: 36, background: 'black'}}></div>
            <div className="Tag" style={{position:"absolute",left:24,top:9, textAlign: 'center', color: '#D9D9D9', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Articles</div>
        </div>
        <div className="ElementTagsF5f5faEditableOnlightCopy" style={{width: 106, height: 36, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div className="BgHover" style={{width: 106, height: 36, background: 'black'}}></div>
            <div className="Tag" style={{position:"absolute",left:18,top:9, textAlign: 'center', color: '#D9D9D9', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Edit Articles</div>
        </div>
    </div>
    <div className="Frame143725882" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex',flexWrap:"wrap"}}>
       <ArticleItem/>
       <ArticleItem/>
       <ArticleItem/>
       <ArticleItem/>
       <ArticleItem/>
        <AddArticle/>
    </div>        
</div>
     
    <div className="Projects" style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
        <div className="ElementTagsF5f5faEditableOnlightCopy" style={{width: 106, height: 36, position: 'relative'}}>
            <div className="BgHover" style={{width: 106, height: 36, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
            <div className="Tag" style={{left: 28.12, top: 9, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Projects</div>
        </div>
        <div className="Frame48096690" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex'}}>
            <div className="Frame143725881" style={{width: 1350, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
            </div>
        </div>
    </div>
    <Footer/>
  </div>
</div>
  )
}