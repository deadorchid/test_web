import { useState } from 'react'
import MenuItem from '../menuItem/MenuItem'
import MainIcon from '../../assets/icons/tap_coin.png'
import GetIcon from '../../assets/icons/get_icon.png'
import RewardsIcon from '../../assets/icons/rewards_icon.png'
import MatesIcon from '../../assets/icons/mates_icon.png'
import RatingIcon from '../../assets/icons/rating_icon.png'
import './Menu.css'

export default function Menu({pages, onItemClick}) {
    const [data, setData] = useState([
        {title: 'Main', backgroundImage: MainIcon}, 
        {title: 'Get', backgroundImage: GetIcon}, 
        {title: 'Rewards', backgroundImage: RewardsIcon}, 
        {title: 'Mates', backgroundImage: MatesIcon}, 
        {title: 'Rating', backgroundImage: RatingIcon}
    ])
    let count = 0
    return (
        <>
        <div className="menu">
            {
                data.map(item => (
                    <MenuItem key={count++} title={item.title} isActive={pages[item.title.toLowerCase()]} backgroundImage={item.backgroundImage} setPage={onItemClick} />
                ))
            }
        </div>
        <div className='menu_space'></div>
        </>

    )
}