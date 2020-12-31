import React from 'react'
import './Releases.css'

export default props =>{

    return(
        <div className="Releases">
            <label htmlFor="accounts">Despesas: </label>
            <input id='accounts' type="number" placeholder="R$"
                onChange={el => props.setAccouns(parseInt(el.target.value))}
                min='0'
            />
        </div>
    )
}