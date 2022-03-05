import { Container, Row, Col } from "react-bootstrap";
import './InflationCalculator.css';

import iData from './InflationCalculator-data.json';
import { useEffect, useState } from "react";

import { getInflatedValue } from './InflationCalculatorService';

const InflationCalculator = props => {

  const [currentAmt, setCurrentAmt] = useState(iData.config.amount);
  const [noOfYears, setNoOfYears] = useState(iData.config.noOfYears);
  const [inflationRate, setInflationRate] = useState(iData.config.inflationRate);

  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(getInflatedValue(currentAmt, inflationRate, noOfYears));
  }, [currentAmt, noOfYears, inflationRate]);

  const handleCurrentAmt = (event) => {
    const newCurrentAmt = Number(event.target.value);
    setCurrentAmt(newCurrentAmt);
  };

  const handleNoOfYears = (event) => {
    const newNoOfYears = Number(event.target.value);
    setNoOfYears(newNoOfYears);
  };

  const handleInflationRate = (event) => {
    const newInflationRate = Number(event.target.value);
    setInflationRate(newInflationRate);
  };

  return (
    <div className="container uv-centered-container uv-inflation-calculator">
      <Container>
        <Row className="justify-content-md-center">
          <div className="uv-text-center">
            <h1>{iData.title}</h1>
          </div>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={6} xs={12}>
            <label htmlFor="currentAmount" className="col-form-label uv-input-label">{iData.currentAmt}</label>
          </Col>
          <Col md={4} xs={12}>
            <input type="number" className="form-control" id="currentAmount"
              value={currentAmt} onChange={handleCurrentAmt} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={6} xs={12}>
            <label htmlFor="noOfYears" className="col-form-label uv-input-label">{iData.noOfYears}</label>
          </Col>
          <Col md={4} xs={12}>
            <input type="number" className="form-control" id="noOfYears"
              value={noOfYears} onChange={handleNoOfYears} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={6} xs={12}>
            <label htmlFor="inflationRate" className="col-form-label uv-input-label">{iData.inflationRate}</label>
          </Col>
          <Col md={4} xs={12}>
            <input type="number" className="form-control" id="inflationRate"
              value={inflationRate} onChange={handleInflationRate} />
          </Col>
        </Row>
        <Row className="justify-content-md-center align-items-md-center">
          <Col md={6} xs={12}>
            <h1><span>{iData.futureAmt}</span></h1>
          </Col>
          <Col md={4} xs={12}>
            <div className="uv-result jumbotron d-flex align-items-center justify-content-center">
              <h1><span id="result">{result}</span></h1>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
};

export default InflationCalculator;
