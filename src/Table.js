import React from "react";

export const Table = ({featureNames}, { data }) => {

  // Generate table header based on the column names
  const tableHeader = (
    <thead>
      <tr>
        {featureNames.map((featureName) => (
          <th key={featureName}>{featureName}</th>
        ))}
      </tr>
    </thead>
  );


  const tableRows = () =>{
    if(typeof data ===Array && data.length !== 0){
      console("Array True");
      return (
        data.map( (index) => 
        (<tr key={index}>
          {featureNames.map((featureName) => {
            if (typeof featureName === "string" && featureName.match(/Uri/) !== null && data.index.featureName !== null)
              return (<td key={featureName}><img src = {data.index.featureName} /></td>)
            return ( <td key={featureName}>{data.index.featureName}</td> )})}
        </tr>
      )))
    }
    else {
      console("Array False");
      return (<tr>
        {featureNames.map((featureName) => {
          if (typeof featureName === "string" && featureName.match(/Uri/) !== null && data.index.featureName !== null)
            return (<td key={featureName}><img src = {data.index.featureName} /></td>)
          return ( <td key={featureName}>{data.index.featureName}</td> )})}
      </tr>
    )}
  

  }
  // Generate the table
  return (
    <table>
      {tableHeader}
      <tbody>{tableRows}</tbody>
    </table>
  );
};



export const TableList = (props) => {
  var featureName = ["id", "name"];
  var data = props.data

   for (let iter in data){
    console.log(data[iter]);
    return <Table featureNames={featureName} data = {data[iter]} />}
}

