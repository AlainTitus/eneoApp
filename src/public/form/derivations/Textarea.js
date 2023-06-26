import React from 'react'
import TextError from './TextError';
import { Field, ErrorMessage } from 'formik';
import { Typography } from '@mui/material';

const Textarea = (props) => {
    const { label, name, ...rest } = props;
    return (
        <div>
            <Typography className='formik-label' variant='body2' component='div' >
                <label htmlFor={name} > {label} </label>
            </Typography>
            <div>
                <Field name={name} id={name} as='textarea' className='formik-textarea' {...rest} />
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Textarea
