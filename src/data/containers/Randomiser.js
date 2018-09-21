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
        onLoad: () => console.log("Do something useful with your mapDispatchToProps")
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);