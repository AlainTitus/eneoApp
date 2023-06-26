import React from 'react'
import { Typography, Paper, Stack, Divider, Grid, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import BienvenuHeader from '../Header/BienvenuHeader'
import ProjetItem from './ProjetItem';



const Accueil = ({ profile }) => {

  const navigate = useNavigate();

  const handleProjets = () => {
    navigate('/projets');
  }
  const handleOrdonnancement = () => {
    navigate('/ordonnancement')
  }
  return (
    <div style={{ width: '80%', height: '100%' }}>
      <Paper style={{ padding: '8px', height: '100%' }}>
        <BienvenuHeader profile = {profile} />
        <Box
          style={{ margin: '16px 0' }}
        >
          <Typography variant='body1' component='div'>
            <span className='span-projet' >MyApp</span> ,vous permet d'avoir accès aux opérations d'exploitation et maintenance HTA/BT à Eneo_DRE. Elle a pour but de :
            <ul className='ul-accueil'>
              <li>Visualiser les performances selon les différentes activités d'exploitation,</li>
              <li>Collecter et modifier au fil de l'eau les données d'exploitations,</li>
              <li>Planifier les travaux d'exploitation et maintenance avec des ToDo-list bien élaboré,</li>
              <li>Documenter les différents projets et faire le suivi des clôtures,</li>
              <li>Faire une veille sur la situation financière et optimiser les dépenses.</li>
            </ul>
          </Typography>
        </Box>
        
        <Grid container spacing={8} style={{ padding: '16px 16px' }}>
          <ProjetItem titre='Suivi des projets' btn_titre ='Voir plus' xs_responsive ={6} action_btn = {handleProjets} />
          <ProjetItem titre='Suivi ordonnancement' btn_titre ='Voir plus' xs_responsive ={6} action_btn = {handleOrdonnancement} />
        </Grid>
      </Paper>
    </div>
  )
}

export default Accueil
