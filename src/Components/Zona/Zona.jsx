import './Zona.css'
import React, { Component } from 'react'
import axios from 'axios'

const baseUrl =  `http://localhost:3002/zonas`

export default class Zona extends Component{
    
    constructor(props) {
        super(props)
        this.state = {nome: ''}
      }
    
      getMesasZonas(){axios
        .get(`${baseUrl}/${this.props.id}`)
        .then(resp => {
            console.log('**  activated  **')
            let respdata = resp.data.mesas
            let respNome = resp.data.nome
            let arrayMesas = Object.values(respdata)
            console.log( arrayMesas , respNome )
            this.displayMesasZonas(arrayMesas, respNome ) });

      }

      displayMesasZonas(arrayMesas, respNome){
            
            let mesas = []
            arrayMesas.forEach(i => {
                mesas.push(i)
            })
            this.props.renderMesas(mesas, respNome)
      }

    componentWillMount(){
        axios
        .get(`${baseUrl}/${this.props.id}`)
        .then(resp => {
            let nome =  resp.data.nome
            this.setState({nome})

        })
    }

   

    render(){ 
        return ( 
        <button onClick={e => this.getMesasZonas(e)}>{this.state.nome}</button>
         )
    }
    

    }