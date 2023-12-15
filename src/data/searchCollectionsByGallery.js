const sdk = require("api")("@reservoirprotocol/v3.0#axfpg1ilnet08rx");
const fs = require("fs");

const offset = "0";
// const offsets = ["23", "24", "25", "26", "27", "28", "29", "30"];

let targetData = {}
// Use offset to request the next batch of items.
// defaults to 0
async function demo(){
    sdk.auth("demo-api-key");

    return sdk.getSearchCollectionsV2({
        community: "artblocks",
        limit: "10",
        offset: offset,
        accept: "*/*",
    })
}
p = demo()
p.then(data => {targetData = data.data.collections;})
while(p == {}||p === undefined);
console.log(targetData);
