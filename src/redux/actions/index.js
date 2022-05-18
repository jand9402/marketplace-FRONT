export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME'

export const getProducts = () => (dispatch) => {
    return fetch('https://pf-commerce.herokuapp.com/api/products')
    .then((response) => response.json())
    .then((json) => {dispatch({ type: GET_ALL_PRODUCTS, payload:json.product})})
};

export const searchByName = (payload) => async dispatch => {
    console.log (payload)
    return await fetch( `https://pf-commerce.herokuapp.com/api/products/?name=${payload}`)
    .then(respose => respose.json())
    .then(json => dispatch({type: SEARCH_BY_NAME, payload: json}))
    .catch(() => alert (`No se encontró ${payload}, intentelo nuevamente`) )
}
