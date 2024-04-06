import React from 'react'
import Proptypes from 'prop-types'

export const Gasto = ({gasto}) => {
  return (

    <li className='gastos'>
        <p>
            {gasto.nombreGasto}
            <span className='gasto'>$ {gasto.cantidad}</span>
        </p>
    </li>
  )
}

Gasto.propTypes = {

    gasto: Proptypes.object.isRequired
}