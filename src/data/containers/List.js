import { connect } from "react-redux";
import List from '../components/List';
import { setOption } from '../actions/state';

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(setOption()),
    };
};  

const enhancer = connect(mapStateToProps, mapDispatchToProps);
export default enhancer(List);