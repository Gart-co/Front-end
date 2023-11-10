var fx_query_general = `query Query($take: Int, $generativeTokenId: Float, $objktId: ObjktId,$userId: String, $name: String, $sort: GenerativeSortInput) {
  generativeTokens(take: $take, , sort: $sort) {
      name
      id
      author {
        name
      }
      marketStats {
        primVolumeTz
        secVolumeTz
        secVolumeTz24
        secVolumeTz7d
        secVolumeNb
        secVolumeNb24
        secVolumeNb7d
        floor
        highestSold
        listed
      }
      
      royalties
      supply
      entireCollection {
        owner {
          id
          name
          avatarUri
        }
      }
    displayUri
    objkts {
      iteration
      owner {
        name
      }
      name
      tags
      activeListing {
        price
        issuer {
          name
        }
        royalties
      }
    }
    thumbnailUri
  }
  
  user(id: $userId, name: $name) {
    id
    name
    flag
    description
    generativeTokens {
      id
      name
    }
    entireCollection {
      id
      name
      displayUri
      actions {
        type
        numericValue
        createdAt
      }
    }
    offersReceived {
      objkt {
        id
        name
      }     
     buyer {
        id
        name
      }
      createdAt
      acceptedAt
      cancelledAt
      price
    }
    offersSent {
      objkt {
        id
        name
      }      
      buyer {
        id
        name
      }
      createdAt
      acceptedAt
      cancelledAt
      price
    }
    listings {
      objkt {
        id
        name
      }
      createdAt
      acceptedAt
      cancelledAt
      price
    }
    actions {
      objkt {
        id
        name
        issuer {
          id
          name
        }
      }
      createdAt
      type
      numericValue
    }
    avatarUri
    objkts {
      id
      metadata
      name
      thumbnailUri
      listings {
        price
        acceptedAt
      }
      iteration
      lastSoldPrice
      minter {
        name
        id
        metadata
        avatarUri
        description
      }
      displayUri
      issuer {
        author {
          name
          avatarUri
          id
        }
      }
    }
  }
  
    objkt(id: $objktId) {
      issuer {
        id
        name
      }
      iteration
      displayUri
      id
      name
      createdAt
      rarity
      owner {
        id
        name
      }
      features
      actions {
        issuer {
          id
          name
        }
        createdAt
        type
        numericValue
      }
      activeListing {
        price
      }
      offers {
        objkt {
          offers {
            buyer {
              id
              name
            }
            createdAt
            acceptedAt
            cancelledAt
            price
          }
        }
      }
      listings {
        objkt {
          listings {
            id
            createdAt
            acceptedAt
            cancelledAt
            price
          }
        }
      }
      thumbnailUri
    }

    generativeToken(id: $generativeTokenId) {
      name
      id
      author {
        name
      }
      marketStats {
        primVolumeTz
        secVolumeTz
        secVolumeTz24
        secVolumeTz7d
        secVolumeNb
        secVolumeNb24
        secVolumeNb7d
        floor
        highestSold
        listed
      }
      
      royalties
      supply
      entireCollection {
        id
        owner {
          id
          name
          avatarUri
        }
      }
      thumbnailUri
    }
  
}`
var fx_query_generativeTokens = `query GenerativeToken($generativeTokenId: Float) {
    generativeToken(id: $generativeTokenId) {
      name
      id
      author {
        name
      }
      marketStats {
        primVolumeTz
        secVolumeTz
        secVolumeTz24
        secVolumeTz7d
        secVolumeNb
        secVolumeNb24
        secVolumeNb7d
        floor
        highestSold
        listed
      }
      
      royalties
      supply
      entireCollection {
        owner {
          id
          name
          avatarUri
        }
      }
    }
    
  }
  `
var fx_query_marketStats = ``
var fx_query_objkts = `query Objkt($slug: String, $objktId: ObjktId) {
  objkt(slug: $slug, id: $objktId) {
    issuer {
      id
      name
    }
    iteration
    displayUri
    id
    name
    createdAt
    rarity
    owner {
      id
      name
    }
    features
    actions {
      issuer {
        id
        name
      }
      createdAt
      type
      numericValue
    }
    activeListing {
      price
    }
    offers {
      objkt {
        offers {
          buyer {
            id
            name
          }
          createdAt
          acceptedAt
          cancelledAt
          price
        }
      }
    }
    listings {
      objkt {
        listings {
          id
          createdAt
          acceptedAt
          cancelledAt
          price
        }
      }
    }
  }
}`
var fx_query_user = `query User($userId: String, $name: String) {
  user(id: $userId, name: $name) {
    id
    name
    flag
    description
    generativeTokens {
      id
      name
    }
    entireCollection {
      id
      name
      displayUri
      actions {
        type
        numericValue
        createdAt
      }
    }
    offersReceived {
      objkt {
        id
        name
      }     
     buyer {
        id
        name
      }
      createdAt
      acceptedAt
      cancelledAt
      price
    }
    offersSent {
      objkt {
        id
        name
      }      
      buyer {
        id
        name
      }
      createdAt
      acceptedAt
      cancelledAt
      price
    }
    listings {
      objkt {
        id
        name
      }
      createdAt
      acceptedAt
      cancelledAt
      price
    }
    actions {
      objkt {
        id
        name
        issuer {
          id
          name
        }
      }
      createdAt
      type
      numericValue
    }
  }
      }
    } 
}`

var fx_query_generativeToken = `query Query($generativeTokenId: Float) {
  generativeToken(id: $generativeTokenId) {
    author {
      id
      name
    }
    displayUri
    entireCollection {
      displayUri
      id
      iteration
      lastSoldPrice
      mintedPrice
      name
      owner {
        name
        id
      }
      listings {
        price
      }
      activeListing {
        price
      }
    }
    gentkContractAddress
    id
    iterationsCount
    marketStats {
      floor
      secVolumeTz
      secVolumeNb
      secVolumeNb24
      secVolumeNb7d
      secVolumeTz24
      secVolumeTz7d
      primVolumeNb
      primVolumeTz
      listed
    }
    mintOpensAt
    name
    objktsCount
    royalties
    thumbnailUri
  }
}

`

export var fx_query_general;
export var fx_query_generativeTokens;
export var fx_query_objkts;
export var fx_query_user;
export var fx_query_generativeToken;