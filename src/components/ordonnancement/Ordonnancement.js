import React from 'react'
import { useNavigate } from 'react-router-dom'

const Ordonnancement = ({token}) => {

  const navigate = useNavigate();

  const handleGoToProjets = () => {
    fetch('http://localhost:5500/projets',
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
        if (data.message === "ok") {
          navigate('/projets')
        }
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <h3>Ici la page Ordonnancement</h3>
      <button onClick={handleGoToProjets}>Allez à projets</button>
    </div>
  )
}

export default Ordonnancement
