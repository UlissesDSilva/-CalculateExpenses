import React from 'react'
import './Releases.css'

export default props =>{

    return(
        <div className="Releases">
            <label htmlFor="salary">Salário: </label>
            <input 
                id='salary' type="number" placeholder="R$"
                onChange = {el => props.setSalary(parseInt(el.target.value))}
                min="0"
            />
        </div>
    )
}