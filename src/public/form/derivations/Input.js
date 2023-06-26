import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';
import { Typography } from '@mui/material';

const Input = (props) => {
    const { label, name, ...rest } = props
    return (
        <div>
            <Typography className='formik-label' variant='body2' component='div' >
                <label htmlFor={name}  >{label}</label>
            </Typography>
            <div>
               <Field name={name} id={name} {...rest} className='formik-input' /> 
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Input
