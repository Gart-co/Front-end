import React from "react";

export const GenTKTable = (props) =>(
    <table>
    <thead>
    <tr>
        {props.column.map(feature =>(
            <th key = {feature} style={{}}>{feature}</th>
        ))}
    </tr>
    </thead>
    <tbody>
    {props.data.map(item => (
    <tr key={item.id}>
    {props.column.map(feature =>{
        if (feature.match(/Uri/) !== null && feature !== null)
            return <td key = {feature} style={{}}><img src = {item[feature]} style={{width: '100px', height: '100px'}} /></td>
        else
            return <td key = {feature} style={{}}>{item [feature]}</td>
    })}
    </tr>
    ))}
    </tbody>
    </table>
)

export const ProjectTable = (props) => (
    <table>
    <thead>
    <tr>
        <th key = "displayUri">display</th>
        <th key = "generativeToken_id">id</th>
        <th key = "generativeToken_name">name</th>
        <th key = "generativeToken_author_name">author_name</th>
        <th key = "generativeToken_marketStats_floor">floor</th>
        <th key = "generativeToken_marketStats_highestSold">highestSold</th>
        <th key = "generativeToken_marketStats_listed">listed</th>
        <th key = "generativeToken_marketStats_primVolumeTz">primVolumeTz</th>
        <th key = "generativeToken_marketStats_secVolumeNb">secVolumeNb</th>
        <th key = "generativeToken_marketStats_secVolumeNb7d">secVolumeNb7d</th>
        <th key = "generativeToken_marketStats_secVolumeNb24">secVolumeNb24</th>
        <th key = "generativeToken_marketStats_secVolumeTz">secVolumeTz</th>
        <th key = "generativeToken_marketStats_secVolumeTz7d">secVolumeTz7d</th>
        <th key = "generativeToken_marketStats_secVolumeTz24">dispsecVolumeTz24lay</th>
        <th key = "generativeToken_royalties">royalties</th>
        <th key = "generativeToken_supply">supply</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td key = "displayUri"><img src = {props.data.generativeToken_thumbnailUri} style={{width: '100px', height: '100px'}} /></td>
        <td key = "generativeToken_id">{props.data.generativeToken_id}</td>
        <td key = "generativeToken_name">{props.data.generativeToken_name}</td>
        <td key = "generativeToken_author_name">{props.data.generativeToken_author_name}</td>
        <td key = "generativeToken_marketStats_floor">{props.data.generativeToken_marketStats_floor}</td>
        <td key = "generativeToken_marketStats_highestSold">{props.data.generativeToken_marketStats_highestSold}</td>
        <td key = "generativeToken_marketStats_listed">{props.data.generativeToken_marketStats_listed}</td>
        <td key = "generativeToken_marketStats_primVolumeTz">{props.data.generativeToken_marketStats_primVolumeTz}</td>
        <td key = "generativeToken_marketStats_secVolumeNb">{props.data.generativeToken_marketStats_secVolumeNb}</td>
        <td key = "generativeToken_marketStats_secVolumeNb7d">{props.data.generativeToken_marketStats_secVolumeNb7d}</td>
        <td key = "generativeToken_marketStats_secVolumeNb24">{props.data.generativeToken_marketStats_secVolumeNb24}</td>
        <td key = "generativeToken_marketStats_secVolumeTz">{props.data.generativeToken_marketStats_secVolumeTz}</td>
        <td key = "generativeToken_marketStats_secVolumeTz7d">{props.data.generativeToken_marketStats_secVolumeTz7d}</td>
        <td key = "generativeToken_marketStats_secVolumeTz24">{props.data.generativeToken_marketStats_secVolumeTz24}</td>
        <td key = "generativeToken_royalties">{props.data.generativeToken_royalties}</td>
        <td key = "generativeToken_supply">{props.data.generativeToken_supply}</td>
        
    </tr>
    </tbody>
    </table>

)



