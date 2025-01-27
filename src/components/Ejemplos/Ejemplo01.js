import React, {useState} from 'react'

export function Ejemplo01() {
    const [contador, setContador] = useState(0);
    const IncrementarValor=()=>{
    setContador(contador + 1);
    }
  return (
    <div>
        <h1>Incrementar: {contador}</h1><button onClick={(IncrementarValor)}>Incrementar
        </button>
    </div>
  )
}

export default Ejemplo01