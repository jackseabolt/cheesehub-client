import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CheeseList from './components/cheese-list'; 
import registerServiceWorker from './registerServiceWorker';
import store from './store'; // store references reducer, actions, and thunk
import { Provider } from 'react-redux'; 

ReactDOM.render( // Wrapping root element in Provider, passes store to all sub-elements
    <Provider store={store}>
        <CheeseList />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
