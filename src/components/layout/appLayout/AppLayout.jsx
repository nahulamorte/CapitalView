import './AppLayout.css';
import { SideBar } from '../sideBar/SideBar';
import { MainContent } from '../mainContent/MainContent';

export function AppLayout() {
    return (
        <div className="app-container">
            <SideBar />
            <MainContent />
        </div>
    );
}