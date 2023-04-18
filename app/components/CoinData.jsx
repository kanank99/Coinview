

async function useCoins() {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', { cache: 'no-store' })
    return await res.json() 
}

export default useCoins

//&order=market_cap_desc&per_page=250&page=1&sparkline=false