import React, { Component } from 'react'
import axios from 'axios'  
import './HistoricoPedidos.css'
import NavButton from '../Button/NavButton'
import Button from '../Button/Button'

const baseUrl = 'http://localhost:3002/pedidos'

let getMesas = []

export default class HistoricoPedidos extends Component {
    state = {
      pedidos: []
    }
  
    componentDidMount() {
      axios.get(baseUrl)
        .then(res => {
          const pedidos = res.data;
          getMesas = pedidos
          this.setState({ pedidos: getMesas });
          console.log('pedidos info => ' , pedidos)
        })
    }

    keyValues = (obj) => { 

      let arrValues = []
      for (let key in obj) {
        arrValues.push(`${key} : ${obj[key]}` )
      }
      console.log(arrValues)
      return arrValues.map(keyValue => {
        return (<p>{keyValue}</p>)
      })
    }


    logButton = () => {
      console.log('yoyoyoy' )
    }


    renderMesas = () => {
        
        console.log('estado' , this.state.pedidos.length)
        
        return (

            <div className="dataMesas">
                {this.state.pedidos.map(pedido => {
                return (<div className="dataMesa">
                    <div className="titulo">

                    Mesa {pedido.mesa}
                    <Button btnFunction={this.logButton}>
                      <NavButton link="/pedidos">
                         ✎
                      </NavButton>
                    </Button>
                    </div>
                    <hr />
                    <div className="conteudo">
                    {this.keyValues(pedido.conteudo)}
                    
                    </div>
                </div>)
            })}  
            </div>
          
          )
    }



  
    render() {
      return (
          <>
            {this.renderMesas()}
          </>
      )
    }
  }

/* export default class ListaBebidas extends Component {

    state = { dataMesas }


    getPedidos = () => {

        
        console.log('data no componente' ,dataMesas)
        
        return this.state.dataMesas.map((data, index)=> {
            return (
                <div className="mesa" key={index}>
                <div className="titulo">
                    {data.mesa}
                </div>
                <div className="conteudo">
                {data.conteudo}
                </div>

            </div>
            
            )
        })
    }






    render() {
        return (
        <>
        <Button btnFunction={this.getPedidos}>Log Pedidos</Button>
        <p>Historico Pedidos</p> 
        {this.getPedidos()}
        
         
        </>)
    }
} */ //fim


