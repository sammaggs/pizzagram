import React, { Component } from 'react';


class Quantity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: "3"
        };
        this.changeQuantity = this.changeQuantity.bind(this);
    }
    changeQuantity(event) {
        this.setState ({ //this.props.changeQuantity quantity container, call action etc.
            quantity: event.target.value
        });
    }
    render() {
        return (
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
        )
    }
};


export default Quantity;