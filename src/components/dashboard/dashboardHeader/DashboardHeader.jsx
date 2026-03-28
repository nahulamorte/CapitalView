import './DashboardHeader.css';
import { ButtonDashboard} from './ButtonDashboard';
 
//Iconos:
import lensIcon from '../../../assets/search.svg';
import ringIcon from '../../../assets/notification.svg';
import toggleIcon from '../../../assets/toggles.svg';

export function DashboardHeader() {
    return (
        <header className="header-container"> 
            <div className="header-top">
                <div className="search-bar">
                    <img src={lensIcon} alt="lupa" className="search-icon" />
                    <input type="text" placeholder="Buscar..." className="search-input" />
                </div>
                
                <div className="header-actions"> 
                    <ButtonDashboard icon={ringIcon} />
                    <ButtonDashboard icon={toggleIcon} />
                </div>
            </div>
        </header>
    );
}