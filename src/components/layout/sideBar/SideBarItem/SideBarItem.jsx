import './SideBarItem.css';

export function SideBarItem({logo, name}){
    return(
        <div className="item-container">
            <div className="item-logo">
                <img src={logo} alt="" />
            </div>
            <div className="item-name">
                <p>{name}</p>
            </div>
        </div>
    );
}