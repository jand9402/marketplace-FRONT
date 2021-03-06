import axios from "axios";
import swal from "sweetalert";
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
export const GET_ORDER_DETAIL_ID = "GET_ORDER_DETAIL_ID";

export const GET_WISHLIST = "GET_WISHLIST";

export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const GET_ORDER_BY_ID = "GET_ORDER_BY_ID";

export const GET_USER_BY_ID = "GET_USER_BY_ID";

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
    .then((json) =>
      dispatch({ type: SEARCH_BY_NAME, payload: [json.products, payload] })
    );
  // .catch(() => alert(`No se encontr?? ${payload}, intentelo nuevamente`));
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
      alert("Registro exitoso");
      return response;
    } catch (error) {
      alert("El correo ya se encuentra registrado");
      return error;
    }
  };
}

export function updateUserByAdmin(id, detailData, token) {
  console.log(detailData, id);
  return async function (dispatch) {
    const userMod = await axios.put(
      `https://pf-commerce.herokuapp.com/api/users/update/${id}`,
      detailData,
      {
        headers: {
          authorization: `${token}`,
        },
      }
    );
    console.log(userMod);
    userMod
      ? alert("Producto modificado correctamente")
      : alert("Producto no encontrado");
  };
}

export function getUserById(id) {
  const token = localStorage.getItem("authorization");
  return async function (dispatch) {
    let response = await axios.get(
      `https://pf-commerce.herokuapp.com/api/users/${id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    if (response) {
      return dispatch({
        type: GET_USER_BY_ID,
        payload: response,
      });
    } else {
      alert("No se encontraron usuarios");
    }
  };
}

export function postProduct(payload, token) {
  console.log(payload);
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "https://pf-commerce.herokuapp.com/api/products/post",
        payload,
        {
          headers: {
            authorization: `${token}`,
          },
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}
export function postRewies(id, payload, token) {
  console.log(payload);
  // const token = localStorage.getItem("authorization");
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `https://pf-commerce.herokuapp.com/api/products/reviews/${id}`,
        payload,
        {
          headers: {
            authorization: `${token}`,
          },
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteProduct(payload) {
  const token = localStorage.getItem("authorization");
  return async function (dispatch) {
    const deleteProduct = await axios.delete(
      `https://pf-commerce.herokuapp.com/api/products/delete/${payload}`,
      {
        headers: {
          authorization: `${token}`,
        },
      }
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
        alert("Sesi??n iniciada con exito!");
        return dispatch({
          type: LOGIN_ANSWER,
          payload: login.data,
        });
      }
    };
    // eslint-disable-next-line no-unreachable
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

// export function modifyProduct(id, detailData, token) {
//   return async function (dispatch) {
//     const productMod = await axios.put(
//       `https://pf-commerce.herokuapp.com/api/products/update/${id}`,
//       detailData,
//       {
//         headers: {
//           authorization: `${token}`,
//         },
//       }
//     );
//     productMod
//       ? alert("Producto modificado correctamente")
//       : alert("Producto no encontrado");
//   };
// }

export function orders(payload) {
  return {
    type: ORDERS,
    payload: payload,
  };
}

//// ORDERS

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
    console.log(ordersByUser)
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

export function getOrderDetailById(payload) {
  const token = localStorage.getItem("authorization");
  return async function (dispatch) {
    let ordersByUser = await axios.get(
      `https://pf-commerce.herokuapp.com/api/orders/${payload}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    if (ordersByUser) {
      return dispatch({
        type: GET_ORDER_DETAIL_ID,
        payload: ordersByUser,
      });
    } else {
      alert("No se encontraron ordenes");
    }
  };
}

export function postWishList(payload) {
  const token = localStorage.getItem("authorization");
  return async function () {
    try {
      const response = await axios.post(
        `https://pf-commerce.herokuapp.com/api/wishlist/add/${payload}`,
        payload,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      swal({
        position: "top-end",
        icon: "success",
        title: "Producto agregado",
        showConfirmButton: false,
        timer: 1000,
      });
      console.log(response);
      return response;
    } catch (error) {
      alert("Este producto ya esta en la wishlist");
      console.log(error);
    }
  };
}

export function deleteWishList(payload) {
  const token = localStorage.getItem("authorization");
  return async function () {
    try {
      const response = await axios.delete(
        `https://pf-commerce.herokuapp.com/api/wishlist/delete/${payload}`,

        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      swal({
        position: "top-end",
        icon: "success",
        title: "Producto eliminado",
        showConfirmButton: false,
        timer: 500,
      });
      window.location.reload();
      console.log(response);
      return response;
    } catch (error) {
      alert("Error");
      console.log(error);
    }
  };
}

export function getWishList() {
  const token = localStorage.getItem("authorization");
  return async function (dispatch) {
    const response = await axios.get(
      "https://pf-commerce.herokuapp.com/api/wishlist/user",
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    console.log(response.data);
    return dispatch({
      type: GET_WISHLIST,
      payload: response.data.wishlist[0].product,
    });
  };
}

// export function getWishList () {
//   const token = localStorage.getItem("authorization");
//   return async function (dispatch) {
//     const response = await axios.get('https://pf-commerce.herokuapp.com/api/wishlist/all',
//     {
//       headers: {
//         Authorization: `${token}`,
//       },
//     })
//     console.log(response.data)
//     return dispatch({
//       type: GET_WISHLIST,
//       payload: response.data
//     })
//   }
// }
// export function modifyProduct(id, detailData ,token){
//     return async function (dispatch){
//       const productMod = await axios.put(`https://pf-commerce.herokuapp.com/api/products/update/${id}`, detailData,{
//         headers:{
//           'authorization': `${token}`
//         }
//     })
//     productMod? alert('Producto modificado correctamente') : alert('Producto no encontrado')
//   }
//   }

export function getOrderByID(id) {
  const token = localStorage.getItem("authorization");
  return async function (dispatch) {
    let ordersByUser = await axios.get(
      `https://pf-commerce.herokuapp.com/api/orders/${id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    if (ordersByUser) {
      return dispatch({
        type: GET_ORDER_BY_ID,
        payload: ordersByUser,
      });
    } else {
      alert("No se encontr?? la orden por id");
    }
  };
}

export function modifyProduct(id, detailData, token) {
  console.log(detailData, id);
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
    console.log(productMod);
    productMod
      ? alert("Producto modificado correctamente")
      : alert("Producto no encontrado");
  };
}

// export function loginGoogle ()

export function getAllOrders() {
  const token = localStorage.getItem("authorization");
  return async function (dispatch) {
    let allOrders = await axios.get(
      `https://pf-commerce.herokuapp.com/api/orders/`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
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

// export function setOrderShipped(id) {
//   const token = localStorage.getItem("authorization");
//   console.log(token);
//   return async function () {
//     try {
//       const response = await axios.put(
//         `http://localhost:3001/api/orders/${id}/`,
//         {
//           headers: {
//             Authorization: `${token}`,
//           },
//         }
//       );
//       return response;
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
