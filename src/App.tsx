import React from 'react';
import Sidebar from './Components/Sidebar';
import Summary from './Components/Summary';
import './index.css'

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <section>
        <Summary/>
      </section>
    </div>
  );
}

export default App;
