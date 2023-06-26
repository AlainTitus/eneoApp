import React from 'react'
import Header from '../Header/Header'

const Erreur404 = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'stretch' }}>
            <Header />
            <div className='page-erreur'>
                <h2 style={{ fontStyle:'italic', textAlign:'center' }}>Oups !</h2>
                <h2 style={{ fontWeight: 'normal', textAlign:'center' }}> <strong>Erreur 404 :</strong> <span style={{ fontStyle: 'italic' }}>La page que vous cherchez n'existe pas</span> </h2>
            </div>
        </div>
    )
}

export default Erreur404
