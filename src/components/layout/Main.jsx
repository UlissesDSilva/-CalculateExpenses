import './Main.css'
import React, { Component } from 'react'
import Salary from '../releases/Salary'
import Accounts from '../releases/Accounts'
import Amount from '../releases/Amount'
import Button from '../releases/Button'



export default class Main extends Component {
    
    state = {
        salary: 10,
        accounts: 0
    }

    calculation = () => {
        this.setState({
            salary: this.state.salary - this.state.accounts
        })
    }

    changeSalary = (newValue) => {
        this.setState({salary: newValue})
    }

    changeAccounts = (newValue) => {
        this.setState({accounts: newValue})
    }

    render(){
        return(
            <div className="Main">
                <div className="title"> Meus Gastos </div>
                <div className="content">
                    <h2>Calcule seus ganhos e gastos do mês</h2>
                    <br/>
                    <hr/>
                    <Salary setSalary={this.changeSalary}/>
                    <Accounts setAccouns={this.changeAccounts}/>
                    <Button calculation={this.calculation}/>
                    <Amount amount={this.state.salary}/>
                </div>
            </div>
        )
    }
}
