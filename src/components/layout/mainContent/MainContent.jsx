import "./MainContent.css";
import { DashboardHeader } from "../../dashboard/dashboardHeader/DashboardHeader";
import { SummaryGrid } from "../../dashboard/summaryGrid/SummaryGrid";
import { ChartsContainer } from "../../dashboard/dashboardCharts/ChartsContainer";
import { MarketRow } from "../../dashboard/marketList/MarketRow";

export function MainContent(){
    return(
        <div className="main-container">
            <DashboardHeader />
            <SummaryGrid/>
            <ChartsContainer/>
            <MarketRow/>
        </div>
    );
}