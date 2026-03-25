import './SummaryGrid.css';

import {SummaryCard} from '../summaryCards/SummaryCard';
import wallet from '../../../assets/wallet.svg'

export function SummaryGrid(){
    return(
        <section className='grid-container'>
            <SummaryCard title="Crypto" amount="2000" icon={wallet} trend="2.2%" />
        </section>
    );
}