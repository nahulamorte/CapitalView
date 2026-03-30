import './ChartsContainer.css'; //css

import { BalanceChart } from './balanceChart/BalanceChart.jsx';
import { PortfolioPieChart } from './PortfolioPieChart/PortfolioPieChart';

export function ChartsContainer(){
    return(
        <div className="chart-grid">
            <div className="balance-chart">
                <div className="placeholder-card">Evolucion Mensual</div>
            </div>
            <div className="pie-chart">
                <div className="placeholder-card">Diversificacion</div>
            </div>
        </div>
    );
}