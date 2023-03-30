var query_general = `query Query($take: Int, $generativeTokenId: Float, $objktId: Float,$userId: String, $name: String) {
  generativeTokens(take: $take) {
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
var query_generativeTokens = `query GenerativeToken($generativeTokenId: Float) {
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
var query_marketStats = ``
var query_objkts = `query Objkt($slug: String, $objktId: Float) {
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
var query_user = `query User($userId: String, $name: String) {
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


export var query_general;
export var query_generativeTokens;
export var query_objkts;
export var query_user;