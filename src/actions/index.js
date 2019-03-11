import axios from 'axios';

export const SHOW_USERS='SHOW_USERS'


export function CargaUsuarios(){
    return ( (dispatch)=>{
        return axios.get("https://jsonplaceholder.typicode.com/users").then( (response)=>{
            dispatch(  Formato(response.data)  )
        })
    })
}
export function Formato(data){
    return{
        type:"SHOW_USERS",
        info:data
    }
}

export function otraPagina(){
    return ( (dispatch)=>{
       dispatch( {type:"SHOW_ONLY", info:[{id:1,name:'yo',username:'user2'}]} )
     }
    )
}

export function ingresa(esto){
    return ( (dispatch)=>{
       dispatch( {type:"SHOW_ADD", info:esto} )
     }
    )
}

export function modifica(esto){
    return ( (dispatch)=>{
       dispatch( {type:"SHOW_MOD", info:esto} )
     }
    )
}

export function busca(esto){
    //console.log('asa'+ JSON.stringify(esto))
    return ( (dispatch)=>{
       dispatch( {type:"BUSCA_TODO", info:esto} )
     }
    )
}

