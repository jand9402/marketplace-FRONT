import axios from 'axios';

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME'
export const GET_CATEGORYS = 'GET_CATEGORYS'
export const GET_BRAND = 'GET_BRAND'
export const CATEGORY_FILTERED = 'CATEGORY_FILTERED'
export const BRAND_FILTERED = 'BRAND_FILTERED'


export const getProducts = () => async dispatch => {
    return await fetch('https://pf-commerce.herokuapp.com/api/products')
    .then((response) => response.json())
    .then((json) => {dispatch({ type: GET_ALL_PRODUCTS, payload:json.product})})
};

export function getCategorys() {
    return async (dispatch) => {
        let json = await axios.get('https://pf-commerce.herokuapp.com/api/products');
        let categorys = await json.data.product?.map((c) => c.category);
        let categoria = [...new Set(categorys)];
        // console.log(categoria)
        return dispatch({
            type: GET_CATEGORYS,
            payload: categoria
        })
    }
}

export function getBrand() {
    return async (dispatch) => {
        let json = await axios.get('https://pf-commerce.herokuapp.com/api/products');
        let brand = await json.data.product?.map((c) => c.brand);
        let marca = [...new Set(brand)];
        // console.log(marca)
        return dispatch({
            type: GET_BRAND,
            payload: marca
        })
    }
}

// export const categoryFiltered = (orden) => async dispatch => {
//     return await fetch(`https://pf-commerce.herokuapp.com/api/products?filter=${orden}`)
//     .then(respose => respose.json())
//     .then (json => dispatch ({type: CATEGORY_FILTERED, payload: json.products}))
//     .catch(e=> console.log(e)) 
// }

export function categoryFiltered(payload) {
    return {
        type: CATEGORY_FILTERED,
        payload
    }
}

export function brandFiltered(payload) {
    return {
        type: BRAND_FILTERED,
        payload
    }
}

export const searchByName = (payload) => async dispatch => {
    console.log (payload)
    return fetch( `https://pf-commerce.herokuapp.com/api/products?name=${payload}`)
    .then(respose => respose.json())
    .then(json => dispatch({type: SEARCH_BY_NAME, payload: json.products}))
    .catch(() => alert (`No se encontró ${payload}, intentelo nuevamente`) )
}

// export function searchByName(name) {
//     return async function (dispatch) {
//         try{
//         let response = await axios(`https://pf-commerce.herokuapp.com/api/products?name=${name}`)
//         return dispatch({
//             type: SEARCH_BY_NAME,
//             payload: response.data
//         })
//         }catch (e){
//             console.log(e)
//         }
//     }
// }
