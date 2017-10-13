import React from 'react'; 
import { connect } from 'react-redux'; 

export default class CheeseList extends React.Component {
    constructor(props){ 
        super(props); 
    }
    
    render(){
        return (
            <ul>
                {this.props.cheeses.map(cheese => (
                    <li>{cheese}</li>
                ))}
            </ul>
        )
    }

}

// const mapStateToProps = state => ({
//     cheeses: state.cheeses
// })

// export default connect(mapStateToProps)(CheeseList) 
