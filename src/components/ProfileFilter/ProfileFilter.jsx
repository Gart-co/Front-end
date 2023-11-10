import React, { Component } from 'react'

export default class ProfileFilter extends Component {
  render() {
    return (<div className="Categories" style={{width: '100%', height: "5rem", justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex', position:"relative",top:24}}>
    <div className="ElementTagsF5f5faEditableOnlightCopy" style={{width: 106, height: 36, position: 'relative'}}>
        <div className="BgHover" style={{width: 106, height: 36, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
        <div className="Tag" style={{left: 28.12, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>Curated</div>
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
</div>
    )
  }
}
