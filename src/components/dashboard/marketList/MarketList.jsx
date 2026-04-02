import { MarketRow } from './MarketRow';
import './MarketList.css';

export function MarketList({ title, items }) {
    return (
        <div className="market-list-card">
            <div className="list-header">
                <h3>{title}</h3>
                <button className="btn-view-all">Ver todo</button>
            </div>

            <div className="list-labels">
                <span className="label-asset">ACTIVO</span>
                <span className="label-value">PRECIO / % CAMBIO</span>
            </div>

            <div className="list-body">
                {items.length > 0 ? (
                    items.map((item) => (
                        <MarketRow key={item.id} data={item} />
                    ))
                ) : (
                    <p className="empty-msg">No hay datos disponibles</p>
                )}
            </div>
        </div>
    );
}