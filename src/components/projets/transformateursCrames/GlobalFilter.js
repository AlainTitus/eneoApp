import React from 'react';
import { TextField } from '@mui/material';

const GlobalFilter = ({filter, setFilter}) => {
  return (
    <div style={{display:'flex', alignItems: 'center', width:'600px', margin:'15px 0 15px 0'}}>
      <p style={{fontSize:"25px", margin:'0 10px 0 30px'}}>Search </p>
      <TextField
        color='success'
        value={filter || ''}
        onChange={e => setFilter(e.target.value)}
        fullWidth
        placeholder='Enter votre recherche'
      />
    </div>
  )
}

export default GlobalFilter
