import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Outlet } from 'react-router-dom';
import TransfoCrames from './components/projets/transformateursCrames/TransfoCrames';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';
import Projets from './components/projets/Projets';
import Accueil from './components/accueil/Accueil';
import Header from './components/Header/Header';
import OldConnexion from './components/accueil/OldConnexion';
import Inscription from './components/accueil/Inscription';
import Ordonnancement from './components/ordonnancement/Ordonnancement';
import ProtectionDerivation from './components/projets/ProtectionDerivation/ProtectionDerivation';
import FormikContainer from './public/form/derivations/FormikContainer';
import FormProtectDerivation from './components/projets/ProtectionDerivation/FormProtectDerivation';

const Main = () => {
  return (
    <div className='form-accueil'>
      <Outlet />
    </div>
  )
}

const App = () => {
  const [connected, setConnected] = useState(true)
  const [inscription, setInscription] = useState(false)
  const [profile, setProfile] = useState('')
  const [token, setToken] = useState(null)


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
      <div style={{ display:  'flex', height:'100%', flexDirection: 'column', justifyContent:'start'}}>

        <Header profile={profile} setProfile={setProfile} setToken={setToken} />

        <Routes>
          <Route path='*' element={<Main />} >
            <Route
              path='accueil'
              element={<Accueil profile={profile} />}
            />
            <Route
              path='oldconnexion'
              element={<OldConnexion setProfile={setProfile} setToken={setToken} />}
            />
            <Route
              path='inscription'
              element={<Inscription setToken={setToken} />}
            />
            <Route
              path='projets'
              element={<Projets token={token} profile={profile} />}
            />
            <Route
              path='ordonnancement'
              element={<Ordonnancement token={token} />}
            />
            <Route
              path='projets/transfocrames'
              element={<TransfoCrames token={token} />}
            />
            <Route
              path='projets/protectionderivation'
              element={<ProtectionDerivation token={token} />}
            />
          </Route>
        </Routes>
      </div>
    </LocalizationProvider>
  );
}

export default App;
