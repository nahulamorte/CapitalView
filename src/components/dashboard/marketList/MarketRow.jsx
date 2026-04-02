import './MarketRow.css';

export function MarketRow({data}){
    const isPositive = data.change >= 0;
    
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(data.price);

return (
        <div className="market-row-container">
            {/* 2. Sección de Identidad con Fallback */}
            <div className="asset-identity">
                {data.logo ? (
                    <img src={data.logo} alt={`${data.name} logo`} className="asset-logo" />
                ) : (
                    <div className="asset-logo-placeholder">
                        {data.ticker[0]}
                    </div>
                )}
                <div className="asset-names">
                    <span className="asset-full-name">{data.name}</span>
                    <span className="asset-ticker">{data.ticker}</span>
                </div>
            </div>

            <div className="asset-values">
                <span className="asset-price">{formattedPrice}</span>
                <span className={`asset-change ${isPositive ? 'positive' : 'negative'}`}>
                    {isPositive ? `+${data.change}%` : `${data.change}%`}
                </span>
            </div>
        </div>
    );
}