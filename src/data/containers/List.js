import { connect } from "react-redux";
import List from '../components/List';
import { setOption } from '../actions/state';

// const mapStateToProps = (state, {option}) => {
//     return {
//         data: state.data,
//         option: option
//     }

const mapStateToProps = state => {
    console.log(state.data)
    return {
        ingredients: state.ingredients,
        }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onLoad: () => console.log(data)
//     };
// };

const enhancer = connect(mapStateToProps, null);
export default enhancer(List);