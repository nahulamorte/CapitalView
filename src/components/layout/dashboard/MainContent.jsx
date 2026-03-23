import "./MainContent.css";
import { DashboardHeader } from "./dashboardHeader/dashboardHeader";

export function MainContent(){
    return(
        <div className="main-container">
            <DashboardHeader />
        </div>
    );
}