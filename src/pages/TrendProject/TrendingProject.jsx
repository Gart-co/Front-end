import React from "react";
import "./TrendingProject.css"
import TrendingProjectItem from "../../components/TrendingProjectItem/TrendingProjectItem";
import SingleSelector from "../../components/SingleSelector/SingleSelector";
function TrendingProject(props){
    return(
        <div className="trending-project">     
            <div className="title1">
                <p>Trending Project</p>
            </div>
            <div className="selector">
                <SingleSelector selectedOption="6" group_name="trend" value_list={[6,1,2,3,4,5]} text_list={["All", "G1", "G2", "G3", "G4", "G5"]}/>
        </div>
            <div className="trend-list">
                <TrendingProjectItem data = {props.json1} avatar="profile_squig.svg"></TrendingProjectItem>
                <TrendingProjectItem data = {props.json2} avatar="https://d2ekshiy7r5vl7.cloudfront.net/users/2a00a5e1-f720-4fa6-9044-b291a709b44a-YPgWTEUS_400x400[1].jpg"></TrendingProjectItem>
                <TrendingProjectItem data = {props.json3}  avatar="profile_squig.svg"></TrendingProjectItem>
            </div>
        </div>   
    )
}

export default TrendingProject