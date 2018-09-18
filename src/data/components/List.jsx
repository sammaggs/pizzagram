import React, { Component } from "react";
import Button from "./Button";

class List extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.props.onLoad();
    // }

    render () {
        const { ingredients, base } = this.props;

        return (
            <ul>
                { base ? (
                    Object.values(ingredients).map(item => (
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