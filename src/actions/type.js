export const AddType = (id) => {
    return {
        type: 'ADD_TYPE',
        payload:id
    }
}
export const RemoveType = (id) => {
    return {
        type: 'REMOVE_TYPE',
        payload:id
    }
}
export const ClearType = () => {
    return {
        type: 'CLEARTYPE',
    }
}

