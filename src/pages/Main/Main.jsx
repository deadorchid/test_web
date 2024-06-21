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
            tg.initDataUnsafe.user = {photo_url: 'data:image/jpeg;base64,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'}
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
            <div className="rank"></div>
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