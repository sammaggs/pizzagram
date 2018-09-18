import { connect } from "react-redux";
import List from '../components/List';

const mapStateToProps = (state, {option}) => {
    return {
        data: state.data,
        option: option
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => console.log("data")
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);