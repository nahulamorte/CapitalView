import './SideBar.css';

import { SideBarItem } from './SideBarItem/SideBarItem';
import logo from "../../../assets/logoCapitalView.png"

//Imports de logo
import home from '../../../assets/home.svg'
import wallet from '../../../assets/wallet.svg'
import  market from '../../../assets/market.svg'


export function SideBar() {

  const itemData = [
      {logo:  home, name: "Home"},
      {logo: market, name:"Market"},
      {logo: wallet, name:"Portfolio"},
    ];

  return (
    <aside className="sidebar-container"> 
      <div className="sidebar-logo">
        {<img src={logo} alt="" />}
      </div>
      <nav className="sidebar-nav">
        {itemData.map((item, index) =>(
          <SideBarItem
            key={index}
            logo={item.logo}
            name={item.name}
          />
        ))}
      </nav>

    </aside>
  );
}

/*


      <div className="sidebar-user">
        <div className="user-photo">

        </div>
        <div className="userinfo">
          
        </div>
      </div>*/ 