const userReducer = (state = null, action) => {
    switch(action.type){
        case 'GET': return action.payload;
        case 'DELETE': return state.filter(user => user.id !== action.payload);
        default: return state;
    }
}

export default userReducer;