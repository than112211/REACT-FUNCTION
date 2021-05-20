export const FilterPagination = (page) => {
    return {
        type: 'PAGINATION',
        payload:page
    }
}
export const NextPage = () => {
    return {
        type: 'NEXT_PAGE',
    }
}
export const PrePage = () => {
    return {
        type: 'PRE_PAGE',
    }
}
export const ResetPage = () => {
    return {
        type: 'RESET_PAGE',
    }
}




