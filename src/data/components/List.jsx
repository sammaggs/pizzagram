import React, { Component } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import '../../styles/css/List.css';
import '../../styles/css/App.css';
// import axios from "../axios";
import LoadingSpinner  from './LoadingSpinner';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            choices : {
                [this.props.option]: [],
            }
        }
        this.relevantOptions = this.relevantOptions.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount () {
        let { data } = this.props;
        data.length ? 
        this.setState({
            loading: false,
        }) : null;
    };

    handleChange(e) {
        if (e.target.checked) {
            this.setState({
                choices: {
                    ...this.state.choices,
                    [this.props.option]: [
                        ...this.state.choices[this.props.option],
                        e.target.id
                    ]
                }
            })
        } else {
            let newState = {...this.state}
            let changedChoices = newState.choices[this.props.option].filter(item => item !== e.target.id)
            this.setState({
                choices: {
                    ...this.state.choices,
                    [this.props.option]: changedChoices
                }
            })
        }
    }

    handleSave() {
        this.props.onSave(this.state.choices);
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

    componentDidMount() {
        this.props.onLoad();
    }

    render () {
        const { data, option } = this.props;
        const relevantOptions = data.filter(item => this.relevantOptions(item, option));

        let content;

        if (!data) {
            content = <LoadingSpinner />;
          } else { content = 
            <main className="container">
                <h2 className="pizzagram-header-text text-light">{ option.substring(0,1).toUpperCase() + option.substring(1) }</h2>
                <ul className="list-group my-3">
                    <fieldset>
                    { relevantOptions.length ? (
                        Object.values(relevantOptions).map(item => (
                            <li className="list-group-item" key={option + "-" + item.id}>
                                <input id={item.id} name="ingredients" type="checkbox" onChange={ (e) => this.handleChange(e) } />
                                <label htmlFor={item.id}>
                                {item.ingredient}
                                </label>
                            </li>
                        ))
                    ) : <LoadingSpinner />
                    }
                    </fieldset>
                </ul>
                <div className="d-flex justify-content-between pb-5">
                    <div className="back-button-container w-25 mr-2">
                        <Link className="btn btn-primary btn-block" to="/options">&lt; Back</Link>
                    </div>
                    <div className="save-button-container w-75 ml-2">
                        <Button onClick={ this.handleSave } buttonText="Save Choices" colourTheme="success" isBlock={true} />
                    </div>
                </div>
            </main>
          };

        return (
            <div>
                {content}
            </div>
        )
    }
};

export default List;