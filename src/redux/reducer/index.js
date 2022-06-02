import {
  GET_ALL_PRODUCTS,
  GET_ALL_COUNTRIES,
  SEARCH_BY_NAME,
  GET_CATEGORIES,
  GET_BRAND,
  CATEGORY_FILTERED,
  BRAND_FILTERED,
  POST_USER,
  //  ORDER_BY_PRICE,
  LOGIN_ANSWER,
  POST_PRODUCT,
  DETAIL_DELETE,
  GET_DETAIL,
  ORDERS,
  // NAV_BAR_NEW,
  GET_USERS,
  POST_ORDER,
  GET_ORDER_DETAIL_USER,
  GET_WISHLIST,
  GET_CATEGORIES_NEW,
  DELETE_PRODUCT,
  GET_ALL_ORDERS,
  GET_ORDER_BY_ID,
} from "../actions";

const initialState = {
  // loading: false,
  products: [],
  allProducts: [],
  allProducts2: [],
  detail: [],
  categorys: [],
  categoriesNew: [],
  brand: [],
  // login: false,
  createProduct: {},
  car: [],
  token: "",
  userData: localStorage.getItem("userData")
    ? localStorage.getItem("userData")
    : null,
  navBarNew: [],
  users: [],
  countries: [],
  cart: [],
  orderDetail: [],
  order: [],
  allWishlist: [],

  allOrders: [],
  orderById: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        allProducts2: action.payload,
      };
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case SEARCH_BY_NAME:
      console.log(action.payload);
      let nombre = action.payload[1];
      function error(payload) {
        console.log(payload);
        if (payload.length < 2) {
          alert("No se encontró " + nombre + ", intentelo nuevamente");
        }
      }
      error(action.payload[0]);
      function estado(productos) {
        if (productos.length < 2) {
          return state.products;
        } else {
          return action.payload[0];
        }
      }
      let estadoActual = estado(action.payload[0]);
      return {
        ...state,
        products: estadoActual,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categorys: action.payload,
      };
    case GET_CATEGORIES_NEW:
      return {
        ...state,
        categoriesNew: action.payload,
      };
    case GET_BRAND:
      return {
        ...state,
        brand: action.payload,
      };

    case CATEGORY_FILTERED:
      let allProducts = state.allProducts;
      // allProducts.sort
      const categoryFiltered =
        action.payload === "all"
          ? allProducts
          : allProducts
              .sort((a, b) => {
                if (a.price > b.price) return 1;
                if (b.price > a.price) return -1;
                return 0;
              })
              .filter((e) => e.model === action.payload);
      return {
        ...state,
        products: categoryFiltered,
        // allProducts: categoryFiltered
      };
    case BRAND_FILTERED:
      const brandProducts = state.allProducts;
      const brandFiltered =
        action.payload === "all"
          ? brandProducts
          : brandProducts
              .sort((a, b) => {
                if (a.price > b.price) return 1;
                if (b.price > a.price) return -1;
                return 0;
              })
              .filter((e) => e.brand === action.payload);
      return {
        ...state,
        products: brandFiltered,
      };
    case DETAIL_DELETE:
      return {
        ...state,
        detail: [],
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case POST_USER:
      return {
        ...state,
      };
    case LOGIN_ANSWER:
      localStorage.setItem("authorization", action.payload.token);
      localStorage.setItem("userData", JSON.stringify(action.payload.rest));
      return {
        ...state,
        token: action.payload,
      };
    case POST_PRODUCT:
      return {
        ...state,
      };

    case ORDERS:
      return {
        ...state,
        cart: action.payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
      };
    case POST_ORDER:
      return {
        ...state,
        order: action.payload,
      };

    case GET_ORDER_DETAIL_USER:
      return {
        ...state,
        orderDetail: action.payload,
      };

      case GET_WISHLIST:
        return {
          ...state,
          allWishlist: action.payload
        }

    case GET_ALL_ORDERS:
      return {
        ...state,
        allOrders: action.payload,
      };
    case GET_ORDER_BY_ID:
      return {
        ...state,
        orderById: action.payload,
      };


    default:
      return { ...state };
  }
}
