
import { GET_ALL_PRODUCTS,
         SEARCH_BY_NAME,
         GET_CATEGORIES,
         GET_BRAND,
         CATEGORY_FILTERED,
         BRAND_FILTERED,
         POST_USER,
         ORDER_BY_PRICE,
         LOGIN_ANSWER,
         POST_PRODUCT
        } from "../actions";
import { ADD_TO_CAR } from "../../comoponents/Cards/card";


const initialState = {
  // loading: false,
  products: [],
  allProducts: [],
  categorys: [],
  brand: [],
  // login: false,
  createProduct: {},
  car: [],
  token: "",
}
          
export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return{

        ...state,
        products: action.payload,
        allProducts: action.payload
      }
    case SEARCH_BY_NAME:

      return{
        ...state,
        products: action.payload
      }
    case GET_CATEGORIES:

      return {
        ...state,
        categorys: action.payload
      }
    case GET_BRAND:
      return {
        ...state,
        brand: action.payload
      }

      case CATEGORY_FILTERED:
        const allProducts = state.allProducts;
        const categoryFiltered = action.payload === "all" ? allProducts : allProducts.filter((e) => e.category === action.payload)
        return {
          ...state,
          products: categoryFiltered
        }
      case BRAND_FILTERED:
        const brandProducts = state.allProducts;
        const brandFiltered = action.payload === "all" ? brandProducts : brandProducts.filter((e) => e.brand === action.payload)
        return {
          ...state,
          products: brandFiltered
        }
      case ORDER_BY_PRICE:
        return{
          ...state,
          products: action.payload
        }  
      case POST_USER:
        return{
          ...state,
        }
      case LOGIN_ANSWER:
        localStorage.setItem("token", action.payload.accessToken)
        return{
          ...state,
          token: action.payload.accessToken
      }
      case POST_PRODUCT:
        return{
        ...state,
      }    
        case ADD_TO_CAR:
      let products = state.allProducts
      let newCarItem = products.find(product => product._id === action.payload)
      console.log(newCarItem)
      return {
        ...state,
        car: [...state.car, newCarItem]
      }
      
      
    // case REMOVE_ONE:
    //   return{
    //   }
    // case REMOVE_ALL:
    //   return{
    //   }
    // case CLEAR_CAR:
    //   return{

    //   }
    default:
      return { ...state }
  }
}
      

