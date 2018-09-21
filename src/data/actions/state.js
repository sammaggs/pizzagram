export const setChoices = choices => {
    return {
        type: 'setChoices',
        choices: choices,
    }
}

export const setIngredients = data => {
    return {
        type: 'setIngredients',
        data: data
    }
}