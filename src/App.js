import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './modules/Dashboard/Dashboard';
import UVHeader from './components/Core/UVHeader/UVHeader';
import './App.css';
import appData from './app-data.json';
import UVSidebarMobile from './components/Core/UVSidebar/UVSidebarMobile';
import UVFooter from './components/Core/UVFooter/UVFooter';

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
      <div className='uv-modules-container'>
        <Dashboard isMenuOpen={isMenuOpen} />
      </div>
      <UVFooter message={appData.footer.message} />
    </div>
  );
}

export default App;
