const setPizzaOption = (state, viewOption) => {
    return {
        ...state,
        option: viewOption
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'setOption': return setPizzaOption(state, action.option);
        default: return state;
    }
};

export default reducer;