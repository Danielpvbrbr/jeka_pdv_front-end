import React, {Component} from 'react'

export default class Mylabel extends Component {
    render(){
        return(
            <div>
                <p>{this.props.sdds} {this.props.name}</p>
                <p>Clicou no {this.props.text}</p>  
            </div>
        )
    }
}