import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORIES_NEW = "GET_CATEGORIES_NEW";
export const GET_BRAND = "GET_BRAND";
export const CATEGORY_FILTERED = "CATEGORY_FILTERED";
export const BRAND_FILTERED = "BRAND_FILTERED";
export const LOGIN_ANSWER = "LOGIN_ANSWER";
export const POST_USER = "POST_USER";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const POST_PRODUCT = "POST_PRODUCT";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const NAV_BAR_NEW = "NAV_BAR_NEW";
export const DETAIL_DELETE = "DETAIL_DELETE";
export const GET_DETAIL = "GET_DETAIL";
export const GET_USERS = "GET_USERS";
export const ORDERS = "ORDERS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const POST_ORDER = "POST_ORDER";
export const GET_ORDER_DETAIL_USER = "GET_ORDER_DETAIL_USER";
export const GET_ALL_ORDERS = "GET_ALL_ORDERS";

export const getProducts = () => async (dispatch) => {
  return await fetch("https://pf-commerce.herokuapp.com/api/products")
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: GET_ALL_PRODUCTS, payload: json.products });
    });
};

export const getCountries = () => async (dispatch) => {
  return await fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: GET_ALL_COUNTRIES, payload: json });
    });
};

export const getDetail = (payload) => async (dispatch) => {
  return await fetch(
    `https://pf-commerce.herokuapp.com/api/products/detail/${payload}`
  )
    .then((respose) => respose.json())
    .then((json) => dispatch({ type: GET_DETAIL, payload: json.product }))
    .catch((e) => console.log(e));
};

export function getCategorys() {
  return async (dispatch) => {
    let json = await axios.get(
      "https://pf-commerce.herokuapp.com/api/products"
    );
    let categorys = await json.data.products?.map((c) => c.model);
    let categoria = [...new Set(categorys)];
    // console.log(categoria)
    return dispatch({
      type: GET_CATEGORIES,
      payload: categoria,
    });
  };
}

export function getCategories() {
  return async (dispatch) => {
    let json = await axios.get(
      "https://pf-commerce.herokuapp.com/api/products"
    );
    let categories = await json.data.products?.map((c) => c.categories);
    let categoria = [...new Set(categories)];
    return dispatch({
      type: GET_CATEGORIES_NEW,
      payload: categoria,
    });
  };
}

export function getBrand() {
  return async (dispatch) => {
    let json = await axios.get(
      "https://pf-commerce.herokuapp.com/api/products"
    );
    let brand = await json.data.products?.map((c) => c.brand);
    let marca = [...new Set(brand)];
    // console.log(marca)
    return dispatch({
      type: GET_BRAND,
      payload: marca,
    });
  };
}

export function categoryFiltered(payload) {
  return {
    type: CATEGORY_FILTERED,
    payload,
  };
}

export function brandFiltered(payload) {
  return {
    type: BRAND_FILTERED,
    payload,
  };
}

export const searchByName = (payload) => async (dispatch) => {
  console.log(payload);
  return fetch(`https://pf-commerce.herokuapp.com/api/products?name=${payload}`)
    .then((respose) => respose.json())
    .then((json) => dispatch({ type: SEARCH_BY_NAME, payload: json.products }))
    .catch(() => alert(`No se encontró ${payload}, intentelo nuevamente`));
};

// export const orderByPrice = (payload) => async dispatch => {
//     // console.log (payload)
//     return fetch( `https://pf-commerce.herokuapp.com/api/products?order=${payload}`)
//     .then(respose => respose.json())
//     .then(json => dispatch({type: ORDER_BY_PRICE, payload: json}))
// }

// export function orderByPrice(payload) {
//     return {
//         type: ORDER_BY_PRICE,
//         payload
//     }
// }

export function postUser(payload) {
  return async function () {
    try {
      const response = await axios.post(
        "https://pf-commerce.herokuapp.com/api/users/register",
        payload
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}
export function postProduct(payload) {
  console.log(payload);
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "https://pf-commerce.herokuapp.com/api/products/post",
        payload
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteProduct(payload) {
  return async function (dispatch) {
    const deleteProduct = await axios.delete(
      `https://pf-commerce.herokuapp.com/api/products/delete/${payload} `
    );
    return dispatch({ type: DELETE_PRODUCT, payload: deleteProduct });
  };
}

export function locaLSatorage() {
  let productsInLocalStorage = localStorage.getItem("itemCar");
  productsInLocalStorage = JSON.parse(productsInLocalStorage);
  console.log(productsInLocalStorage);
  return productsInLocalStorage;
}

export function postLogin(payload) {
  try {
    return async function (dispatch) {
      let login = await axios.post(
        "https://pf-commerce.herokuapp.com/api/users/login",
        payload
      );
      //   localStorage.setItem("authorization", login.data.token);
      console.log(login);
      if (login.data) {
        alert("Sesión iniciada con exito!");
        return dispatch({
          type: LOGIN_ANSWER,
          payload: login.data,
        });
      }
    };
  } catch (e) {
    console.log("Error", e.response.data);
  }
}

export function navBarNew(payload) {
  return {
    type: NAV_BAR_NEW,
    payload,
  };
}
export const deletepreviousdetail = () => {
  return {
    type: DETAIL_DELETE,
  };
};

export function getUsers(token) {
  console.log(token);
  return async function (dispatch) {
    let allusers = await axios.get(
      `https://pf-commerce.herokuapp.com/api/users/`,
      {
        headers: {
          authorization: `${token}`,
        },
      }
    );
    if (allusers) {
      return dispatch({
        type: "GET_USERS",
        payload: allusers.data,
      });
    } else {
      alert("No se encontraron usuarios");
    }
  };
}

export function orders(payload) {
  return {
    type: ORDERS,
    payload: payload,
  };
}

export function postOrder(payload) {
  const token = localStorage.getItem("authorization");
  return async function () {
    try {
      const response = await axios.post(
        "https://pf-commerce.herokuapp.com/api/orders/create",
        payload,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function getOrderDetailByUser() {
  const token = localStorage.getItem("authorization");
  return async function (dispatch) {
    let ordersByUser = await axios.get(
      `https://pf-commerce.herokuapp.com/api/orders/user/`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    if (ordersByUser) {
      return dispatch({
        type: GET_ORDER_DETAIL_USER,
        payload: ordersByUser,
      });
    } else {
      alert("No se encontraron ordenes");
    }
  };
}

export function modifyProduct(id, detailData, token) {
  return async function (dispatch) {
    const productMod = await axios.put(
      `https://pf-commerce.herokuapp.com/api/products/update/${id}`,
      detailData,
      {
        headers: {
          authorization: `${token}`,
        },
      }
    );
    productMod
      ? alert("Producto modificado correctamente")
      : alert("Producto no encontrado");
  };
}

export function getAllOrders() {
  const token = localStorage.getItem("authorization");
  return async function (dispatch) {
    let allOrders = await axios.get(`http://localhost:3001/api/orders/`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    if (allOrders) {
      return dispatch({
        type: GET_ALL_ORDERS,
        payload: allOrders,
      });
    } else {
      alert("No se encontraron todas las ordenes");
    }
  };
}
