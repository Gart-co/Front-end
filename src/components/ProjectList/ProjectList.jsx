import React from 'react'
import ProjectItem from '../ProjectItem/ProjectItem'
import ProjectInfo from '../ProjectInfo/ProjectInfo'
import SingleSelector from '../SingleSelector/SingleSelector'
import ProfileItem from '../ProfileItem/ProfileItem'
import ProjectSelector from '../ProjectSelector/ProjectSelector'


function jsonExtract(modifyingJson, platform){
    let modifiedJson = {};

    if (platform === "Fxhash"){
        modifiedJson.id = modifyingJson.id;
        modifiedJson.displayUri = modifyingJson.displayUri;
        modifiedJson.owner_name = modifyingJson.owner_name;
        modifiedJson.iteration = modifyingJson.iteration;
        modifiedJson.platform = modifyingJson.platform;
        modifiedJson.artist = modifyingJson.author_name;

        //Market Price Stat
        modifiedJson.currency = "Tezos";
        modifiedJson.price = modifyingJson.lastSoldPrice;
        modifiedJson.listingprice = modifyingJson.activeListing_price;
        
        modifiedJson.activeListing_price = modifyingJson.activeListing_price;
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

export default function ProjectList(props) {
  return (
    <div className="project-list">
        <ProjectSelector></ProjectSelector>
        {props.data.map(item => (
            <ProjectItem className="project-item" data={jsonExtract(item, "Fxhash")}></ProjectItem>
        ))}
    </div>
    
  )
}
