 import React, { Component } from 'react';
 import {Route} from 'react-router-dom';
 import Usuarios from './container/pagina';
 import Usuarios2 from './container/pagina2';

class App extends Component {
    render() {
      return (
        <div>
            <Route exact path='/' component={ Usuarios }/>
            <Route exact path='/marco' component={ Usuarios2 }/>
        </div>
    );
    }
  }
 export default App;
