import React from "react";
import "./UpcomingProject.css"

import UpcomingProjectItem from "../../components/UpcomingProjectItem/UpcomingProjectItem"
import SingleSelector from "../../components/SingleSelector/SingleSelector";
function UpcomingProject(props){
    return(
        <div className="upcoming-project">     
            <div className="title1">
                <p>Upcoming Project</p>
            </div>
            <div className="selector">
                <SingleSelector group_name="Upcoming" value_list={[6,1,2,3,4,5]} text_list={["All", "G1", "G2", "G3", "G4", "G5"]}/>
        </div>
            <div className="upcome-list">
                <UpcomingProjectItem data = {props.json1} avatar="https://d2ekshiy7r5vl7.cloudfront.net/users/1682704907-m5dXLOIQeavjyETA0ShZ_CohW520fyeR2Kx37.jpg"></UpcomingProjectItem>
                <UpcomingProjectItem data = {props.json2} avatar="profile_squig.svg"></UpcomingProjectItem>
                <UpcomingProjectItem data = {props.json3} avatar="profile_squig.svg"></UpcomingProjectItem>
            </div>
        </div>   
    )
}

export default UpcomingProject