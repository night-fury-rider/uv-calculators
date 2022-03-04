import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './modules/Dashboard/Dashboard';
import UVHeader from './components/Core/UVHeader/UVHeader';
import './App.css';
import appData from './app-data.json';

function App() {
  return (
    <div className="App uv-font-medium">
      <UVHeader href={appData.header.website} title={appData.header.title} links={appData.header.links} />
      <Dashboard />
    </div>
  );
}

export default App;
