import React, { useEffect, useState } from 'react';

import ErrorList from '../../../modules/Errors/ErrorList';
import UVToast from './UVToast';

const UVToastWrapper = (props) => {

  const [registrationErrors, setRegistrationErrors] = useState([]);

  useEffect(() => {
    let tmpErrors = [];
    for (let key in props.errors) {
      if (props.errors.hasOwnProperty(key) && props.touched && props.touched[key]) {
        tmpErrors.push({ title: props.errors[key] });
      }
    }
    setRegistrationErrors(tmpErrors);
  }, [props.errors, props.touched]);

  return (
    <UVToast width={props.width ? props.width : "65%"}
      isVisible={registrationErrors.length > 0}
      title={<h3>{props.title}</h3>}
      closeEnabled={false}
      bodyComponent={<ErrorList errors={registrationErrors} />} />
  )
};

export default UVToastWrapper;
