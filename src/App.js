import React from 'react';
import './App.css';
import MainArea from './MainArea';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';

function App() {
  return (
    <div className="App">
      <SidebarLeft />
      <SidebarRight />
      <MainArea />
    </div>
  );
}

export default App;
