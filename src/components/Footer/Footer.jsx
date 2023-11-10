import React from 'react'

function FooterButton(text){
    return(
        <button onClick={() => {window.location.href = '/'}} className="SocialIcons" style={{width: 24, height: 24, position: 'relative'}}>
            {text}
        </button>
    )
}

export default function Footer() {
  return (
    <div className="Footer" style={{width: 1340, height: 332, position: 'relative'}}>
    <div className="Background" style={{width: 1340, height: 332, left: 0, top: 0, position: 'absolute', background: '#FFFAED', boxShadow: '0px 16px 60px rgba(0, 0, 0, 0.03)', borderRadius: 16, border: '2px black solid'}} />
    <div className="Frame1000004795" style={{width: 1152, height: 256, left: 106, top: 43, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 98, display: 'inline-flex'}}>
        <div className="Frame1000004791" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
            <div className="Frame1000004786" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                <div className="Logo" style={{height: 52, paddingTop: 1.80, paddingBottom: 2.20, paddingRight: 69, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                    <button onClick={() => {window.location.href = '/'}} className="Frame48096677" style={{width: 113, alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <img className="LogoBlack1" style={{width: 48, height: 48}} src="./GartLogo.png" />
                        <div className="Gart" style={{color: 'black', fontSize: 24, fontFamily: 'Poppins', fontWeight: '600', textTransform: 'capitalize', wordWrap: 'break-word'}}>GART</div>
                    </button>
                </div>
                <div className="AggregatingGenerativeArtNftTradingAndCurationOnBothTezosAndEthereum" style={{width: 410, color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Aggregating generative art NFT trading and curation <br/>on both Tezos and Ethereum</div>
                <div className="Frame1000004785" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                    <button onClick={() => {window.location.href = '/'}} className="SocialIcons" style={{width: 24, height: 24, position: 'relative'}}>
                        <img src='./TwitterLogo.svg'/>
                    </button>
                    <button onClick={() => {window.location.href = '/'}} className="SocialIcons" style={{width: 24, height: 24, position: 'relative'}}>
                        <img src='./DiscordLogo.svg'/>
                    </button>
                    <button onClick={() => {window.location.href = '/'}} className="SocialIcons" style={{width: 24, height: 24, position: 'relative'}}>
                        <img src='./LinkedInLogo.svg'/>
                    </button>
                    <button onClick={() => {window.location.href = '/'}} className="SocialIcons" style={{width: 24, height: 24, position: 'relative'}}>
                        <img src='./TelegramLogo.svg'/>
                    </button>
                </div>
            </div>
            <div className="2023AllRightsReserved" style={{width: 173, flex: '1 1 0', color: 'black', fontSize: 13, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>© 2023 . All rights reserved.</div>
        </div>
        <div className="Frame1000004794" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
            <div className="Frame1000004793" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 98, display: 'inline-flex'}}>
                <div className="Frame1000004790" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                    <div className="Art" style={{color: '#110229', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Art</div>
                    <div className="CurationAirdropBrowseAll" style={{height:156, display:'flex', flexDirection: 'column', justifyContent:'space-evenly', color: '#110229', fontSize: 18, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>
                        <div>Curation</div>
                        <div>Airdrop</div>
                        <div>Browse all</div>
                    </div>
                </div>
                <div className="Frame1000004789" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                    <div className="Company" style={{color: '#110229', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600',  wordWrap: 'break-word'}}>Company</div>
                    <div className="AboutUsCareersContactUs" style={{height:156, display:'flex', flexDirection: 'column', justifyContent:'space-evenly',color: '#110229', fontSize: 18, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>
                        <div>About Us</div>
                        <div>Careers</div>
                        <div>Contact Us</div>
                    </div>
                </div>
                <div className="Frame1000004788" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
                    <div className="Subscribe" style={{color: '#110229', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Subscribe</div>
                    <div className="SubscribeToGetLatestUpdatesBlogNewsFromUs" style={{width: 255, color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400',  wordWrap: 'break-word'}}>Subscribe to get latest updates, blog news from us</div>
                    <div className="Search" style={{width: '100%', height: '100%', paddingTop: 7, paddingBottom: 7, paddingLeft: 22, paddingRight: 9, background: 'white', borderRadius: 32, overflow: 'hidden', border: '1px black solid', justifyContent: 'flex-end', alignItems: 'center', gap: 76, display: 'inline-flex'}}>
    <div className="EmailAddress" style={{color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Email Address</div>
    <div className="Frame1000004787" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
        <div className="Ellipse1" style={{width: 34, height: 34, background: 'black', borderRadius: 9999, display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'center'}} >
            <img src='RightArrow.svg'/>
        </div>
    </div>
</div>
                </div>
            </div>
            <div className="Frame1000004792" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
                <div className="CookiePolicy" style={{color: 'black', fontSize: 13, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Cookie Policy</div>
                <div className="PrivacyPolicy" style={{color: 'black', fontSize: 13, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Privacy Policy</div>
                <div className="TermsOfService" style={{color: 'black', fontSize: 13, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Terms of Service</div>
            </div>
        </div>
    </div>
</div>
  )
}