export const IterationTable = (props) => (
    <table>
    <thead>
    <tr>
        <th key = "displayUri">display</th>
        <th key = "objkt_id">objkt_id</th>
        <th key = "objkt_name">objkt_name</th>
        <th key = "objkt_owner_name">objkt_owner_name</th>
        <th key = "objkt_rarity">objkt_rarity</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td key = "displayUri"><img src = {props.data.objkt_displayUri} style={{width: '100px', height: '100px'}} /></td>
        <td key = "objkt_id">{props.data.objkt_id}</td>
        <td key = "objkt_name">{props.data.objkt_name}</td>
        <td key = "objkt_owner_name">{props.data.objkt_owner_name}</td>
        
        <td key = "objkt_rarity">
            {props.data.objkt_features.map(item => (
                <tr>
                    <td key = "Name">{item.name}</td>
                    <td key = "rarity">{item.rarity}</td>
                    <td key = "value">{item.value}</td>
                </tr>
                ))}

        </td>
        
    </tr>
    </tbody>
    </table>

)



export const SingleItemTable = (props) =>(
    <table>
    <thead>
    <tr>
        {props.column.map(feature =>(
            <th key = {feature} style={{}}>{feature}</th>
        ))}
    </tr>
    </thead>
    <tbody>
    <tr>
    {props.column.map(feature =>{
        if (feature.match(/Uri/) !== null && feature !== null)
            return <td key = {feature} style={{}}><img src = {props.data[feature]} style={{width: '100px', height: '100px'}} /></td>
        else
            return <td key = {feature} style={{}}>{props.data[feature]}</td>
    })}
    </tr>
    </tbody>
    </table>
)

export const UserCollectionTable = (props) =>(
    <table>
    <thead>
    <tr>
        <th key = "ID" style={{}}>ID</th>
        <th key = "Name">Name</th>
        <th key = "Display">Display</th>
        <th key = "Platform">Platform</th>
    </tr>
    </thead>
    <tbody>
    {props.data.map(item => (
    <tr key={item.id}>
        <td key = "ID">{item.id}</td>
        <td key = "Name">{item.name}</td>
        <td key = "Display"><img src = {item.displayUri} style={{width: '100px', height: '100px'}} /></td>
        <td key = "Platform">{item.platform}</td>
    </tr>
    ))}
    </tbody>
    </table>
)

export const UserListingTable = (props) =>(
    <table>
    <thead>
    <tr>
        <th key = "ID" style={{}}>ID</th>
        <th key = "Name">Name</th>
        <th key = "Display">Display</th>
        <th key = "Price">Price</th>
    </tr>
    </thead>
    <tbody>
    {props.data.map(item => (
    <tr key={item.id}>
        <td key = "ID">{item.objkt_id}</td>
        <td key = "Name">{item.objkt_name}</td>
        <td key = "Display"><img src = {item.displayUri} style={{width: '100px', height: '100px'}} /></td>
        <td key = "Price">{item.price}</td>
    </tr>
    ))}
    </tbody>
    </table>
)
export const UserOfferReceivedTable = (props) =>(
    <table>
    <thead>
    <tr>
        <th key = "ID" style={{}}>ID</th>
        <th key = "Name">Name</th>
        <th key = "Display">Display</th>
        <th key = "Price">Price</th>
    </tr>
    </thead>
    <tbody>
    {props.data.map(item => (
    <tr key={item.id}>
        <td key = "ID">{item.objkt_id}</td>
        <td key = "Name">{item.objkt_name}</td>
        <td key = "Display"><img src = {item.displayUri} style={{width: '100px', height: '100px'}} /></td>
        <td key = "Price">{item.price}</td>
    </tr>
    ))}
    </tbody>
    </table>
)
export const UserOfferGivenTable = (props) =>(
    <table>
    <thead>
    <tr>
        <th key = "ID" style={{}}>ID</th>
        <th key = "Name">Name</th>
        <th key = "Display">Display</th>
        <th key = "Price">Price</th>
        <th key = "BuyerID">BuyerID</th>
        <th key = "BuyerName">BuyerName</th>
    </tr>
    </thead>
    <tbody>
    {props.data.map(item => (
    <tr key={item.id}>
        <td key = "ID">{item.objkt_id}</td>
        <td key = "Name">{item.objkt_name}</td>
        <td key = "Display"><img src = {item.displayUri} style={{width: '100px', height: '100px'}} /></td>
        <td key = "Price">{item.price}</td>
        <td key = "BuyerID">{item.buyer_id}</td>
        <td key = "BuyerName">{item.buyer_name}</td>
    </tr>
    ))}
    </tbody>
    </table>
)