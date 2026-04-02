import { MarketList } from './MarketList';
import { cryptoData, stockData } from '../dashboardCharts/mockData';
import './MarketListContainer.css';

export function MarketListContainer() {
    return (
        <section className="market-lists-grid">
            <div className="market-column">
                <MarketList 
                    title="Top 10 Criptomonedas" 
                    items={cryptoData} 
                />
            </div>
            <div className="market-column">
                <MarketList 
                    title="Top Acciones / CEDEARs" 
                    items={stockData} 
                />
            </div>
        </section>
    );
}