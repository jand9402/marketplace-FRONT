import axios from 'axios';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_BRAND = 'GET_BRAND'
export const CATEGORY_FILTERED = 'CATEGORY_FILTERED'
export const BRAND_FILTERED = 'BRAND_FILTERED'
export const LOGIN_ANSWER = 'LOGIN_ANSWER'
export const POST_USER = 'POST_USER'
export const ORDER_BY_PRICE = 'ORDER_BY_PRICE' 
export const POST_PRODUCT = 'POST_PRODUCT'





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
            type: GET_CATEGORIES,
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

export const orderByPrice = (payload) => async dispatch => {
    console.log (payload)
    return fetch( `https://pf-commerce.herokuapp.com/api/products?order=${payload}`)
    .then(respose => respose.json())
    .then(json => dispatch({type: ORDER_BY_PRICE, payload: json}))
}

export function postUser (payload){
    return async function (){
        const response = await axios.post("https://pf-commerce.herokuapp.com/api/users/register",payload)
        return response
    }
}
export function postProduct (payload) {
    return async function (dispatch) {
        const response = await axios.post("https://pf-commerce.herokuapp.com/api/products/post", payload)
        return response
    }
}


export function clearCar () {}

export function postLogin(payload){
    try{
        return async function(dispatch){
            let login = await axios.post( "https://pf-commerce.herokuapp.com/api/users/login", payload)
            if(login.data){
                alert('Iniciaste sesion con exito!')
                return dispatch(
                    {
                        type: LOGIN_ANSWER,
                        payload: login.data
                    })
                }}
    }catch(e) {
        console.log("Error", e.response.data);
    }
}
// const loginUser = createAsyncThunk(
//     "users/login",
//     async ({ email, password }, thunkAPI) => {
//       try {
//         const response = await fetch(
//           "https://pf-commerce.herokuapp.com/api/users/login",
//           {
//             method: "POST",
//             headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               email,
//               password,
//             }),
//           }
//         );
//         let data = await response.json();
//         console.log("response", data);
//         if (response.status === 200) {
//           localStorage.setItem("Authorization", data.token);
//           return data;
//         } else {
//           return thunkAPI.rejectWithValue(data);
//         }
//       } catch (e) {
//         console.log("Error", e.response.data);
//         thunkAPI.rejectWithValue(e.response.data);
//       }
//     })
