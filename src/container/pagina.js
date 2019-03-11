import React from 'react';
import{connect} from 'react-redux'
import * as actionCreators from '../actions/index'
import Boton from '../component/Boton'
import Boton2 from '../component/Boton'
import {Table} from 'react-bootstrap'

class Usuarios extends React.Component{
   render(){
       let varios= this.props.info;
       return (
           <div>
                <Table responsive>
                          <thead> 
                            <tr>
                                <th>identificador</th>
                                <th>nombre</th>
                                <th>Nombre usuario</th>
                            </tr>
                           </thead>
                            {
                                varios.map((este,index)=>{
                                    return ( 
                                        <thead key={index}> 
                                        <tr>
                                            <th>{este.id}</th>
                                            <th>{este.name}</th>
                                            <th>{este.username}</th>
                                        </tr>
                                        </thead>
                                    ) 
                                })
                            }
                </Table>
                <Boton handleClick={this.props.CargaUsuarios} ></Boton>
                <Boton2 handleClick={this.props.otraPagina} ></Boton2>
            </div>
    )
   }
}

const mapStateToProps=(state)=>{
    return state
}

 export default connect ( mapStateToProps, actionCreators)(Usuarios);


