import { useState } from "react";

export function App() {
  const[numero, setNumero] = useState(100)
  const[mostrarEsconder, setMostrarEsconder] = useState(false)
  
  function handleAumentar(){
    setNumero(numero + 100)
  }
  
  function handleMostrarEsconder(){
    mostrarEsconder
  }
  return(
    <div>
      <h1>App</h1>
  
      <div>
        <h2>Numero: {numero}</h2>
  
        <button onClick={handleAumentar}>Aumentar</button>
      </div>
  
      <div>
  
      </div>
    </div>
  )
}