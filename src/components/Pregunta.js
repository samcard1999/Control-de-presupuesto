import React,{ useState } from 'react'
import { Error } from './Error';
import Proptypes from 'prop-types'

export const Pregunta = ({guardarPresupuesto, guardarRestante,actualizarPregunta}) => {

    //definir el state
const [cantidad, guardarCantidad]= useState(0);
const [error, setError]= useState(false);
//funcion que lee el presupuesto
const definirPresupuesto= e => {
    guardarCantidad(parseInt(e.target.value, 10));
}
//submit para definir el presupuesto
const agregarPresupuesto = e =>{
    e.preventDefault();
//validar
if(cantidad<1 || isNaN(cantidad) ){
setError(true);
return;
}
//si se pasa la validacion 
setError(false);
guardarPresupuesto(cantidad);
guardarRestante(cantidad);
actualizarPregunta(false);
}

  return (
    <>
    <h2>Coloca tu presupuesto</h2>
    {
        error? <Error mensaje="Presupuesto incorrecto"></Error>: null
    }
    <form
    onSubmit={agregarPresupuesto}
    >
        <input
        type='number'
        className='u-full-width'
        placeholder='Coloca tu pregunta'
        onChange={definirPresupuesto}
        >
        </input>

        <input
        type='submit'
        className='button-primary u-full-width'
        value="Definir presupuesto"
        >
        </input>
    </form>
    </>
  )
}

Pregunta.propTypes = {

    guardarPresupuesto: Proptypes.func.isRequired,
    guardarRestante: Proptypes.func.isRequired,
    actualizarPregunta: Proptypes.func.isRequired
}