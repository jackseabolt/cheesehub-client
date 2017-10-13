const initialState = {
    cheeses: [],
    loading: false,
    error: null
}; 


export default function cheeseReducer(state=initalState, action) {
    if(action.type == 'FETCH_CHEESE_REQUEST'){

    }
    if(action.type == 'FETCH_CHEESE_SUCCESS'){
        
    }
    if(action.type == 'FETCH_CHEESE_ERROR'){
        
    }
    return state; 
}