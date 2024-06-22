import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Menu from './components/menu/Menu'
import Main from './pages/Main/Main'

export default function App() {
  const [data, setData] = useState({})
  const [page, setPage] = useState({
    main: true,
    get: false,
    rewards: false,
    mates: false,
    rating: false
  })
  
  function fetchData() {
    setData({
      coins: 0,
      maxEnergy: 1000,
      energy: 1000,
      oneTap: 1,
      oneSec: 10,
    })
  }
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
        setData({...data, coins: data.coins + data.oneSec})
    }, 1000)

    return () => clearInterval(timer)
  })
  
  function handleCoinClick() {
    if((data.energy-data.oneTap) < 0) {
      return
    }
    setData({...data, coins: data.coins+data.oneTap, energy: data.energy-data.oneTap})
  }
  return (
  <div className="app">
        {page.main && <Main data={data} handleCoinClick={handleCoinClick}/> }
        {page.get && <div className="get">get</div>}
        {page.rewards && <div className="rewards">rewards</div>}
        {page.mates && <div className="mates">mates</div>}
        {page.rating && <div className="rating">rating</div>}
        <Menu pages={page} onItemClick={setPage}/>
      </div>
  )
}