import './Wrapper.css'
import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'

import Routes from './Routes'
import AbrirDia from '../AbrirDia/AbrirDia' 
import Header from './Header'
import axios from 'axios'
import NavButton from '../Button/NavButton'

const initialState = {
    dia: {
        data: 'obter data',
        pedidos: []
    },
    botaoGravarDia: false
}

const baseUrl = 'http://localhost:3002/dias'

export default class Wrapper extends Component{
    constructor(props) {
        super(props)
        this.state = {...initialState}
        this.salvarDia = this.salvarDia.bind(this)
      }

 
    

    salvarDia() {
        
        var dia = this.state.dia
        console.log(dia )
        const metodo = dia.id ? 'put' : 'post'
        const url = dia.id ? `${baseUrl}/${dia.id}` : baseUrl
        //aqui funciona
        axios[metodo](url, dia).then(resp => {
            if(dia.id){alert('dia já começou')}
            dia = resp.data
            this.setState( { dia, botaoGravarDia: true } )
            console.log('adicionado', this.state.dia)
        })
        
        
        
    }

    alert = () => console.log('alerta')
    

    render() {

        return(
            <HashRouter>
            <main className="App-header">
                <div className="wrapper">
                <Header state={this.state}></Header>
                <AbrirDia salvarDia={this.salvarDia} state={this.state} />
                <nav>
                <NavButton link="/pedidos">Novo Pedido</NavButton>
                <NavButton link="/historico">Historico Pedidos</NavButton>
                </nav>
                <Routes></Routes>
                </div>
            </main>
            </HashRouter>
        )
    }
}