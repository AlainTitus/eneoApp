import React, { useState } from 'react';
import { Button, TextField, Paper } from '@mui/material';
import { Navigate, Link, Form, useNavigate } from 'react-router-dom';


const OldConnexion = ({ setProfile, setToken }) => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const navigate = useNavigate();

    const handleConnexion = () => {
        const identification = { email, pwd }
        fetch('http://localhost:5500/connexion',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(identification),
                credentials: 'include'
            }).then(async (res) => {
                console.log('Données d\'identification envoyé avec succès')
                console.log('res: ', res);
                const token = await res.json();
                console.log(token.token);
                setToken(token.token)
                if (res.status == 200) {
                    fetch('http://localhost:5500/getprofile',
                        {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${token.token}`,
                                'Content-Type': 'application/json'
                            },
                        }
                    ).then((res) => res.json())
                    .then((data) => {
                            console.log(data.name);
                            setProfile(data.name)
                            navigate('/accueil')
                        })

                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='form-container'>
            <Paper className='paper-form'>
                <div style={{ margin: '20px 0 20px 0' }}>
                    <h5 className='titre-form'>Se connecter</h5>
                </div>
                <Form action="/projets" method='get' className='form-connexion'>

                    <div className='label-connexion'><label htmlFor="identifiant">Email :</label></div>
                    <div>
                        <TextField
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
        </div>



    )
}

export default OldConnexion;
