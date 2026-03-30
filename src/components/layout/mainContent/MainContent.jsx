import "./MainContent.css";
import { DashboardHeader } from "../../dashboard/dashboardHeader/DashboardHeader";
import { SummaryGrid } from "../../dashboard/summaryGrid/SummaryGrid";
import { ChartsContainer } from "../../dashboard/dashboardCharts/ChartsContainer";

export function MainContent(){
    return(
        <div className="main-container">
            <DashboardHeader />
            <SummaryGrid/>
            <ChartsContainer/>
        </div>
    );
}