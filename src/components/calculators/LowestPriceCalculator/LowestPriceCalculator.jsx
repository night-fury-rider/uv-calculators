/* Note: If we decide to share this component to other codebase, make sure to do following changes
1. LowestPriceCalculator.css -- Replace var(--color-danger) with actual color code.
 */
import React, { useState } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import './LowestPriceCalculator.css';
import PriceCalculator from './PriceCalculator';
import pData from './LowestPriceCalculator-data.json';

const LowestPriceCalculator = () => {

  const stubCalculator = {
    price: 1,
    quantity: 1
  };

  const [calculators, setCalculators] = useState([stubCalculator, stubCalculator]);

  const [unit, setUnit] = useState(pData.units[0]);
  const [lowestEntryIndex, setLowestEntryIndex] = useState(-1);
  const [lowestRate, setLowestRate] = useState(-1);

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

  const evaluateLowest = (componentIndex, newRate) => {

    console.log('newRate: ', newRate);

    if (lowestRate === -1) {
      setLowestRate(newRate);
    } else if (newRate < lowestRate) {
      setLowestRate(newRate);
      setLowestEntryIndex(componentIndex);
    } else if (lowestEntryIndex === -1) {
      setLowestEntryIndex(0);
    }
  };

  return (
    <div className='lowest-price-calculator-container'>
      <Container>
        <Row>
          <>
            {calculators.map((obj, index) => (
              <Col md={calculators.length > 2 ? 4 : 6} key={index}>
                <Card
                  bg={index === lowestEntryIndex ? 'success' : 'light'}
                  key={index}>
                  <Card.Body>
                    <Card.Title>{`${pData.title} ${index + 1}`}</Card.Title>
                    <PriceCalculator title={`${pData.title} ${1}`} unit={unit} evaluateLowest={evaluateLowest} componentIndex={index} />
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
