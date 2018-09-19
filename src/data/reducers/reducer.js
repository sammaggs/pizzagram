const setPizzaChoices = (state, choices) => {
    let newState = {
        ...state,
        pizzaChoices: {
            ...newState.pizzaChoices
        }
    };
    console.log(newState);
    return newState;
    
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'setChoices': return setPizzaChoices(state, action.choices);
        default: return state;
    }
};

export default reducer;
