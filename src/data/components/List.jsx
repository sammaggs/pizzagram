import React, { Component } from "react";
import Button from "./Button";

class List extends Component {
    constructor(props) {
        super(props);
        this.relevantOptions = this.relevantOptions.bind(this);
    }

    componentDidMount() {
        this.props.onLoad();
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
        console.log(relevantOptions);
        return (
            <ul>
                { relevantOptions ? (
                    Object.values(relevantOptions).map(item => (
                        <div className="radio">
                            <label>
                            <input type="radio" checked={false}/>
                            {item.ingredient}
                            </label>
                        </div>
                    ))
                ) : <p>No ingredients found. :(</p>
                } 
            </ul>
        )
    }
};

export default List;