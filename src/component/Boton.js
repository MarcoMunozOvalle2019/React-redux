import React from 'react';

class Boton extends React.Component{
    
  render(){
      return (
           <button onClick={ ()=>{this.props.handleClick()} }>Muestra Usuarios</button>
      )
  }
}

export default Boton