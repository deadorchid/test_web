import './MenuItem.css'
export default function MenuItem({title, isActive, setPage, backgroundImage}) {
    function handleClick() {
        let lowerTitle = title.toLowerCase()
        let pages = {
            menu: false,
            get: false,
            rewards: false,
            mates: false,
            rating: false
        }
        pages[lowerTitle] = true
        setPage(pages)
    }
    return(
        <div className="menu_item" onClick={handleClick}>
            <div className="menu_icon" style={{backgroundImage: `url('${backgroundImage}')`}}></div>
                <p>{title}</p>
            {isActive ? 
                <div className="menu_under"></div> :
                <div></div>
            }
        </div>
    )
}