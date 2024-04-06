import React , {useState } from 'react'
import { Error } from './Error'
import { v4 as uuidv4 } from 'uuid'; 
import Proptypes from 'prop-types'

export const Formulario = ({guardarGasto, guardarCrearGasto}) => {
const [nombreGasto, actualizarNombreGasto]= useState('');
const [cantidad, guardarCantidad]= useState(0);
const [error, setError]= useState(false);
const agregarNombreGasto =(e) =>{
    e.preventDefault();
    //validar
    if(cantidad<1 || isNaN(cantidad) || nombreGasto.trim()===''){
        setError(true);
        return;
    }
    setError(false);

    //construir el objeto gastos
    const gasto= {
        nombreGasto,
        cantidad,
        id:uuidv4()
    }
     //pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);
    //resetear el form
    guardarCantidad(0);
    actualizarNombreGasto('');
    
}


  return (
    <form onSubmit={agregarNombreGasto}>
        <h2>Agrega tus gastos aqui</h2>
            {
                error? <Error mensaje={"Ambos campos obligatorios o presupuesto incorrecto"}></Error> : null
            }
        <div className='campo'>
            <label>Nombre Gasto</label>
            <input
            type='text'
             className='u-full-width'
            placeholder='Ej. Transporte'
            value={nombreGasto}
            onChange={e => actualizarNombreGasto (e.target.value)}
            ></input>
        </div>

        <div className='campo'>
            <label>Cantidad Gasto </label>
            <input
            type='number'
            className='u-full-width'
            placeholder='Ej. 300'
            value={cantidad}
            onChange={e => guardarCantidad (parseInt(e.target.value))}
            ></input>
        </div>
        <input
        type='submit'
        className='button-primary u-full-width'
        value='Agregar Gasto'
        ></input>

    </form>
  )
}

Formulario.propTypes = {

    guardarCrearGasto: Proptypes.func.isRequired,
    guardarGasto: Proptypes.func.isRequired
}