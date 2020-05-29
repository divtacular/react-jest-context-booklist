const reducerReadingList = (state, action) => {

    const addBook = (state, {id, title, author}) => {
        return [
            ...state,
            {id, title, author}
        ]
    };

    const removeBook = (state, {id}) => {
        return state.filter(book => book.id !== id);
    };

    const setBooks = (state, value) => {
        return [
            ...value
        ];
    };

    const actions = {addBook, removeBook, setBooks};
    return actions[action.type](state, action.value) || throw new Error(`Invalid action type: ${action.type}`);
}

export default reducerReadingList;