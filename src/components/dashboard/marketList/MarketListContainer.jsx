import { MarketList } from './MarketList';
import { cryptoData, stockData } from '../Charts/mockData';
import './MarketListsContainer.css';

export function MarketListsContainer() {
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