import { connect } from "react-redux";
import List from '../components/List';
import { setOption } from '../actions/state';

const mapStateToProps = (state, {option}) => {
    return {
        data: state.data,
        option: option
    }
}

const mapDispatchToProps = (dispatch, {option}) => {
    return {
        onLoad: () => dispatch(setOption(option)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);