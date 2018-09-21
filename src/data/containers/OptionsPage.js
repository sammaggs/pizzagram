import { connect } from "react-redux";
import OptionsPage from "../components/OptionsPage";

const mapStateToProps = (state) => {
    return {
        data: state.data,
        currentChoices: state.pizzaChoices
    }
}

export default connect(mapStateToProps)(OptionsPage);