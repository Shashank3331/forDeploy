import React from 'react'

function App() {
  const person = {name: "Jhon Doe",city: "Park Avanue",country: "USA"}
  return (
    <div style={{textAlign: "center",color: "#9e8a76"}}>
      <h1>I am Deployed</h1>
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
