import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Paper, Grid, Typography } from '@mui/material';
import ProjetElement from './ProjetElement';
import BienvenuHeader from '../Header/BienvenuHeader';
import { Outlet, Routes, Route } from 'react-router-dom';
import TransfoCrames from './transformateursCrames/TransfoCrames';


const Projets = ({ token, profile }) => {

  const [donnees, setDonnees] = useState(null)
  const [itemVisible, setItemVisible] = useState(true)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5500/listxfos',
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          console.log(data);
          // navigate('/oldconnexion')
        } else {
          setDonnees(data)
        }
      })
  }

  const handleXfoCrame = () => {
    console.log('transformateurs cramés');
    navigate('/projets/transfocrames')
  }
  const handleDerivation = () => {
    console.log('protection dérivations');
    navigate('/projets/protectionderivation')
  }

  return (
    <div style={{ width: '80%', height: '100%' }}>
      <Paper style={{ padding: '8px', height: '100%' }}>
        <BienvenuHeader profile={profile} />
        {itemVisible &&
          <>
            <Typography variant='h6' component='h6'> Ci-dessous la liste des projets :</Typography>
            <Grid container spacing={4} style={{ padding: '16px 16px' }}>
              <ProjetElement titre='Transformateurs cramés' btn_titre='Voir' xs_responsive={4} btn_action={handleXfoCrame} />
              <ProjetElement titre='Aug/Muta Transformateurs' btn_titre='Voir' xs_responsive={4} btn_action={handleXfoCrame} />
              <ProjetElement titre='Protection des dérivations' btn_titre='Voir' xs_responsive={4} btn_action={handleDerivation} />
              <ProjetElement titre='Protection des postes' btn_titre='Voir' xs_responsive={4} btn_action={handleXfoCrame} />
              <ProjetElement titre='Entretien emprises de ligne' btn_titre='Voir' xs_responsive={4} btn_action={handleXfoCrame} />
              <ProjetElement titre='Remplacement supports' btn_titre='Voir' xs_responsive={4} btn_action={handleXfoCrame} />
            </Grid>
          </>
        }
        <Link to='/accueil'>Accueil</Link>
      </Paper>
    </div>
  )
}

export default Projets;
