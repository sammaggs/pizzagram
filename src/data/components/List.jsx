import React, { Component } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import LoadingSpinner  from './LoadingSpinner';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            modified: false,
            choices: {
                [this.props.option]: [
                    ...this.props.currentChoices[this.props.option]
                ]
            }
        }
        this.relevantOptions = this.relevantOptions.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleItemSelect = this.handleItemSelect.bind(this);
    }

    componentDidMount () {
        let { data } = this.props;
        data.length ? 
        this.setState({
            loading: false,
        }) : null;
    };

    handleSave() {
        this.props.onSave(this.state.choices);
        this.setState({modified: false})
    }

    handleItemSelect(e) {
        if (this.state.choices[this.props.option].indexOf(e.currentTarget.id) !== -1) {
            let newState = {...this.state}
            let changedChoices = newState.choices[this.props.option].filter(item => item !== e.currentTarget.id)
            this.setState({
                modified: true,
                choices: {
                    ...this.state.choices,
                    [this.props.option]: [
                        ...changedChoices
                    ]
                }
            })
        } else {
            this.setState({
                modified: true,
                choices: {
                    ...this.state.choices,
                    [this.props.option]: [
                        ...this.state.choices[this.props.option],
                        e.currentTarget.id
                    ]
                }
            })
        }
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
            <main className="container text-light">
                <h2 className="pizzagram-header-text">{ option.substring(0,1).toUpperCase() + option.substring(1) }</h2>
                <div className="list-group list-group-flush my-3">
                    <div>
                    { relevantOptions.length ? (
                        Object.values(relevantOptions).map(item => { return (
                            <button className={"list-group-item list-group-item-action d-flex align-items-baseline text-light" + (this.state.choices[this.props.option].indexOf(item.id.toString()) !== -1 ? " active clicked" : "")} key={option + "-" + item.id} id={item.id} onClick={ (e) => this.handleItemSelect(e) }>
                                <div><p className="lead px-1">{item.ingredient}</p></div>
                                <div>
                                    <small className="px-3">{ item.description }</small>
                                </div>
                            </button>
                        )})
                    ) : <LoadingSpinner />
                    }
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="back-button-container w-25 mr-2">
                        <Link className="btn btn-primary btn-block" to="/options">&lt; Back</Link>
                    </div>
                    <div className="save-button-container w-75 ml-2">
                        <Button onClick={ this.handleSave } buttonText="Save Choices" colourTheme="success" isBlock={true} isDisabled={ !this.state.modified } />
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