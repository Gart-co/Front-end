import React,{useEffect} from "react";
import { useState } from "react";
import "./SingleSelector.css";

import {drawCardBorder1} from "../../04/script"
function SingleSelectorOld(props) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleInputChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="box">
      <div className="frame-wrapper">
        <form className="frame">
          {props.value_list.map((item, index) => (
            <div className={`div-wrapper`} key={index} style={(selectedValue == props.group_name+item)? {backgroundColor:"black"} : {}}>
              <label className="text-wrapper" htmlFor={props.group_name+item}>{props.text_list[index]}</label>
              <input type="radio" id={props.group_name+item} name={props.group_name} value={props.group_name+item}
          checked={props.selectedOption === item} onChange={handleInputChange} />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}function SingleSelector(props) {
  const [selectedValue, setSelectedValue] = useState('');
  useEffect(()=>{
      drawCardBorder1();
  }, [])

  const handleInputChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
  <div className="Frame48095474" style={{position:'relative',width: '100%', height: 36, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 17, display: 'inline-flex', margin:10}}>
    <div className="Frame11 gen-art-card gen-art-card1" style={{paddingLeft: 24, paddingRight: 24, paddingTop: 6, paddingBottom: 6, background: '#182730', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div className="All" style={{color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', textTransform: 'capitalize', wordWrap: 'break-word'}}>
          <div>All</div>
          </div>
    </div>
    <div className="Frame12 gen-art-card gen-art-card1" style={{position:'relative',paddingLeft: 24, paddingRight: 24, paddingTop: 6, paddingBottom: 6, background: 'rgba(199.75, 199.75, 199.75, 0.10)', borderRadius: 20, border: '0.50px black solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div className="Ethereum" style={{color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', textTransform: 'capitalize', wordWrap: 'break-word'}}>
          <div>Ethereum</div>
          </div>
    </div>
    <div className="Frame13 gen-art-card gen-art-card1" style={{position:'relative',paddingLeft: 24, paddingRight: 24, paddingTop: 6, paddingBottom: 6, background: 'rgba(199.75, 199.75, 199.75, 0.10)', borderRadius: 20, border: '0.50px black solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div className="Tezos" style={{ color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', textTransform: 'capitalize', wordWrap: 'break-word'}}>
          <div>Tezos</div>
          </div>
    </div>
</div>
  );
}
export default SingleSelector