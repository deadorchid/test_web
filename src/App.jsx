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
      coins: 1000000,
      maxEnergy: 10000,
      energy: 10000
    })
  }
  useEffect(() => {
    fetchData()
  }, [])
  
  function handleCoinClick() {
    if((data.energy-10) < 0) {
      return
    }
    setData({coins: data.coins+10, maxEnergy: 10000, energy: data.energy-10})
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