import{connect} from 'react-redux'
import * as actionCreators from '../actions/index'
//import Boton2 from '../component/Boton'

import React, { Component } from 'react';

class Usuarios2 extends Component {

  handleSubmit1 = (e) => {
        e.preventDefault();
        const id = this.id1.value;
        const name =  this.name1.value;
        const data = {
            id: id,
            name: name,
            username: name
        }
        this.props.ingresa(data)
  }
  handleSubmit2 = (e) => {
    e.preventDefault();
    const name =  this.name2.value;
    const data = {
        name: name
    }
    this.props.busca(data)
  }
  handleSubmit3 = (e) => {
        e.preventDefault();
        const id = this.id3.value;
        const name =  this.name3.value;
        const data = {
            id: id,
            name: name,
            username: name
        }
        this.props.modifica(data)
    }

    render() {
    let varios= this.props.info;
    return (
    <div>
        {
            varios.map((este)=>{
                //console.log('pagina'+JSON.stringify(este))
                //return este
            })
        }
        <h1>Ingresa</h1>
        <h1>{this.props.info.id}</h1>
        <form onSubmit={this.handleSubmit1}>
            <input required type="text" ref={(input)=>this.id1 = input}  placeholder='Id'/>
            <input required type="text" ref={(input)=>this.name1 = input}  placeholder='Name'/>
            <button>Ingresa</button>
        </form>

        <h1>Busca</h1>
        <h1>{this.props.info.id}</h1>
        <form onSubmit={this.handleSubmit2}>
            <input required type="text" ref={(input)=>this.name2 = input}  placeholder='Name'/>
            <button>Busca</button>
        </form>


        <h1>Modfica</h1>
        <h1>{this.props.info.id}</h1>
        <form onSubmit={this.handleSubmit3}>
            <input required type="text" ref={(input)=>this.id3 = input}  placeholder='Id'/>
            <input required type="text" ref={(input)=>this.name3 = input}  placeholder='Name'/>
            <button>Modifica</button>
        </form>


    </div>
    );
    }
}

const mapStateToProps=(state)=>{
    return state
}

export default connect ( mapStateToProps, actionCreators)(Usuarios2);


