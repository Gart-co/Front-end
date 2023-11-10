import React, {useContext} from 'react'
import {NFTMarketplaceProvider, NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext"




function ConnectWalletPanel() {
    const {connectWallet} = useContext(NFTMarketplaceContext);
  return (
    <NFTMarketplaceProvider>
  <div className="Frame1677" style={{position: 'absolute', width: 531, height: 568, top:128, right: 24,  background: 'white', borderRadius: 16, border: '4px black solid'}}>
  <div className="Frame1676" style={{position: 'absolute', top:24, right:24, padding: 8, background: '#22252D', borderRadius: 48, justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
      <div className="Close" style={{width: 24, height: 24, padding: 6, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
          <img src='./shutdown.svg'/>
      </div>
  </div>
  <div className="Group1000004744" style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center', position: 'relative'}}>
    <div style={{width: 377, height:372, display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
      <div className="Frame1672" style={{width: 377, height: 130, left: 0, top: -50, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
          <div className="ConnectWallet" style={{alignSelf: 'stretch', color: 'black', fontSize: 48, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>Connect wallet</div>
          <div className="ChooseOneOfAvailableWalletProvidersOrCreateANewWallet" style={{alignSelf: 'stretch', color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '500',  wordWrap: 'break-word'}}>Choose one of available wallet providers or create a new wallet.</div>
      </div>
      <div className="Wallet" style={{width: 377, height: 138, left: 0, top: 0, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
          <div className="ConnectWalletButton" style={{width:377, height: 64, alignSelf: 'stretch', padding: 16, background: '#E45F35', borderRadius: 12, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
              <div className="IconText" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                  <div className="Icon" style={{width: 32, height: 32, position: 'relative'}}>
                      <div className="Vector" style={{width: 28.41, height: 22.05, left: 1.20, top: 4.85, position: 'absolute', background: '#F58C25'}}></div>
                      <div className="Vector" style={{width: 14.55, height: 15.28, left: 2.17, top: 0.85, position: 'absolute', background: '#81491F'}}></div>
                      <div className="Vector" style={{width: 12.39, height: 6.45, left: 1.20, top: 24.69, position: 'absolute', background: '#E48027'}}></div>
                      <div className="Vector" style={{width: 8.87, height: 12.93, left: 21.39, top: 2.24, position: 'absolute', background: '#81491F'}}></div>
                      <div className="Vector" style={{width: 13.85, height: 3.73, left: 13.55, top: 26.90, position: 'absolute', background: '#D9C6B7'}}></div>
                      <div className="Vector" style={{width: 10.01, height: 7.23, left: 20.25, top: 2.24, position: 'absolute', background: '#E48027'}}></div>
                      <div className="Vector" style={{width: 5.56, height: 8.85, left: 21.39, top: 9.47, position: 'absolute', background: '#E57F24'}}></div>
                      <div className="Vector" style={{width: 15.99, height: 3.21, left: 13.58, top: 28.18, position: 'absolute', background: '#C7B7AB'}}></div>
                      <div className="Vector" style={{width: 5.26, height: 4.89, left: 10.94, top: 23.29, position: 'absolute', background: '#D76F21'}}></div>
                      <div className="Vector" style={{width: 3.42, height: 2.89, left: 27.36, top: 26.16, position: 'absolute', background: '#2A2626'}}></div>
                      <div className="Vector" style={{width: 3.11, height: 5.40, left: 23.89, top: 18.13, position: 'absolute', background: '#D66F21'}}></div>
                      <div className="Vector" style={{width: 9.93, height: 8.90, left: 10.32, top: 9.72, position: 'absolute', background: '#E47E25'}}></div>
                      <div className="Vector" style={{width: 13.78, height: 4.89, left: 13.58, top: 23.29, position: 'absolute', background: '#E47F26'}}></div>
                      <div className="Vector" style={{width: 8.57, height: 2.77, left: 11.69, top: 18.32, position: 'absolute', background: '#D66F21'}}></div>
                      <div className="Vector" style={{width: 7.73, height: 8.58, left: 19.64, top: 18.32, position: 'absolute', background: '#E47F25'}}></div>
                      <div className="Vector" style={{width: 4.02, height: 2.19, left: 15.61, top: 18.91, position: 'absolute', background: '#32404E'}}></div>
                      <div className="Vector" style={{width: 4.51, height: 4.68, left: 11.69, top: 18.62, position: 'absolute', background: '#E57F25'}}></div>
                      <div className="Vector" style={{width: 1.30, height: 1.80, left: 25.03, top: 18.71, position: 'absolute', background: '#38424D'}}></div>
                      <div className="Vector" style={{width: 0.79, height: 4.57, left: 26.33, top: 18.13, position: 'absolute', background: '#E57F24'}}></div>
                  </div>
                  <button onClick={connectWallet} className="Primary" style={{textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>Metamask</button>
              </div>
              <div className="ChevronRight" style={{width: 24, height: 24, paddingTop: 7, paddingBottom: 7, opacity: 0, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                  <div className="Stroke" style={{width: 10, height: 5, transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '1.50px black solid'}}></div>
              </div>
          </div>
          <div className="ConnectWalletButton" style={{alignSelf: 'stretch', padding: 16, borderRadius: 12, border: '2px #E7E7E1 solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
              <div className="IconText" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                  <img className="2023062120191" style={{width: 28.87, height: 30, borderRadius: 6}} src="./temple wallet.png" />
                  <div className="Secondary" style={{textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>Temple wallet</div>
              </div>
              <div className="ChevronRight" style={{width: 24, height: 24, paddingTop: 7, paddingBottom: 7, opacity: 0, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                  <div className="Stroke" style={{width: 10, height: 5, transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '1.50px #494E5B solid'}}></div>
              </div>
          </div>
      </div>
      <div className="Frame1674" style={{width: 377, height: 24, left: 0, top: 20, position: 'relative', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
          <div className="Frame1673" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex'}}>
              <div className="ShowMore" style={{color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>Show more</div>
              <img src = './arrow-down.svg'/>
          </div>
          <div className="WhatIsAWallet" style={{color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>What is a wallet?</div>
      </div>
  </div>
  </div>
</div>
    </NFTMarketplaceProvider>
  )
}

export default ConnectWalletPanel