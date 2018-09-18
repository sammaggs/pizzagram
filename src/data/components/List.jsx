import React, { Component } from "react";
import Button from "./Button";

class List extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onLoad();
    }

    relevantOptions(option) {
        if (option = "bases") {
            
        }
    }

    render () {
        const { data, option } = this.props;
        const relevantOptions = data.ingredients.filter(item => item.is)
        return (
            <ul>
                { data ? (
                    data.ingredients.map(item => (
                        <li className="list-group-item" key={item.id}>
                        <p>{ item.ingredient }</p>
                        </li>
                    ))
                ) : <p>No ingredients found. :(</p>
                } 
            </ul>
        )
    }
};

export default List;