import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from "./Button";


class FinishedPage extends Component {
  constructor(props) {
    super(props);
    this.handleShare = this.handleShare.bind(this);
  }

  handleShare() {

  }

  render() {
    const { data, chosenBase, chosenSauce, chosenToppings } = this.props;
    const inputStyling = {
      marginTop: 20,
    }

    return (
      <main className="container text-light">
        <header className="mb-4">
          <h1 className="pizzagram-header-text">
            Your Pizza
          </h1>
          <p className="lead">We're not judging...</p>
        </header>
        <section className="my-3">
          <h2 className="pizzagram-header-text">Base</h2>
          { Object.keys(chosenBase).length ?
            <ul className="list-group list-group-flush">
              { chosenBase.map((item, index) => {
                return (
                  <li className="list-group-item" key={ "base-" + index }>{ data.filter(ingredient => ingredient.id === +item).map(object => object.ingredient) }</li>
                )
              }) }
            </ul> : <p className="text-primary">You haven't chosen a pizza base.</p>
          }
        </section>
        <section className="my-3">
          <h2 className="pizzagram-header-text">Sauce</h2>
          { Object.keys(chosenSauce).length !== 0 ?
            <ul className="list-group list-group-flush">
              { chosenSauce.map((item, index) => {
                return (
                  <li className="list-group-item" key={ "sauce-" + index }>{ data.filter(ingredient => ingredient.id === +item).map(object => object.ingredient) }</li>
                )
              }) }
            </ul> : <p className="text-primary">You haven't chosen a sauce for your pizza.</p>
          }
        </section>
        <section className="my-3">
          <h2 className="pizzagram-header-text">Toppings</h2>
          { Object.keys(chosenToppings).length !== 0 ?
            <ul className="list-group list-group-flush">
              { chosenToppings.map((item, index) => {
                return (
                  <li className="list-group-item" key={ "topping-" + index }>{ data.filter(ingredient => ingredient.id === +item).map(object => object.ingredient) }</li>
                )
              }) }
            </ul> : <p className="text-primary">You haven't chosen any toppings for your pizza.</p>
          }
        </section>
        <section className="button-container d-flex justify-content-between my-4">
          <div className="back-button-container w-25 mr-2">
              <Link className="btn btn-primary btn-block" to="/options">&lt; Back</Link>
          </div>
          <div className="save-button-container w-75 ml-2">
              <Button onClick={ this.handleShare } buttonText="Share Your Pizza" colourTheme="success" isBlock={true} />
          </div>
        </section>
        {/* <section style={inputStyling}>
          <input name="email" type="email" />
          <input name="submit" type="submit" />
        </section> */}
      </main>
    );
  }
}

export default FinishedPage;
  