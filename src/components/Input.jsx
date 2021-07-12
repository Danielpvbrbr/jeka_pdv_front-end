import React,{Component} from 'react'
import './Input.css'

export default class Input extends Component {
    render() {
        return <input
        type={this.props.type}
        value={this.props.value}
        name={this.props.name}
        id={this.props.id}
        readOnly={this.props.readOnly}
        disabled={this.props.disabled}
        required={this.props.required}
        placeholder={this.props.placeholder}
        maxLength={this.props.maxLength}
        onChange={this.props.onChange}
        onClick={this.props.onClick}
        autoComplete={this.props.autoComplete}
        className={this.props.className}
        />
    }
}