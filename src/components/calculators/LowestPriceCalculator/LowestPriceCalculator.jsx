/* Note: If we decide to share this component to other codebase, make sure to do following changes
1. LowestPriceCalculator.css -- Replace var(--color-danger) with actual color code.
 */
import React, { useState } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import './LowestPriceCalculator.css';
import PriceCalculator from './PriceCalculator';
import { getRate, isValidRate } from './PriceCalculatorService';

import pData from './LowestPriceCalculator-data.json';

const LowestPriceCalculator = () => {

  const stubCalculator = {
    price: '',
    quantity: '',
    isLowest: false,
    rate: ''
  };

  const [calculators, setCalculators] = useState([stubCalculator, stubCalculator]);
  const [lowestRate, setLowestRate] = useState('');

  const [unit, setUnit] = useState(pData.units[0]);

  const addCalculator = () => {
    let tmpCalculators = JSON.parse(JSON.stringify(calculators));
    tmpCalculators.push(stubCalculator);
    setCalculators(tmpCalculators);
  };

  const removeCalculator = () => {
    let tmpCalculators = JSON.parse(JSON.stringify(calculators));
    tmpCalculators.pop();
    setCalculators(tmpCalculators);
  };

  const changeUnit = event => {
    setUnit(event.target.value);
  };

  const evaluateLowest = (componentIndex, price, quantity) => {

    let tmpCalculators = JSON.parse(JSON.stringify(calculators));
    tmpCalculators[componentIndex].price = price;
    tmpCalculators[componentIndex].quantity = quantity;
    tmpCalculators[componentIndex].rate = getRate(price, quantity);

    const calSize = tmpCalculators.length;

    let tmpLowestRate = getRate(tmpCalculators[0].price, tmpCalculators[0].quantity);

    // If first calculator values are incorrect, return
    if (!isValidRate(tmpLowestRate)) {
      setCalculators(tmpCalculators);
      return;
    }

    // Calculate the lowest rate
    for (let i = 0; i < calSize; i++) {
      tmpCalculators[i].rate = getRate(tmpCalculators[i].price, tmpCalculators[i].quantity);
      // If any calculator values are incorrect, return
      if (!isValidRate(tmpCalculators[i].rate)) {
        setCalculators(tmpCalculators);
        return;
      }
      if (tmpCalculators[i].rate < tmpLowestRate) {
        tmpLowestRate = tmpCalculators[i].rate;
      }
    }

    if (lowestRate === '' || tmpLowestRate < lowestRate) {
      setLowestRate(tmpLowestRate);
    }
    setCalculators(tmpCalculators);
  };

  return (
    <div className='lowest-price-calculator-container'>
      <Container>
        <Row className="justify-content-md-center">
          <div className="uv-text-center">
            <h1>{pData.title}</h1>
          </div>
        </Row>
        <Row>
          <>
            {calculators.map((obj, index) => (
              <Col md={calculators.length > 2 ? 4 : 6} key={index}>
                <Card
                  bg={lowestRate && obj.rate === lowestRate ? 'success' : 'light'}
                  key={index}>
                  <Card.Body>
                    <Card.Title>{`${pData.label} ${index + 1}`}</Card.Title>
                    <PriceCalculator title={`${pData.label} ${1}`} unit={unit} evaluateLowest={evaluateLowest} componentIndex={index} />
                  </Card.Body>
                </Card>
              </Col>
            ))
            }

            <div className="px-4 pt-5 my-5 text-center">
              <div className="col-lg-6 mx-auto">
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                  <Form.Select aria-label="Default select example"
                    className='px-4 me-sm-3 unit-selector btn-warning'
                    onChange={changeUnit}>
                    {pData.units.map((unit, unitIndex) => (
                      <option value={unit} key={unitIndex}>{unit}</option>
                    ))
                    }
                  </Form.Select>
                  <button onClick={addCalculator}
                    className="btn btn-primary btn-lg px-4 me-sm-3">Add</button>
                  {calculators.length > 2 &&
                    <button onClick={removeCalculator}
                      className="btn btn-danger btn-lg px-4 me-sm-3">Remove</button>
                  }

                </div>
              </div>
            </div>
          </>
        </Row>
      </Container>
    </div >
  )
};

export default LowestPriceCalculator;
