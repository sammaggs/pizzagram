import { connect } from "react-redux";
import List from '../components/List';
import { setOption } from '../actions/state';

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = (dispatch, {option}) => {
    return {
        onLoad: () => dispatch(setOption(option)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);