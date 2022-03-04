import React, { useState, useEffect } from 'react';
import { Toast } from 'react-bootstrap';
import { run as runHolder } from 'holderjs/holder';

import './UVToast.css';

const UVToast = (props) => {
  const [isVisible, setIsVisible] = useState(props.isVisible);

  useEffect(() => {
    runHolder('image-class-name');
  });

  useEffect(() => {
    setIsVisible(props.isVisible);
  }, [props.isVisible]);

  const closeToast = () => {
    setIsVisible(false);
  }

  const toastStyle = {
    width: props.width
  }

  return (
    <Toast show={isVisible}
      onClose={closeToast}
      className={props.className}
      style={toastStyle}>
      <Toast.Header closeButton={(typeof props.closeEnabled !== 'undefined') ? props.closeEnabled : true}>
        <img
          src="holder.js/20x20?text=%20&bg=#f0ad4e&fg=FF"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto">{props.title}</strong>
        <small>{props.subtitle}</small>
      </Toast.Header>
      <Toast.Body>{props.bodyComponent}</Toast.Body>
    </Toast>
  )
};

export default UVToast;
