import React, { Component } from 'react'
import AdProduto from '../AdProduto/AdProduto'



export default class ListaBebidas extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      reset: this.props.reset
    }
    this.getProduto = this.props.getProduto
    
  }
  componentDidUpdate(prevProps, prevState) {
    let item = this.props.item
    if (this.props.reset !== prevProps.reset ) {
      this.setState({ reset: true }, () => {console.log('atual, ' , this.state)})
      
    }
  }

  render() { 
    console.log('estado ', this.state)
      let arrayBebidas =  ['CVT', 'CVB', 'fino', 'cháDia', 'agua', 'limonada', 'pedras', 'cervS/Alcool' ]
      let bebida = 'bebida'
    return arrayBebidas.map((item, index) => {
      
        return <><div key={index} className={`bebida ${item}`} > <AdProduto reset={this.props.reset}  getProduto={this.getProduto} item={item} /> </div></>
    })
  }
}