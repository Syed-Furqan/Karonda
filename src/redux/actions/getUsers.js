const getUsers = (users) => {
    return {
        type: 'GET',
        payload: users
    }
}

export default getUsers;