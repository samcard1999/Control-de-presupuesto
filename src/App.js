import React,{useState, useEffect} from 'react';
import { Pregunta } from './components/Pregunta';
import { Formulario } from './components/Formulario';
import { Listado } from './components/Listado';
import { ControlPresupuesto } from './components/ControlPresupuesto';

function App() {

 //definir el state
 const [presupuesto, guardarPresupuesto]= useState(0);
 const [restante, guardarRestante]= useState(0);
 const [mostrarPregunta, actualizarPregunta]= useState(true);
 const [gastos, guardarGastos]= useState([]); 
 const [gasto, guardarGasto]= useState({});
 const [crearGasto, guardarCrearGasto]= useState(false);

 //useEffect que actualiza el restante
 useEffect(()=>{
if(crearGasto){
//agrega el nuevo presupuesto
  guardarGastos([
    ...gastos,
    gasto
  ]);

  //resta del presupuesto actual
  const presupuestoRestante = restante-gasto.cantidad;
  guardarRestante(presupuestoRestante);

  guardarCrearGasto(false);
}

},[gasto, crearGasto, gastos, restante]);

  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>
        <div className='contenido-principal contenido'>
       { mostrarPregunta ? <Pregunta
        guardarPresupuesto={guardarPresupuesto}
        guardarRestante={guardarRestante}
        actualizarPregunta={actualizarPregunta}
        ></Pregunta> :  <div className='row'>
        <div className='one-half column'>
          <Formulario 
          guardarGasto={guardarGasto}
          guardarCrearGasto={guardarCrearGasto}
          ></Formulario>
        </div>
        <div className='one-half column'>
          <Listado
          gastos={gastos}
          ></Listado>

          <ControlPresupuesto
                      presupuesto={presupuesto}
                      restante={restante}
          >

          </ControlPresupuesto>
        </div>
      </div>}
       
        </div>
      </header>
    </div>
  )

}
export default App;
