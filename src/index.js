import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CheeseList from './components/cheese-list'; 
import registerServiceWorker from './registerServiceWorker';

const cheeseProp = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
]; 

ReactDOM.render(<CheeseList cheeses={cheeseProp}/>, document.getElementById('root'));
registerServiceWorker();
