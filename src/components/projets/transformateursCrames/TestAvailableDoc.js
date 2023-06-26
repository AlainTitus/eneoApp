import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const TestAvailableDoc = ({label, value}) => {
  return (
    < >
      { value == 'defaultDoc.jpg' && <div style={{display: 'flex', alignItems: 'center'}}> <span> <CloseIcon sx={{ color: 'red' }}/></span> <span>{label}</span> </div> }
      { value != 'defaultDoc.jpg' && <div style={{display: 'flex', alignItems: 'center'}}> <span> <CheckIcon color="success"/> </span> <span>{label}</span> </div> }
    </>
  )
}

export default TestAvailableDoc
