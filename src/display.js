export function gentkLiveDisplayUrl(uri) {
    // you can use another gateway if you prefer
    const gateway = "https://gateway.fxhash.xyz/ipfs/"
    return gateway + uri.substring(7)
}