import React from "react";
import ProfileItem from "../ProfileItem/ProfileItem";
import './ProfileList.css'


function jsonExtract(modifyingJson, platform){
    let modifiedJson = {};

    if (platform === "Fxhash"){
        
        modifiedJson.id = modifyingJson.id;
        modifiedJson.name = modifyingJson.name;
        modifiedJson.displayUri = modifyingJson.thumbnailUri;
        modifiedJson.platform = modifyingJson.platform;
        modifiedJson.artist = modifyingJson.author_name;
        //Market Price Stat
        modifiedJson.currency = "Tezos";
        modifiedJson.price = modifyingJson.lastSoldPrice;
        // modifiedJson.floorChange = modifyingJson.floorChange;
        modifiedJson.secVol = modifyingJson.marketStats_secVolumeTz;
        modifiedJson.secNum1d = modifyingJson.marketStats_secVolumeNb24;
        modifiedJson.secVol1d = modifyingJson.marketStats_secVolumeTz24;
        modifiedJson.secNum7d = modifyingJson.marketStats_secVolumeNb7d;
        modifiedJson.secVol7d = modifyingJson.marketStats_secVolumeTz7d;
    }

    if (platform === "Opensea"){
        modifiedJson.name = modifyingJson.name;
        modifiedJson.displayUri = modifyingJson.image_url;
        modifiedJson.platform = "Opensea";
        modifiedJson.artist = "TBC";
        //Market Price Stat
        modifiedJson.currency = "Ethereum";
        modifiedJson.floor = modifyingJson.stats.floor_price;
        // modifiedJson.floorChange = modifyingJson.floorChange;
        modifiedJson.secVol = modifyingJson.stats.total_sales;
        modifiedJson.secNum1d = modifyingJson.stats.one_day_sales;
        modifiedJson.secVol1d = modifyingJson.stats.one_day_volume;
        modifiedJson.secNum7d = modifyingJson.stats.seven_day_sales;
        modifiedJson.secVol7d = modifyingJson.stats.seven_day_volume;
    }

    return (modifiedJson);
}


function ProfileList(props){
    return(
        <div className="profile-list">
            {props.data.objkts.map(item => (
                <ProfileItem className="profile-item" data={jsonExtract(item, "Fxhash")}></ProfileItem>
                ))}
        </div>
    )
}

export default ProfileList