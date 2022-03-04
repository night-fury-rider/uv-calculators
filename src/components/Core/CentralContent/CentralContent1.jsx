import { useState } from "react";
import useDebouncing from "../../../hooks/useDebouncing";
import useThrottling from "../../../hooks/useThrottling";

import appData from '../../../app-data.json';

import './CentralContent.css';

const CentralContent1 = props => {

  const [throttledData, setThrottledData] = useState([]);
  const [debouncedData, setDebouncedData] = useState([]);

  const updateBaseDataByThrottling = (firstName, lastName) => {
    console.log(`${firstName} ${lastName} updated base data by throttling`);
    let tmpArr = JSON.parse(JSON.stringify(throttledData));
    tmpArr.push(`${firstName} ${lastName}`);
    setThrottledData(tmpArr);
  };

  const updateBaseDataByDebouncing = (firstName, lastName) => {
    console.log(`${firstName} ${lastName} updated base data by debouncing`);
    let tmpArr = JSON.parse(JSON.stringify(debouncedData));
    tmpArr.push(`${firstName} ${lastName}`);
    setDebouncedData(tmpArr);
  };

  const throttledUpdateBaseData = useThrottling(updateBaseDataByThrottling.bind(this, 'Yuvraj', 'Patil'), 1000);
  const debouncedUpdateBaseData = useDebouncing(updateBaseDataByDebouncing.bind(this, 'Yuvraj', 'Patil'), 1000);

  return (
    <div className="uv-central-container px-4 pt-5 my-5 text-center">
      <h1 className="display-4 fw-bold">{props.title}</h1>
      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button onClick={throttledUpdateBaseData}
            className="btn btn-primary btn-lg px-4 me-sm-3">{appData.centralContent1.throtlling}</button>
          <button onClick={debouncedUpdateBaseData}
            className="btn btn-primary btn-lg px-4">{appData.centralContent1.debouncing}</button>
        </div>
      </div>

      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-around mb-5">
          <ol>
            {throttledData.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ol>
          <ol>
            {debouncedData.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
};

export default CentralContent1;
