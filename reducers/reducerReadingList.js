const reducerReadingList = (state, action) => {

    const addBook = (state, {id, title, author}) => {
        return [
            ...state,
            {id, title, author}
        ]
    };

    const removeBook = (state, {id}) => {

        console.log(state, id);
        return state.filter(book => book.id !== id);
    };

    const setList = (state, value) => {
        console.log('Reducer: Set books');
        return value;
    };

    const actions = {addBook, removeBook, setList};

    return actions[action.type](state, action.value) || throw new Error(`Invalid action type: ${action.type}`);
}

export default reducerReadingList;