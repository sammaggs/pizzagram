import React, { Component } from "react";
import Button from "./Button";

class List extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { data } = this.props;
        return (
            <ul>
                { ingredients ? (
                    data.map(item => (
                        <li className="list-group-item" key={item.id}>
                        <p>{ data.item }</p>
                        </li>
                    ))
                ) : <p>No ingredients found. :(</p>
                } 
            </ul>
        )
    }
};

export default List;