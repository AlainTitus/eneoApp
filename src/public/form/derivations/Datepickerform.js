import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError';
import { Typography } from '@mui/material';

const Datepickerform = (props) => {
    const { label, name, ...rest } = props;
    return (
        <div>
            <Typography className='formik-label' variant='body2' component='div'>
                <label htmlFor={name} > {label} </label>
            </Typography>
            <div>
                <Field name={name} style= {{width: '100%'}} >
                    {
                        ({ field, form }) => {
                            const { setFieldValue } = form;
                            const { value } = field;
                            return (
                                <DateView
                                    id={name}
                                    {...field}
                                    {...rest}
                                    selected={value}
                                    onChange={val => setFieldValue(name, val)}
                                    showTimeSelect
                                    dateFormat='Pp'
                                    className='formik-input'
                                />
                            )
                        }
                    }

                </Field>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Datepickerform
