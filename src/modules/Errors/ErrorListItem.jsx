import React from 'react';
import { Badge, ListGroup } from 'react-bootstrap';

const ErrorListItem = (props) => {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
      variant="warning"
    >
      <div className="ms-2 me-auto">
        {props.title &&
          <div className="fw-bold">{props.title}</div>
        }
        {props.subtitle}
      </div>
      {props.count &&
        <Badge variant="primary" pill>
          {props.count}
        </Badge>
      }

    </ListGroup.Item>
  );
};

export default ErrorListItem;
