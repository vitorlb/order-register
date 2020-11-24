import React, { Component } from 'react'

export default class Button extends Component {
  render() {
      const { btnFunction, children, className } = this.props;
    return (
      <button onClick={e => btnFunction(e)} className={className}>
            {children}
      </button>
    )
  }
}




        
    