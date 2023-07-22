const initialState = {
    class: 'no-scroll'
}

const scrollReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ScrollCase':
            return {
                ...state, class: state.class = 'scroll'
            }
        case 'NoScrollCase':
            return {
                ...state, class: state.class = 'no-scroll'
            }
        default:
            return state
    }
}
export default scrollReducer;
