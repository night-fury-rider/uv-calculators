import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { getTaxExemptedHRA } from './HRACalculatorService';

import hData from './HRACalculator-data.json';
import './HRACalculator.css';

const HRACalculator = props => {

  const [basicSalary, setBasicSalary] = useState('');
  const [hra, setHRA] = useState('');
  const [rent, setRent] = useState('');

  const [result, setResult] = useState('');

  useEffect(() => {
    if (basicSalary && hra && rent) {
      setResult(getTaxExemptedHRA(basicSalary, hra, rent));
    }
  }, [basicSalary, hra, rent]);


  const handleBasicSalary = (event) => {
    setBasicSalary(Number(event.target.value));
  };

  const handleHRA = (event) => {
    setHRA(Number(event.target.value));
  };

  const handleRent = (event) => {
    setRent(Number(event.target.value));
  };

  return (
    <div className='uv-hra-container'>
      <Container>
        <Row className="justify-content-md-center">
          <div className="uv-text-center">
            <h1>{hData.title}</h1>
          </div>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={3} xs={12}>
            <label htmlFor="basicSalary" className="col-form-label uv-input-label">{hData.basic}</label>
          </Col>
          <Col md={3} xs={12}>
            <input type="number" className="form-control" id="basicSalary"
              value={basicSalary} onChange={handleBasicSalary} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={3} xs={12}>
            <label htmlFor="hra" className="col-form-label uv-input-label">{hData.hra}</label>
          </Col>
          <Col md={3} xs={12}>
            <input type="number" className="form-control" id="hra"
              value={hra} onChange={handleHRA} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={3} xs={12}>
            <label htmlFor="rent" className="col-form-label uv-input-label">{hData.rent}</label>
          </Col>
          <Col md={3} xs={12}>
            <input type="number" className="form-control" id="rent"
              value={rent} onChange={handleRent} />
          </Col>
        </Row>

        <Row className="justify-content-md-center align-items-md-center">
          <Col md={3} xs={12}>
            <h1><span>{hData.resultLabel}</span></h1>
          </Col>
          <Col md={3} xs={12}>
            <div className="uv-result jumbotron d-flex align-items-center justify-content-center">
              <h1><span id="result">{result}</span></h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default HRACalculator;
