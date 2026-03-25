import "./MainContent.css";
import { DashboardHeader } from "../../dashboard/dashboardHeader/DashboardHeader";
import { SummaryGrid } from "../../dashboard/summaryGrid/SummaryGrid";

export function MainContent(){
    return(
        <div className="main-container">
            <DashboardHeader />
            <SummaryGrid/>
        </div>
    );
}