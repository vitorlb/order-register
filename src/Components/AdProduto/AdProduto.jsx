import React, { Component } from 'react'
import Button from '../Button/Button'
//AdProduto  T.P.C -> fazer AdProduto genérico 

let produtoInfo = {
  semSopaCheck: false,
  checkZerar: false
}


export default class AdProduto extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
        ...produtoInfo
     }
    this.saveSemSopa = this.saveSemSopa.bind(this)
    this.saveProduto = this.saveProduto.bind(this)
    this.retroceder = this.retroceder.bind(this)
    this.returnQuantity = this.returnQuantity.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    let item = this.props.item
    if (this.props.reset !== prevProps.reset && this.state[item]) {
      this.setState({[item]: null})
      
      produtoInfo[item] = null
      console.log(`item ${item} recebe função reset`, '   estado' , this.state)
    }
  }

  zerarValor = () => {
    if (this.props.reset === true) {
      console.log('yoyoyoyyo')
      for (let key in this.state) {
        delete this.state[key]
     };
     this.setState({...produtoInfo}) }
  
  }

  saveProduto(valor) {
    let item = this.props.item
    if (this.props.item === 's/s'){this.saveSemSopa(item, valor)} else {
    
      if (produtoInfo[`${item}`]) {
          let quantidade = produtoInfo[item]
          quantidade++
          produtoInfo[item] = quantidade
      } else { produtoInfo[item] = 1 }

    
     
    this.setState({[item]: produtoInfo[item]}, () => { console.log('estado' , this.state); })
    let produto = produtoInfo
    let produtoKey = item 
    this.props.getProduto(produto, produtoKey)
    
  }
};


saveSemSopa(item, valor) {
    
    
  valor = valor.target.previousSibling.previousSibling.previousSibling.innerHTML
  let produtoSemSopa = `${valor}SemSopa` 

    if (produtoInfo[`${produtoSemSopa}`]) {
      let quantidade = produtoInfo[produtoSemSopa]
      quantidade++
      produtoInfo[produtoSemSopa] = quantidade 
      
      
    } else { produtoInfo[produtoSemSopa] = 1 };

  let produto = produtoInfo
  let produtoKey = produtoSemSopa 
  this.setState({
    [produtoSemSopa]: produtoInfo[produtoSemSopa],
    semSopaCheck: produtoInfo[produtoSemSopa]
  })
  
  this.props.getProduto(produto, produtoKey) 
};

retroceder(valor) {
    let nextSib =  valor.target.nextSibling.innerHTML  
    let prevSib = null
    let propEstado = null
    if (nextSib === 's/s') {
        let newSib = valor.target.previousSibling.previousSibling.innerHTML
        prevSib = newSib }
    
    if (prevSib === null) {propEstado = nextSib}
    else {propEstado = `${prevSib}SemSopa`}

    let quantidade = this.state[propEstado]
    
    quantidade ? produtoInfo[propEstado] = quantidade - 1 : console.log('not defined')
         
    this.setState( {[propEstado] : produtoInfo[propEstado]} )
    
    let produto = produtoInfo
    let produtoKey = propEstado

    if (nextSib === 's/s') {this.setState({semSopaCheck: produtoInfo[propEstado]})}
    
    this.props.getProduto(produto, produtoKey)

    };

    returnQuantity() {
        let content = ' '
        let item = this.props.item
        if (this.state.semSopaCheck === false){return  <span className="badge badge-warning">{this.state[item]}{content}</span> }
        else {return <span className="badge badge-warning">{this.state.semSopaCheck}{content}</span>}
    }


 

 render() { 
      
      let item = this.props.item
      return ( 
        <>
        <Button btnFunction={this.retroceder}>↵</Button>
        <Button btnFunction={this.saveProduto}>{item}</Button>
        {this.returnQuantity()}
        </> )
 }



} //fim





    