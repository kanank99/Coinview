import { useRouter } from 'next/navigation'

const CoinId = () => {
  const router = useRouter()
  const { id } = router.query
  console.log('this is the id: ', id)
  return <p>Coin: {id}</p>
}

export default CoinId