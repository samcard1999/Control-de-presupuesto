import React from 'react'
import { Gasto } from './Gasto'
import Proptypes from 'prop-types'

export const Listado = ({gastos}) => {
  return (
    <div className='gastos-realizados'>
        <h2>Listado</h2>
        {
            gastos.map( gasto => (
              <Gasto
              gasto={gasto}
              key={gasto.id}
              >

              </Gasto>
            ))
        }
    </div>
  )
}

Listado.propTypes = {

    gastos: Proptypes.array.isRequired
}