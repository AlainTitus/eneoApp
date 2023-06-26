import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Datepickerform from './Datepickerform';

const FormController = (props) => {
  const {control, ...rest} = props;
  switch (control) {
    case 'input':
        return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'date':
      return <Datepickerform {...rest} />
    default: return null;
  }
}

export default FormController;
