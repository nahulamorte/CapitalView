import { SummaryCard } from '../summaryCards/SummaryCard';
import './SummaryGrid.css';

//import { Wallet, TrendingUp, TrendingDown, PiggyBank } from 'lucide-react'; 
import wallet from '../../../assets/wallet.svg'
import tUp from '../../../assets/trending-up.svg'
import tDown from '../../../assets/trending-down.svg'
import btc from '../../../assets/bitcoin.svg'


export function SummaryGrid() {
    // Simulamos los datos que vendrán de una API en el futuro
    const summaryData = [
        { title: "Saldo Total", amount: "12,450.00", icon: wallet, trend: "+2.5%", type: "success" },
        { title: "Ingresos Mensuales", amount: "3,200.00", icon: tUp, trend: "+12%", type: "success" },
        { title: "Gastos Mensuales", amount: "1,150.00", icon: tDown, trend: "-5.2%", type: "danger" },
        { title: "Ahorro Total", amount: "8,100.00", icon: btc, trend: "+0.8%", type: "success" }
    ];

    return (
        <section className="summary-grid">
            {summaryData.map((data, index) => (
                <SummaryCard 
                    key={index}
                    title={data.title}
                    amount={data.amount}
                    icon={data.icon}
                    trend={data.trend}
                    type={data.type}
                />
            ))}
        </section>
    );
}