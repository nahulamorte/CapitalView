import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { Card } from './components/card.jsx'
import { AppLayout } from './components/appLayout.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
     // <>
     //      <Card title="Portfolio" balance="20000" img="../assets/wallet.svg" porcent="+2.01" comparation="5.12% than last month"/>
     //      <Card title="Balance" balance="20000" img="../assets/wallet.svg" porcent="+2.01" comparation="5.12% than last month"/>
     //      <Card title="Crypto" balance="20000" img="../assets/wallet.svg" porcent="+2.01" comparation="5.12% than last month"/>
     // </>
     <AppLayout/>
)


