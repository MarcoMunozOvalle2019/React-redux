let defaultState={
    info:[]
}

const ReducerPrincipal=(state=defaultState, action)=>{
switch (action.type){
    case "SHOW_USERS": return{
             ...state,
                 info:action.info
    }
    case "SHOW_ONLY": return{
        ...state,
            info:action.info
    }

    case 'SHOW_MOD': {
        console.log('Mod='+JSON.stringify(action.info))
//        let encontrado='No encontrado'
        let encontrado: [
            {
              id: 0,
              name: '0',
              username: '0'
            }
          ]
        state.info.map((este)=>{
            if(este.name===action.info.name){return encontrado=este}
            return encontrado
        })

        console.log('encontre='+JSON.stringify(encontrado))

        if(encontrado){
            return Object.assign({}, state, {
                info: state.info.replace({
                  id: action.info.id,
                  name: action.info.name,
                  username: action.info.username
                })
              })
        }
        
    }

    // case 'SHOW_ADD': {
    //     //console.log(JSON.stringify(action.info))
    //     return Object.assign({}, state, {
    //       info: state.info.concat({
    //         id: action.info.id,
    //         name: action.info.name,
    //         username: action.info.username
    //       })
    //     })
    // }

    case 'SHOW_ADD': {
        return Object.assign({}, state, {
          info: state.info.concat(
                action.info
           )
        })
    }

    case 'SHOW_DEL':{
        return Object.assign({}, state, {
          info: state.info.filter((state)=>state.id !== action.id)
        })
  }


 
    case 'BUSCA_TODO':{
        //console.log('fin'+JSON.stringify(action.info)) 
        let encontrado='No encontrado'
        state.info.map((este)=>{
            if(este.name===action.info.name){return encontrado=este}
            return 'No encontrado'
        })
        console.log('encontre='+JSON.stringify(encontrado))

        return Object.assign({}, state, {
          info: [
            ...state.info,
            {
              id: action.info.id,
              name: 'false'
            }
          ]
        })

    }

    // const postReducer = (state = [], action) => {
    //     switch(action.type) {
    //       case 'ADD_POST':
    //         return state.concat([action.data]);
    //       case 'DELETE_POST':
    //         return state.filter((post)=>post.id !== action.id);
    //       case 'EDIT_POST':
    //         return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
    //       default:
    //         return state;
    //     }
    //   }
    //   export default postReducer;

    default: return {
             ...state
    }
 }
}

export default ReducerPrincipal