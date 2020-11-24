import './MesaJourney.css'
import React, { Component } from 'react'
import AdProduto from '../AdProduto/AdProduto'
import ListaBebidas from '../ListaBebidas/ListaBebidas' 
import Button from '../Button/Button'

let carrinho = { }




export default class MesaJourney extends Component{
    constructor(props) {
       super(props)
       this.myRef = React.createRef();
       this.state = {
           ...carrinho,
           reset: false
        }
       this.getProduto = this.getProduto.bind(this)
       this.saveMesa = this.saveMesa.bind(this)
     }

     getProduto(produto, produtoKey) {

         carrinho[produtoKey] =  produto[produtoKey]
         this.setState({[produtoKey]: produto[produtoKey]})
     }

     refPass = () => {this.addProduto.current.zerarValor()}

     saveMesa() {
        
        if(this.props.mesa !== null){
         let mesa = carrinho
         let reset = this.state.reset
         reset = !reset
         console.log('mesa =>' , mesa)
         this.props.getMesaData(mesa) 
         for (let key in this.state) {
            if (key !== reset) {
            delete this.state[key]
            }
         }
         this.setState({ reset }, ()=> console.log('resett' , this.state))
         carrinho = {  }
         this.props.mesaUnCheck()
       
        }
        else alert('escolha uma mesa')
         
        }


     hitRender = () => {
        console.log(window.location)
        this.render()
        }


     render() {
         return ( 
            <>
            <div className="prato-dia-wrapper">

                <div>
                    <AdProduto reset={this.state.reset} item="pdv" getProduto={this.getProduto} ></AdProduto>
                    <AdProduto reset={this.state.reset}item="s/s" getProduto={this.getProduto} ></AdProduto>
                </div>
                
                <div>
                    <AdProduto reset={this.state.reset} item="pd" getProduto={this.getProduto} ></AdProduto>
                    <AdProduto reset={this.state.reset} item="s/s" getProduto={this.getProduto} ></AdProduto>
                </div>
                    <ListaBebidas reset={this.state.reset} getProduto={this.getProduto} ></ListaBebidas>

            </div>
             
            
            </>
            
            )
     }  //fim


    }