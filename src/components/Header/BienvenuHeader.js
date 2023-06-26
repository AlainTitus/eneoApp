import React from 'react';
import { Typography, Divider } from '@mui/material';

const BienvenuHeader = ({profile}) => {
  return (
    <>
       <Typography
          variant='h5'
          component='div'
          className='header-bienvenue'
        >
          Bienvenue, <strong>{profile.split(' ')[1]}</strong>
        </Typography>
        <Divider></Divider>
    </>
  )
}

export default BienvenuHeader;
