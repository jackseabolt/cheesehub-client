import {SERVER_URL} from '../config'; 

export const fetchCheeses = () => (dispatch) => (
    fetch(SERVER_URL)
        .then(res => res.json())
        .then(cheeses => {
            dispatch(fetchCheeses(cheeses)); 
            dispatch(fetchCheesesRequest(cheeses)); 
            dispatch(fetchCheesesSuccess(cheeses)); 
        })
        .catch(err => dispatch(fetchCheesesError(err)))
    )
   