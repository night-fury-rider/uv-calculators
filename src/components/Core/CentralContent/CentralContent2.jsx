import useCounter from '../../../hooks/useCounter';

import appData from '../../../app-data.json';

import './CentralContent.css';

const CentralContent2 = props => {

  const [counter, incrementCounter, decrementCounter, resetCounter] = useCounter(10, 2);

  return (
    <div className="uv-central-container">
      <div className="px-4 pt-5 my-5 text-center">
        <h1 className="display-4 fw-bold">{props.title}</h1>
        <div className="col-lg-6 mx-auto">
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button onClick={incrementCounter}
              className="btn btn-primary btn-lg px-4 me-sm-3">{appData.centralContent2.increment}</button>
            <button onClick={decrementCounter}
              className="btn btn-primary btn-lg px-4 me-sm-3">{appData.centralContent2.decrement}</button>
            <button onClick={resetCounter}
              className="btn btn-primary btn-lg px-4 me-sm-3">{appData.centralContent2.reset}</button>
          </div>
        </div>
        <div className='uv-centered-container'>
          <div className='badge-circle'><p>{counter}</p></div>
        </div>
      </div>
    </div>
  )
};

export default CentralContent2;
