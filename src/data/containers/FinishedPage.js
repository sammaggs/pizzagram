import { connect } from "react-redux";
import FinishedPage from '../components/FinishedPage';

const mapStateToProps = (state) => {
    return {
        data: state.data,
        chosenBase: state.pizzaChoices.bases,
        chosenToppings: state.pizzaChoices.toppings,
        chosenSauce: state.pizzaChoices.sauce
    }
}

export default connect(mapStateToProps)(FinishedPage);