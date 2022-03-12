/* Note: If we decide to share this component to other codebase, make sure to do following changes
1. registration-form.css -- Replace var(--color-danger) with actual color code.
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Field, FieldArray, Formik } from 'formik';
import * as Yup from 'yup';

import './registration-form.css';
import rData from './registration-form.json';
import UVToastWrapper from '../Core/UVToast/UVToastWrapper';

const initialValues = {
  name: '',
  age: '',
  email: '',
  password: '',
  address: '',
  phoneNos: [''],
  agreeCheck: ''
};

const onSubmit = (formData, submitProps) => {
  console.log('Form Data: ', formData);
  console.log('submitProps: ', submitProps);
};

const validationSchema = Yup.object({
  name: Yup.string().required(`${rData.name.label} ${rData.errors.required}`)
    .matches('^[a-zA-Z]+$', rData.name.alphabet),
  age: Yup.number().required(`${rData.age.label} ${rData.errors.required}`)
    .min(rData.age.minValue, rData.age.minValueError + rData.age.minValue)
    .max(rData.age.maxValue, rData.age.maxValueError + rData.age.maxValue)
    .integer(rData.age.integer),
  email: Yup.string().required(`${rData.email.label} ${rData.errors.required}`)
    .email(rData.email.email),
  userPassword: Yup.string().required(`${rData.password.label} ${rData.errors.required}`),
  address: Yup.string().required(`${rData.address.label} ${rData.errors.required}`),
  phoneNos: Yup.array().of(
    Yup.number().required(`${rData.phoneNos.label} ${rData.errors.required}`)
  ).required(`${rData.phoneNos.label} ${rData.errors.required}`),
  agreeCheck: Yup.string().required(`${rData.agreeCheck.errorMsg}`)
});

const RegistrationForm = () => {

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={false}
        validateOnBlur={true}
        validateOnMount>

        {formik => {
          return (

            < form className="g-3 registration-form-container" >

              <article >
                <header className='uv-header uv-centered-container'>
                  <h1>{rData.title}</h1>
                </header>
              </article>

              <article className="row uv-centered-container">
                <UVToastWrapper
                  title={rData.errorsTitle}
                  width={"65%"}
                  errors={formik.errors}
                  touched={formik.touched}
                />
              </article>
              <div className="row uv-centered-container">
                <div className="col-md-4">
                  <Field type="text" id="name" name="name"
                    className={"form-control " + (formik.errors.name && formik.touched.name ? 'field-error' : '')} />

                  <label htmlFor="name" className="form-label">{rData.name.label}</label>
                </div>
                <div className="col-md-4">
                  <Field type="number"
                    id="age"
                    name="age"
                    className={"form-control " + (formik.errors.age && formik.touched.age ? 'field-error' : '')}
                    step="1" />
                  <label htmlFor="age" className="form-label">{rData.age.label}</label>
                </div>
              </div>

              <div className="row uv-centered-container">
                <div className="col-md-4">

                  <Field type="text" id="email" name="email"
                    className={"form-control " + (formik.errors.email && formik.touched.email ? 'field-error' : '')} />

                  <label htmlFor="email" className="form-label">{rData.email.label}</label>
                </div>
                <div className="col-md-4">

                  <Field type="password" id="userPassword" name="userPassword"
                    className={"form-control " + (formik.errors.userPassword && formik.touched.userPassword ? 'field-error' : '')} />
                  <label htmlFor="userPassword" className="form-label">{rData.password.label}</label>
                </div>
              </div>

              <div className="row uv-centered-container">
                <div className="col-md-4">

                  <Field as="textarea" id="address" name="address"
                    className={"form-control " + (formik.errors.address && formik.touched.address ? 'field-error' : '')} />
                  <label htmlFor="address">{rData.address.label}</label>
                </div>
                <div className="col-md-4">

                  <FieldArray name="phoneNos">
                    {fieldArrayProps => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { phoneNos } = values;
                      return (
                        <div>
                          {
                            phoneNos.map((phoneNo, index) => (
                              <div key={index} className='phone-number-container'>
                                <Field type="number"
                                  name={`phoneNos[${index}]`}
                                  className={"form-control phone-number " + (formik.errors.phoneNos && formik.errors.phoneNos[index] && formik.touched.phoneNos && formik.touched.phoneNos[index] ? 'field-error' : '')} />
                                {phoneNos.length > 1 &&
                                  <FontAwesomeIcon icon={faTimesCircle}
                                    className="error row-delete cursorPointer"
                                    onClick={() => remove(index)} />
                                }

                                {index < rData.phoneNos.limit - 1 && index === phoneNos.length - 1 &&
                                  <FontAwesomeIcon icon={faPlusCircle}
                                    className='success row-add cursorPointer'
                                    onClick={() => push('')} />
                                }
                              </div>
                            ))

                          }
                        </div>
                      )
                    }

                    }
                  </FieldArray>
                  <label htmlFor={"phoneNos" + (initialValues.phoneNos.length - 1)}>{rData.phoneNos.label}</label>
                </div>
              </div>

              <div className="row uv-centered-container">
                <div className="col-md-8">
                  <div className="form-check">
                    <Field type="checkbox" id="agreeCheck" name="agreeCheck"
                      className={"form-check-input " + (formik.errors.agreeCheck && formik.touched.agreeCheck ? 'field-error' : '')} />
                    <label className="form-check-label" htmlFor="agreeCheck">
                      {rData.agreeCheck.label}
                    </label>
                  </div>
                </div>
              </div>

              <div className="row uv-centered-container">
                <div className="col-8 uv-centered-container">
                  <button type="submit" className="btn btn-primary"
                    disabled={!(formik.dirty && formik.isValid)}>{rData.submit.label}</button>
                </div>
              </div>
            </form>

          )
        }
        }
      </Formik>
    </>
  )
};

export default RegistrationForm;
