import './Main.css'
import settingsIcon from '../../assets/icons/settings_icon.png'
import walletIcon from '../../assets/icons/wallet_icon.png'
import { useEffect, useState } from 'react'

export default function Main({data, handleCoinClick}) {
    const tg = window.Telegram.WebApp
    const [imageSourceUrl, setImageSourceUrl] = useState("");


    const downloadImageAndSetSource = async (imageUrl) => {
        const image = await fetchBlob(imageUrl);
        setImageSourceUrl(URL.createObjectURL(image));
    }

    useEffect(() => {
        if(!tg.initDataUnsafe.user) {
            tg.initDataUnsafe.user = {photo_url: ''}
        }
        downloadImageAndSetSource(tg.initDataUnsafe.user.photo_url)
    }, [])
    return (
        <div className="main">
            <div className="main_header">
                <div className="main_header_avatar" style={{backgroundImage: `url('${imageSourceUrl}')`}}></div>
                <div className="main_header_popup push">
                    <div className="main_header_icon"  style={{backgroundImage: `url('${settingsIcon}'`}}></div>
                </div>
                <div className="main_header_popup">
                    <div className="main_header_icon"  style={{backgroundImage: `url('${walletIcon}'`}}></div>
                </div>
                <div className="main_header_popup">
                    <div className="main_header_icon">?</div>
                </div>
            </div>
            <div className="coins">
                <div className="coins_icon"></div>
                <p className="coins_count">{data.coins}</p>
            </div>
            <div className="coin" onClick={handleCoinClick}>
                <div className="coin_image"></div>
            </div>
            <div className="energy">
                <p>{data.energy}/{data.maxEnergy}</p>
            </div>
            <div className="statistic">
                <div>
                    <p className='oneTap'>One tap</p>
                    <p>+{data.oneTap}</p>
                </div>
                <div>
                    <p className="oneSec">One Sec</p>
                    <p>+{data.oneSec}</p>
                </div>
            </div>
        </div>
    )
}

async function fetchBlob(url) {
    const response = await fetch(url)
    return response.blob()
}


// function renderCoins(coins) {
//     // let strCoins = `${coins}`
//     // if(coins < 100000) {
//     //     return strCoins
//     // }
//     // if(coins >= 1000000000) {
//     //   return strCoins.slice(-12,-9) + 'B'
//     // }
//     // if(coins >= 1000000) {
//     //   return strCoins.slice(-9,-6) + 'M'
//     // }
//     // if(coins >= 100000) {
//     //   return strCoins.slice(-6,-3) + 'K'
//     // }
//     return coins
// }