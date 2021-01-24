import React, { Component } from 'react';
import "../Components/Button.css";
export default class Button extends Component {
    render() {
       
        return (
            <button className="standart-btn">{this.props.text} </button>
        )
    }
}