import './Main.css'
export default function Main({data, handleCoinClick}) {
    return (
        <div className="main">
            <div className="main_header">
                <div className="main_header_avatar"></div>
                <div className="main_header_popup push"></div>
                <div className="main_header_popup"></div>
                <div className="main_header_popup"></div>
            </div>
            <div className="coins">
                <div className="coins_icon"></div>
                <p className="coins_count">{renderCoins(data.coins)}</p>
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



function renderCoins(coins) {
    // let strCoins = `${coins}`
    // if(coins < 100000) {
    //     return strCoins
    // }
    // if(coins >= 1000000000) {
    //   return strCoins.slice(-12,-9) + 'B'
    // }
    // if(coins >= 1000000) {
    //   return strCoins.slice(-9,-6) + 'M'
    // }
    // if(coins >= 100000) {
    //   return strCoins.slice(-6,-3) + 'K'
    // }
    return coins
}