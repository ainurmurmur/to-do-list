import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { compose } from 'redux';
import  ListReducer  from './ListReducer';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({

    toDoList: ListReducer,
    form:formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));



window.store =store;
export default store;

// form:formReducer,