import React from 'react'
import './Releases.css'

export default props => {

    return(
        <div className='Releases'>
            <h3>Saldo do mês</h3>
            <h2>R$: {props.amount.toFixed(2).replace('.', ',')}</h2>
        </div>
    )
}