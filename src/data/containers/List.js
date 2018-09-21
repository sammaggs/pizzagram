import { connect } from "react-redux";
import List from '../components/List';
import { setChoices } from '../actions/state';
import { getIngredients } from '../actions/api';

const mapStateToProps = (state, {option}) => {
    return {
        data: state.data,
        currentChoices: state.pizzaChoices,
        option: option
    }
}

const mapDispatchToProps = (dispatch, {choices}) => {
    return {
        onSave: (choices) => dispatch(setChoices(choices)),
        onLoad: () => dispatch(getIngredients()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);