import "./MainContent.css";
import { DashboardHeader } from "../../dashboard/dashboardHeader/DashboardHeader";

export function MainContent(){
    return(
        <div className="main-container">
            <DashboardHeader />
        </div>
    );
}