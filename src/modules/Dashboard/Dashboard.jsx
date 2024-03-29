
import { Route, Routes, Navigate } from 'react-router-dom';

import UVSidebar from '../../components/Core/UVSidebar/UVSidebar';
import LowestPriceCalculator from '../../components/calculators/LowestPriceCalculator/LowestPriceCalculator';
import PercentageCalculatorContainer from '../../components/calculators/PercentageCalculator/PercentageCalculatorContainer';
import InflationCalculator from '../../components/calculators/InflationCalculator/InflationCalculator';
import HRACalculator from '../../components/calculators/HRACalculator/HRACalculator';

import './Dashboard.css';

import appData from '../../app-data.json';

const Dashboard = props => {
  return (
    <div>

      <div className="container-fluid">
        <div className="row">
          <UVSidebar links={appData.sidebar.links} />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Routes>
              <Route path="*" element={<Navigate to={process.env.PUBLIC_URL + '/' + appData.sidebar.links[0].href} />}></Route>
              <Route path={process.env.PUBLIC_URL + '/' + appData.sidebar.links[0].href}
                element={<LowestPriceCalculator />}></Route>
              <Route path={process.env.PUBLIC_URL + '/' + appData.sidebar.links[1].href}
                element={<PercentageCalculatorContainer />}></Route>

              <Route path={process.env.PUBLIC_URL + '/' + appData.sidebar.links[2].href}
                element={<InflationCalculator />}></Route>

              <Route path={process.env.PUBLIC_URL + '/' + appData.sidebar.links[3].href}
                element={<HRACalculator />}></Route>

            </Routes>
          </main>
        </div>
      </div>


    </div>
  )
};

export default Dashboard;
