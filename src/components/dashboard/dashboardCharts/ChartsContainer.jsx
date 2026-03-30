import './ChartsContainer.css'; //css

import { BalanceChart } from './balanceChart/BalanceChart.jsx';
import { PortfolioPieChart } from './portfolioPieChart/PortfolioPieChart.jsx';

export function ChartsContainer(){
    return(
        <div className="chart-grid">
            <div className="balance-chart">
                <BalanceChart/>
            </div>
            <div className="pie-chart">
                <PortfolioPieChart/>
            </div>
        </div>
    );
}