import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';
import { Typography } from '@mui/material';

const Select = (props) => {
    const {name, label, options, ...rest} = props;
  return (
    <div>
      <Typography className='formik-label' variant='body2' component='div'>
        <label htmlFor={name}> {label} </label>
      </Typography>
      <div>
        <Field name={name} id={name} as='select' className='formik-input' {...rest} >
            {
                options.map(option => {
                    return (
                        <option key={option.value} value= {option.value} > {option.key} </option>
                    )
                })
            }
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select
