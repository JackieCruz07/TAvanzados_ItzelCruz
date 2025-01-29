import React, {useState} from 'react'
import "./Ejemplo01.scss";
import {Ejemplo02} from "../Ejemplo02/Ejemplo02";

//Hooks useState
export  function Ejemplo01() {
  const [contador, setContador] = useState(0);

  const incrementarValor=()=>{
    setContador(contador + 1);
  }
  const decrementarValor=()=>{
    setContador(contador +-1);
  }
  const fondo={
    tema:{
      backgroundColor: "Black",
      color: "white"

    }
  }

  return (
    <div>
     <Ejemplo02 contador={contador} 
     incrementar={incrementarValor}
     decrementar={decrementarValor}
     fondo={fondo}
     />
    </div>
  )
}

export default Ejemplo01