import { useEffect, useRef, useState } from 'react';

import './UVTimer.css';

const UVTimer = props => {

  const [isRunning, setRunning] = useState(false);
  const timerInterval = useRef();

  const [timer, setTimer] = useState(props.initialValue);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerInterval.current);
      setRunning(false);
    } else {
      setRunning(true);
    }
  };

  useEffect(() => {
    if (isRunning) {
      const delay = props.delay ? props.delay : 1000;

      timerInterval.current = setInterval(() => {

        setTimer(timer => {
          if (timer === 0) {
            setRunning(false);
            return props.initialValue;
          }
          return timer - 1;
        });
      }, delay);
    }


    return () => {
      clearInterval(timerInterval.current);
    };
  }, [isRunning, props.initialValue, props.delay]);

  return (
    <div className="uv-timer-container">
      <div className="px-4 pt-5 my-5 text-center">
        <h1 className="display-4 fw-bold">{props.title}</h1>
        <div className="col-lg-6 mx-auto">
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button onClick={toggleTimer}
              className="btn btn-primary btn-lg px-4 me-sm-3">{isRunning ? props.pause : props.start}</button>
          </div>
        </div>
        <div className='uv-centered-container'>
          <div className='badge-circle'><p>{timer}</p></div>
        </div>
      </div>
    </div>
  )
};

export default UVTimer;
