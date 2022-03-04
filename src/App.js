import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './modules/Dashboard/Dashboard';
import UVHeader from './components/Core/UVHeader/UVHeader';
import './App.css';
import appData from './app-data.json';
import UVSidebarMobile from './components/Core/UVSidebar/UVSidebarMobile';

function App() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App uv-font-medium">
      <UVHeader href={appData.header.website} title={appData.header.title} links={appData.header.links}
        toggleMenu={toggleMenu} />
      <UVSidebarMobile links={appData.sidebar.links} show={isMenuOpen}
        onHide={() => setMenuOpen(false)} />
      <Dashboard isMenuOpen={isMenuOpen} />
    </div>
  );
}

export default App;
