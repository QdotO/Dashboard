import React from 'react';
import './App.css';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      <div style={{width: '100vw', height: '68px', background: 'slategrey'}}></div>
      <div style={{ display: 'flex'}}>
        <aside style={{ minWidth: '180px', minHeight: '100vh', background: 'lightslategrey'}}>
          <ul style={{ width: '100%', listStyle: 'none', height: '100%', background: 'transparent', color: 'white' }}>
            <li style={{ width: '100%', height: '55px' }}>Home</li>
            <li style={{ width: '100%', height: '55px' }}>Stuff</li>
            <li style={{ width: '100%', height: '55px' }}>Other Stuff</li>
          </ul>
        </aside>
        <Dashboard username='Quincy Obeng' />
      </div>
    </div>
  );
}

export default App;
