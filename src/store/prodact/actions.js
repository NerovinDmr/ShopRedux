import axios from "axios";

export const prodactActionTypes = {
    GET_PRODACT: 'PRODACT.GET_PRODACT',
    SET_LOADING: 'PRODACT.SET_LOADING',
    SET_CURRENT_PAGE: "SET_CURRENT_PAGE"
}
export const prodactAction = {
    getProdact: (prodact) => ({ type: prodactActionTypes.GET_PRODACT, payload: prodact }),
    setLoading: (loading) => ({ type: prodactActionTypes.SET_LOADING, payload: loading }),
    setCurrentPage: (page) => ({ type: prodactActionTypes.SET_CURRENT_PAGE, payload: page }),
    fatchProdact: () => (dispatch) => {
        dispatch(prodactAction.setLoading(false))
        try {
            axios.get('/catalog.json')
                .then(({ data }) => {
                    dispatch(prodactAction.getProdact(data))
                    dispatch(prodactAction.setLoading(true))
                })
        }
        catch (error) {
            console.log(error)
        } finally {
            dispatch(prodactAction.setLoading(false));
        }
    }
}
