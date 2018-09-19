// for (let i = 0, isBase = false, i += random) {

// }


import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Randomiser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: "3"
        };
        this.changeQuantity = this.changeQuantity.bind(this);
        this.spinThatWheel = this.spinThatWheel.bind(this); 
    }
    changeQuantity(event) {
        this.setState ({
            quantity: event.target.value
        });
    }
    spinThatWheel() {

    }
    render() {
        const buttonStyle = {
            display: 'flex',
            justifyContent: "center",
            margin: 10
          }
        return(
            <Fragment>
                <Link onclick={ spinThatWheel } style={buttonStyle} className="btn btn-primary" to="/options">
                    I'm Feeling Lucky 🍀
                </Link>
                <div>
                How many toppings?!
                <br />
                <select onChange={ this.changeQuantity } defaultValue={ this.state.quantity }>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            </Fragment>
        )
    };
}


export default Randomiser;