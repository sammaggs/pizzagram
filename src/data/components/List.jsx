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
        const { ingredients, listType } = this.props;

        return (
            <ul>
                { ingredients ? (
                    Object.values(ingredients).map(item => (
                        item[listType] ? (
                            <div className="radio">
                                <label>
                                <input type="radio" checked={false}/>
                                {item.ingredient}
                                </label>
                            </div>
                        ) : null
                    ))
                ) : <p>No ingredients found. :(</p>
                } 
            </ul>
        )
    }
};

export default List;