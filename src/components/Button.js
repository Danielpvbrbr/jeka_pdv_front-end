import React,{Component} from 'react'

export default class Button extends Component {
    render() {
        return <button onClick={() => {this.props.handleClick(this.props.label)}} >{this.props.label}</button>
    }
}