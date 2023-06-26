import React, { useState } from 'react';
import { Button, TextField, Paper } from '@mui/material';
// import { Navigate, Link, Form, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'


const Connexion = () => {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  // const navigate = useNavigate()

  const initialValues = {
    username: 'alichris',
    email: '',
    password: ''
  }
  const onSubmit = values => {
    console.log('Form datas', values);
  }
  // const validate = values => {
  //   const errors = {}
  //   if (!values.username) errors.username = 'Required';

  //   if (!values.email) {
  //     errors.email = 'Required';
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //     errors.email = "invalid email frmat"
  //   }

  //   if (!values.password) errors.password = 'Required'

  //   return errors
  // }
  const validationSchema = Yup.object({
    username: Yup.string().required('Required!'),
    email: Yup.string().email("invalid email format!").required('Required!'),
    password: Yup.string().required('Required!')
  })


  // console.log('Visited fields', formik.touched);

  // const handleConnexion = () => {
  //   if (username == 'alain' && pwd == "alain") {
  //     navigate("/projets")

  //   } else {
  //     console.log("vous n'ètes pas connecté");
  //   }
  // }

  return (

    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Paper className='paper-form' style={{width:'600px'}}>
          <Form>
            <div className='label-connexion'>
              <label htmlFor="username">Username :</label>
            </div>
            <div>
              <Field type="text" id='username' name='username' style={{width:'100%', height:'40px', padding:'8px'}}/>
            </div>
            <div>
              <ErrorMessage name='username' />
            </div>
            <div className='label-connexion'>
              <label htmlFor="email">Email :</label>
            </div>
            <div>
              <Field type="email" id='email' name='email' style={{width:'100%', height:'40px', padding:'8px'}} />
            </div>
            <div>
              <ErrorMessage name='email' />
            </div>
            <div className='label-connexion'>
              <label htmlFor="password">Password :</label>
            </div>
            <div>
              <Field type="text" id='password' name='password' style={{width:'100%', height:'40px', padding:'8px'}} />
            </div>
            <div>
              <ErrorMessage name='password' />
            </div>
            <div>
              <button type='submit'>Envoyer</button>
            </div>
          </Form>
        </Paper>

      </Formik>
      {/* <div className='form-container'>
        <Paper className='paper-form'>
          <div style={{ margin: '20px 0 20px 0' }}>
            <h5 className='titre-form'>Se connecter</h5>
          </div>
          <Form action="/projets" method='get' className='form-connexion'>

            <div className='label-connexion'><label htmlFor="identifiant">Identifiant :</label></div>
            <div>
              <TextField
                value={username}
                onChange={e => setUsername(e.target.value)}
                type="text" name='identifiant' id='identifiant' fullWidth />
            </div>
            <div className='label-connexion'><label htmlFor="identifiant">Mot de passe :</label></div>
            <div>
              <TextField
                value={pwd}
                onChange={e => setPwd(e.target.value)}
                type="password" fullWidth />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '15px 0 15px 0', height: '50px' }}>
              <Button variant='contained' className='btn-form-accueil' onClick={handleConnexion}>Connexion </Button>
            </div>
          </Form>
        </Paper>
      </div> */}
    </>


  )
}

export default Connexion;
