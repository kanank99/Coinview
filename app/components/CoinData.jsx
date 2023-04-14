import React from 'react'

async function useCoins() {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
    return await res.json() 
}

export default useCoins
