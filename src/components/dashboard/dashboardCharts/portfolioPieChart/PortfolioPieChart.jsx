import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './PortfolioPieChart.css';
import { portfolioDistribution } from '../mockData';

export function PortfolioPieChart(){
    return(
        <div className="pie-chart-card">
            <div className="chart-header">
                <h3>Diversificacion</h3>
                <d className="chart subtitle">

                </d>
            </div>
            <div className="chart-content">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie                             
                            data={portfolioDistribution}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            
                            {portfolioDistribution.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: 'var(--shadow-md)' }}
                        />
                        <Legend
                            verticalAlign="bottom" 
                            height={36} 
                            iconType="circle"
                            wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }}     
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

/*     
                      
*/