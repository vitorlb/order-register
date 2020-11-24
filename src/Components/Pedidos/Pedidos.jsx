import './Pedidos.css'
import React, { Component } from 'react'
import Zona from '../Zona/Zona'
import Button from '../Button/Button'
import Mesa from '../Mesa/Mesa'
import MesaJourney from '../MesaJourney/MesaJourney'
import axios from 'axios'


const initialState =  { 
    id: 0, 
    conteudo: null, 
    mesa:null,
    mesas: [],
    zona: ''
}

const baseUrl = `http://localhost:3002/pedidos`
let mesaCheck = false

export default class Wrapper extends Component{
     constructor(props) {
         
        super(props)
        this.state = { ...initialState }
        this.renderMesas = this.renderMesas.bind(this)
        this.escolherMesa = this.escolherMesa.bind(this)
        this.getMesaData = this.getMesaData.bind(this)
        this.mesaUnCheck = this.mesaUnCheck.bind(this)
        this.saveMesa = this.saveMesa.bind(this) 
        this.mesaJourneyRef = React.createRef()
      }

      

      getMesaData(data) {
          let {id, conteudo, mesa, zona} = this.state
          conteudo = data
          id++
          let mesaLength = Object.keys(conteudo).length  
          
          if (id && mesa && mesaLength > 0){
            
            this.setState({conteudo, id}, () => {console.log('fim' , this.state)})
            let postPedido = { mesa, conteudo , zona}
            console.log('postPedido =>' , postPedido)
            let metodo = 'post'
            axios[metodo](baseUrl, postPedido).then(resp => { alert(`Mesa ${mesa} guardada`) } )
            this.setState({...initialState, id}, () => {console.group('reset' , this.state)}) 
            }
            else {
                if(!mesa){alert('escolha uma mesa')}
                if(mesa && mesaLength === 0){alert('mesa sem produtos')}
            }
          }
        



      escolherMesa(valor){
        if(mesaCheck === false){
        let mesa = this.state.mesa
        let numeroMesa = valor.target.value
        mesa = numeroMesa
        
        this.setState({ mesa }, () => console.log('mesa' , mesa, this.state)) }else{
            console.log('aberta mesa' , this.state.mesa)
        }
        };


        saveMesa() {
            this.mesaJourneyRef.current.saveMesa()
        }

        mesaCheck() {
            mesaCheck = true 
        }

        mesaUnCheck()  {
            mesaCheck = false 
            this.setState({...this.state, mesa: null})
        }

      renderMesas(mesas, nome) { this.setState({zona: nome, mesas}) }

     // getPedidoJourney(pedido)

      pintaMesas() {
          let mesas = this.state.mesas 
          if (mesas.length === 0) { } else{
          return (
              <div className="lista-mesas">
                  {mesas.map((mesa, index) => { return <Mesa btnFunction={this.escolherMesa} nome={mesa} key={index}></Mesa>})}
                  <Button className="confirm" btnFunction={this.mesaCheck} >Confirmar</Button>
              </div>
          )} };

     
      
     

      render() {

        return(
                <>
              
                
               
                <section>
                    <h4>Mesa {this.state.mesa}</h4>
                    <MesaJourney ref={this.mesaJourneyRef} mesaUnCheck={this.mesaUnCheck} mesa={this.state.mesa} getMesaData={this.getMesaData}></ MesaJourney>
                </section>
                 <section className="zonas">
               <Zona renderMesas={this.renderMesas} id="1"> </Zona>
               <Zona renderMesas={this.renderMesas} id="2"> </Zona>
               <Zona renderMesas={this.renderMesas} id="3"> </Zona>
               <Zona renderMesas={this.renderMesas} id="4"> </Zona>
               
               <div className="display-mesas">
                    <p>{this.state.zona}</p>
                    {this.pintaMesas()}
                </div>
               </section>
               <section>
                   <div>
                    <Button btnFunction={this.saveMesa}>Salvar Mesa</Button>
                    </div>
                    
                </section>

                
                </>
        )
    }


    }

        
    
    

   
