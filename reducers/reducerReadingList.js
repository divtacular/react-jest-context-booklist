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

    const updateBook = (state, {id, title, author}) => {
        return state.map((book) => {
            return book.id === id ? {id, title, author} : book;
        });
    };

    const actions = {addBook, removeBook, updateBook, setBooks};
    return actions[action.type](state, action.value) || throw new Error(`Invalid action type: ${action.type}`);
}

export default reducerReadingList;