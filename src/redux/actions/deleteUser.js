const deleteUser = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}

export default deleteUser;