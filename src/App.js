import React, { Component } from 'react'

class MyButton extends Component {
    render() {
        return <button onClick={() => {this.props.handleClick(this.props.label)}} >{this.props.label}</button>
    }
}

class MyLabel extends Component {

    render() {
        return <p>Clicou no {this.props.text}</p>

    }
}

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            labelText: '',
        }
    }

    setLabelTest = (labelText) => {
        this.setState({ labelText }, () => {

        });
    }
    render() {
        return (
            <div>
                <MyLabel text={this.state.labelText} />
                <MyButton handleClick={this.setLabelTest} label="Botão 1" />
                <MyButton handleClick={this.setLabelTest} label="Botão 2" />
                <MyButton handleClick={this.setLabelTest} label="Botão 3" />
                <MyButton handleClick={this.setLabelTest} label="Botão 4" />
            </div>
        )
    }
}

