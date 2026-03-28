import './SideBar.css';

import { ItemSideBar } from './itemSideBar/ItemSideBar';
import logo from "../../../assets/logoCapitalView.png"

export function SideBar() {
  return (
    <aside className="sidebar-container"> 
      <div className="sidebar-logo">
        {<img src={logo} alt="" />}
      </div>
      <nav className="sidebar-nav">
      </nav>
    </aside>
  );
}