import { Container, Row, Col, Card } from "react-bootstrap";
import PercentageCalculator from "./PercentageCalculator";

import pData from './PercentageCalculator-data.json';

const PercentageCalculatorContainer = props => {
  return (
    <div className='uv-percentage-container'>
      <Container>
        <Row>
          <>
            {pData.calculators.map((obj, index) => (
              <Col md={pData.calculators.length > 2 ? 3 : 6} key={index}>
                <Card
                  bg="light"
                  key={index}>
                  <Card.Body>
                    <Card.Title><h2>{`${obj.title}`}</h2></Card.Title>
                    <PercentageCalculator preText1={obj.preText1} preText2={obj.preText2} type={obj.type} />
                  </Card.Body>
                </Card>
              </Col>
            ))
            }
          </>
        </Row>
      </Container>
    </div >

  );
};

export default PercentageCalculatorContainer;
