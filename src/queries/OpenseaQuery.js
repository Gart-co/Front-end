import React from "react"


export function openseafetch(){
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': '5da1e9f9b0524a3c834c143be0614642'}
      };
      
      fetch('https://api.opensea.io/api/v1/collections', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  }
