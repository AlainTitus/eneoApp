import React from 'react';
import ReactDOM from 'react-dom/client';

import {createBrowserRouter, RouterProvider, Link, Outlet} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Projets from './components/projets/Projets';
import { elements } from 'chart.js';
import Connexion from './components/accueil/Connexion';
import Inscription from './components/accueil/Inscription';
import Erreur404 from './components/Erreur/Erreur404';
import OldConnexion from './components/accueil/OldConnexion';
import Ordonnancement from './components/ordonnancement/Ordonnancement';
import Accueil from './components/accueil/Accueil';
import TransfoCrames from './components/projets/transformateursCrames/TransfoCrames';

const route = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path:'/accueil',
        element: <Accueil />
      },
      {
        path:'/connexion',
        element: <Connexion />
      },
      {
        path:'/inscription',
        element: <Inscription />
      },
      {
        path: '/oldconnexion',
        element: <OldConnexion />
      },
      {
        path: '/projets',
        element: <Projets />,
        children :[
          {
            path: '/projets/transfocrames',
            element: <TransfoCrames />
          },
          {
            path: '/projets/protectionderivation',
            element: <TransfoCrames />
          },
        ]
          
      },
      {
        path: '/ordonnancement',
        element: <Ordonnancement />
      },
    ]
  },
  {
    path: '*',
    element: <Erreur404 />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
