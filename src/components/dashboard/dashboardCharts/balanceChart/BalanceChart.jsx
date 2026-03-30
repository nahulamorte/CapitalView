import './BalanceChart.css';
import  { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { monthlyEvolutionData } from '../mockData';//Data para simular 

export function BalanceChart(){
    return(
        <div className="balance-chart-card">
            <div className="chart-header">
                <h3>Evolucion del patrimonio</h3>
                <p className="chart-subtitle">Últimos 6 meses</p>
            </div>

            <div className="chart-content">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyEvolutionData}>
                        <defs>
                            <linealGrandient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                            </linealGrandient>
                        </defs>

                        <XAxis
                        dataKey="month" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: 'var(--text-muted)', fontSize: 12}}
                        dy={10}
                        />

                        <YAxis hide={true}/>

                        <Tooltip
                        contentStyle={{ 
                            borderRadius: '12px', 
                            border: 'none', 
                            boxShadow: 'var(--shadow-md)',
                            backgroundColor: 'var(--bg-card)' 
                        }}
                        />

                        <Area
                            type="monotone" 
                            dataKey="balance" 
                            stroke="var(--primary)" 
                            strokeWidth={3} 
                            fillOpacity={1} 
                            fill="url(#colorBalance)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

/*
          
            
*/