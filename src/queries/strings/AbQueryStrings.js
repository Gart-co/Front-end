import axios from 'axios';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'


const tokensQuery = `
query query($projectId: String) {
  projects(
    where: {contract_in: ["0x059edd72cd353df5106d2b9cc5ab83a52287ac3a", "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270"], projectId: $projectId}
  ) {
    id
    invocations
    artistName
    name
  }
}
`

const projectsQuery = `query projectQuery($skip: Int = 10, $first: Int = 10) {
  projects(first: 15) { 
    id
    name
    artistName
    artistAddress
    description
    royaltyPercentage
    website
    contract {
      id
    }
    tokens(first: 1) {
      tokenId
    }
    invocations
  }
}
`


export async function ab_query(){
  let tokensquery = projectsQuery;
  let list = `Loading`;
  await ab_query_client.query({
    query: gql(tokensquery),
    variables:{
      "first": 3
    }
  })
  .then((data) => {list = data.data; 
    console.log('Subgraph data: ', list);})
  .catch((err) => {
    console.log('Error fetching data: ', err)
  }
)
  return list;
}

export const ab_query_client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/artblocks/art-blocks',
  cache: new InMemoryCache(),
})

export async function ab_fetch_metadata(contract_hex, token_id){
  let metadata = `Loading Not Completed`;
  await axios
  .get(`https://token.artblocks.io/${contract_hex}/${token_id}`)
  .then(response =>
  {
     metadata=response;
  }).catch(error => {console.log(error)})
  return metadata;
}

export function detectContract(Uri){
  const hexRegex = /^(0x)?([a-f0-9]{2,})$/;
  return hexRegex.test(Uri)
}

export async function imageShow(obj) {
  let imgUri;
  await ab_fetch_metadata(obj.contract.id, (obj.tokens.length !== 0 ? obj.tokens[0].tokenId:0) ).then(response => {imgUri = response.data.image;console.log(imgUri)})
  return imgUri;
}
