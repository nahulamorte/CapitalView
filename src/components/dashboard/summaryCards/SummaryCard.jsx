import './SummaryCard.css';

export function SummaryCard({title, amount, icon, trend, comparative}){
    return (
        <div className="card-container">
            <div className="card-header">
                <span className="card-title">{title}</span>
                <div className="card-icon-container">
                    <img src={icon} alt={title} />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-amount">${amount}</h2>
                <span className={`card-trend ${trend.includes('+') ? 'trend-up' : 'trend-down'}`}>
                            {trend}
                </span>
            </div>
        </div>
    );
}