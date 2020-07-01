import React from 'react';
import './App.css';
//import  List  from './List/List';
// import { withRouter } from 'react-router-dom';
// import { compose } from 'redux'
import { Provider } from 'react-redux'
import store from '../src/BLL/redux-store'
import ListContainer from './List/ListContainer';


function App(props) {

  return (<>
    <div className="App">

        <Provider store={store}>
        <header className="App-header">
          <ListContainer />
        </header>
      </Provider>

    </div >
    </>
  )
}

export default App;
