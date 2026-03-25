import { SummaryCard } from '../SummaryCard/SummaryCard';
import './SummaryGrid.css';

// Importamos los iconos (asegúrate de que los nombres coincidan con tu carpeta assets)
import iconWallet from '../../../assets/wallet.svg';
import iconIncomes from '../../../assets/trending-up.svg';
import iconExpenses from '../../../assets/trending-down.svg';
import iconSavings from '../../../assets/savings.svg';


export function SummaryGrid() {
    // Simulamos los datos que vendrán de una API en el futuro
    const summaryData = [
        { title: "Saldo Total", amount: "12,450.00", icon: iconWallet, trend: "+2.5%", type: "success" },
        { title: "Ingresos Mensuales", amount: "3,200.00", icon: iconIncomes, trend: "+12%", type: "success" },
        { title: "Gastos Mensuales", amount: "1,150.00", icon: iconExpenses, trend: "-5.2%", type: "danger" },
        { title: "Ahorro Total", amount: "8,100.00", icon: iconSavings, trend: "+0.8%", type: "success" }
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