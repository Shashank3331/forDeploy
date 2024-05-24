import React from 'react'
import logo from './logo.svg'

function App() {
  const person = {name: "Jhon Doe",city: "Park Avanue",country: "USA"}
  const deco = {width: "100px",border: "none",padding: "8px",background: "orange",borderRadius: "5px"}
  return (
    <div style={{textAlign: "center",color: "#001122"}}>
      <h1>I am Deployed</h1>
      <img src={logo} alt="logo" width={100} />
        <ul>
          <li>Name: {person.name}</li>
          <li>City: {person.city}</li>
          <li>Country: {person.country}</li>
        </ul>
      <button style={deco}>Check</button>

    </div>
  )
}

export default App
