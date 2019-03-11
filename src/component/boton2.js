import React from 'react';

class Boton2 extends React.Component{
    
  render(){
      return (
           <button onClick={ ()=>{this.props.handleClick()} }>otra</button>
      )
  }
}

export default Boton2