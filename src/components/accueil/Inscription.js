import React from 'react';
import { Button, TextField, Paper } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Inscription = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [identifiant, setIdentifiant] = useState('');
  const [pwd, setPwd] = useState('');

  const navigate = useNavigate();

  const handleSubmit = ()=>{
    const dataUser = {email, identifiant, pwd}
    fetch('http://localhost:5500/inscription',
    {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body : JSON.stringify(dataUser),
    }).then((res) => {
      return res.json()
    }).then(data => {
      navigate('/projets')
      console.log(data.result)
      setToken(data.token)
    });
      
  }
  return (
    <div className='form-container'>
      <Paper className='paper-form'>
        <div style={{margin:'20px 0 20px 0'}}>
          <h5 className='titre-form'>Créer un compte</h5>
        </div>
        <form action="/projets" className='form-connexion'>

          <div className='label-connexion'><label htmlFor="email">Votre mail :</label></div>
          <div>
            <TextField type="text" name='email' id='email' value={email} onChange={e=> setEmail(e.target.value)}  fullWidth />
          </div>
          <div className='label-connexion'><label htmlFor="identifiant">Identifiant :</label></div>
          <div>
            <TextField type="text" name='identifiant' id='identifiant' value={identifiant} onChange={e=> setIdentifiant(e.target.value)} fullWidth />
          </div>
          <div className='label-connexion'><label htmlFor="pwd">Mot de passe :</label></div>
          <div>
            <TextField type="password" id='pwd' fullWidth helperText='Attention, ne partager pas votre mot de passe' value={pwd} onChange={e=> setPwd(e.target.value)} />
          </div>
          <div style={{display: 'flex', justifyContent:'center', margin:'15px 0 15px 0', height:'50px'}}>
            <Button variant='contained' className='btn-form-accueil' onClick={handleSubmit}>Création du compte</Button>
          </div>
        </form>
      </Paper>
    </div>
  )
}

export default Inscription
