import React from 'react'
import logo from './logo.svg'

function App() {
  const person = {name: "Jhon Doe",city: "Park Avanue",country: "USA"}
  return (
    <div style={{textAlign: "center",color: "#001122"}}>
      <h1>I am Deployed</h1>
      <img src={logo} alt="logo" width={100} />
        <ul>
          <li>{person.name}</li>
          <li>{person.city}</li>
          <li>{person.country}</li>
        </ul>
      <button>Check</button>

    </div>
  )
}

export default App
