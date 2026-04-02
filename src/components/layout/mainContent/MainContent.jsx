import "./MainContent.css";
import { DashboardHeader } from "../../dashboard/dashboardHeader/DashboardHeader";
import { SummaryGrid } from "../../dashboard/summaryGrid/SummaryGrid";
import { ChartsContainer } from "../../dashboard/dashboardCharts/ChartsContainer";
import { MarketListContainer } from "../../dashboard/marketList/MarketListContainer";

export function MainContent(){
    return(
        <div className="main-container">
            <DashboardHeader />
            <SummaryGrid/>
            <ChartsContainer/>
            <MarketListContainer/>
        </div>
    );
}