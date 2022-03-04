import { useState } from 'react';

import { getSimplePercentage, getReversePercentage, getPercentageChange, getAmountByPercentageChange } from './PercentageCalculatorService';

import pData from './PercentageCalculator-data.json';
import './PercentageCalculator.css';

const PercentageCalculator = props => {

  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSeondNumber] = useState("");

  const [result, setResult] = useState(0);


  const handleFirstNumberChange = (event) => {
    const currentValue = Number(event.target.value);
    setFirstNumber(currentValue ? currentValue : "");
  };

  const handleSecondNumberChange = (event) => {
    setSeondNumber(Number(event.target.value));
  };

  const calculateResult = () => {
    switch (props.type) {
      case pData.types.reverse:
        setResult(getReversePercentage(firstNumber, secondNumber,
          pData.config.decimalPlaces, pData.config.countryCode, pData.config.langCode));
        break;

      case pData.types.increase1:
        setResult(getPercentageChange(firstNumber, secondNumber,
          pData.config.decimalPlaces, pData.config.countryCode, pData.config.langCode));
        break;

      case pData.types.increase2:
        setResult(getAmountByPercentageChange(firstNumber, secondNumber,
          pData.config.decimalPlaces, pData.config.countryCode, pData.config.langCode));
        break;

      default:
        setResult(getSimplePercentage(firstNumber, secondNumber,
          pData.config.decimalPlaces, pData.config.countryCode, pData.config.langCode));
    }
  };

  return (
    <>
      <div className="form-group uv-percentage-calculator">
        <label htmlFor="firstNumber" className='rem-top-2 uv-field-label'><h5>{props.preText1}</h5></label>
        <input value={firstNumber}
          onChange={handleFirstNumberChange}
          onBlur={calculateResult}
          type="number" className="form-control form-control-lg"
          id="firstNumber" placeholder={props.placeholder1} />

        <label htmlFor="secondNumber" className='rem-top-2 uv-field-label'><h5>{props.preText2}</h5></label>
        <input value={secondNumber}
          onChange={handleSecondNumberChange}
          onBlur={calculateResult}
          type="number" className="form-control form-control-lg"
          id="secondNumber" placeholder={props.placeholder2} />
      </div>

      <div className="uv-result jumbotron d-flex align-items-center justify-content-center rem-top-2">
        <h1><span id="result">{result}</span></h1>
      </div>
    </>
  )
};

export default PercentageCalculator;
