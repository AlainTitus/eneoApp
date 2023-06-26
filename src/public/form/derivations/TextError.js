import React from 'react'

const TextError = (props) => {
  return (
    <div className='formik-error'>
      {props.children}
    </div>
  )
}

export default TextError
