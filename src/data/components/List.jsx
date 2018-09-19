import React, { Component } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choices : []
        }
        this.relevantOptions = this.relevantOptions.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.props.onLoad();
    }

    onChange(e) {
        console.log("Do something with your onChange");
    }

    relevantOptions(item, option) {
        let isOption = null;
        if ((option === 'sauce') || (option === 'sauces')) {
            isOption = 'isSauce';
        } else if ((option === 'bases') || (option === 'bases')) {
            isOption = 'isBase';
        } else if ((option === 'toppings') || (option === 'topping')) {
            isOption = 'isTopping';
        } else {
            return false;
        }
        return item[isOption];
    }

    render () {
        const { data, option } = this.props;
        const relevantOptions = data.filter(item => this.relevantOptions(item, option));
        return (
            <ul className="list-group">
                <fieldset>
                { relevantOptions.length ? (
                    Object.values(relevantOptions).map((item, index) => (
                        <React.Fragment>
                        <li className="list-group-item" key={index}>
                            <input id={index} name="ingredients" type="checkbox" onChange={ (e) => this.onChange(e) } />
                            <label htmlFor={index} >
                            {item.ingredient}
                            </label>
                        </li>
                        </React.Fragment>
                    ))
                ) : <p>No ingredients found. :(</p>
                }
                </fieldset>
                <Link className="btn btn-primary" to="/options">Back</Link>
                <Link className="btn btn-primary" to="/options/finished/">Save Choices</Link>
            </ul>
        )
    }
};

export default List;