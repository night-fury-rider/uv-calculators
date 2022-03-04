import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ErrorListItem from './ErrorListItem';

const ErrorList = (props) => {
  if (!props.errors || !props.errors.map) {
    return null;
  }
  return (
    <ListGroup as="ol" numbered variant="warning">
      {props?.errors?.map((errorObj, errorIndex) => (
        <ErrorListItem title={errorObj.title}
          subtitle={errorObj.subtitle}
          count={errorObj.count}
          key={errorIndex} />
      ))}
    </ListGroup>
  );
};

export default ErrorList;
