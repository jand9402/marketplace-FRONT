
import { GET_ALL_PRODUCTS,
         SEARCH_BY_NAME,
         GET_CATEGORIES,
         GET_BRAND,
         CATEGORY_FILTERED,
         BRAND_FILTERED,
         POST_USER,
         ORDER_BY_PRICE,
         LOGIN_ANSWER,
         POST_PRODUCT,
         DETAIL_DELETE,
         GET_DETAIL
        } from "../actions";
import { ADD_TO_CAR } from "../../comoponents/Cards/card";
import { REMOVE_ALL_FROM_CAR, REMOVE_ONE_FROM_CAR } from "../../comoponents/CarItem/CarItem";
import { CLEAR_CAR } from "../../comoponents/ShoppingCar/ShoppingCar";


const initialState = {
  // loading: false,
  products: [],
  allProducts: [],
  detail: {},
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
        localStorage.setItem("authorization", action.payload)
        return{
          ...state,
          token: action.payload
      }
      case POST_PRODUCT:
        return{
        ...state,
      }   
      case DETAIL_DELETE:
        return {
          ...state,
          detail: {}
        }
      case GET_DETAIL: 
        return {
          ...state,
          detail: action.payload
        } 


      // case ADD_TO_CAR:
      //   let products = state.allProducts
      //   let newCarItem = products.find(product => product._id === action.payload)
      //   // console.log(newCarItem)
      //   let itemInCar = state.car.find(item => item._id === newCarItem._id)
  
  
      //   return itemInCar?{
      //     ...state,
      //     car: state.car.map(item => item._id === newCarItem._id?{
      //       ...item, quantity: item.quantity +1}:item
      //       )
      //   } : {
      //     ...state,
      //     car: [...state.car, {...newCarItem, quantity: 1}]
      //   }
      // case REMOVE_ONE_FROM_CAR:
      //   let carProducts = state.car
      //   let itemToDelete = carProducts.find(item => item._id === action.payload)
  
      //   return itemToDelete.quantity > 1? {
      //     ...state,
      //     car: state.car.map(item => item._id === action.payload ?{
      //       ...item, quantity: item.quantity - 1}:item
      //       )
      //   }:{
      //     ...state,
      //     car: state.car.filter((item) => item._id !== action.payload)
      //   }
      //   case REMOVE_ALL_FROM_CAR:
      //   return {
      //     ...state,
      //     car: state.car.filter((item) => item._id !== action.payload)
      //   }
  
      // case CLEAR_CAR:
      //   return{
      //     ...state,
      //     car: []
      //   }






    //     case ADD_TO_CAR:
    //   let products = state.allProducts
    //   let newCarItem = products.find(product => product._id === action.payload)
    //   // console.log(newCarItem)
    //   let itemInCar = state.car.find(item => item._id === newCarItem._id)

    //   let aux = itemInCar?{
    //     ...state,
    //     car: state.car.map(item => item._id === newCarItem._id?{
    //       ...item, quantity: item.quantity +1}:item
    //       )
    //   } : {
    //     ...state,
    //     car: [...state.car, {...newCarItem, quantity: 1}]
    //   }
    //   localStorage.setItem("itemCar", JSON.stringify(aux))
    //   let info = JSON.parse(localStorage.itemCar)

    //   console.log(JSON.parse(localStorage.itemCar))

    //   return {
    //     ...state,
    //    car: info.car
    //   }

    //   // return itemInCar?{
    //   //   ...state,
    //   //   car: state.car.map(item => item._id === newCarItem._id?{
    //   //     ...item, quantity: item.quantity +1}:item
    //   //     )
    //   // } : {
    //   //   ...state,
    //   //   car: [...state.car, {...newCarItem, quantity: 1}]
    //   // }
    // case REMOVE_ONE_FROM_CAR:
    //   let carProducts = state.car
    //   let itemToDelete = carProducts.find(item => item._id === action.payload)

    //   let aux2 = itemToDelete.quantity > 1? {
    //     ...state,
    //     car: state.car.map(item => item._id === action.payload ?{
    //       ...item, quantity: item.quantity - 1}:item
    //       )
    //   }:{
    //     ...state,
    //     car: state.car.filter((item) => item._id !== action.payload)
    //   }
    //   localStorage.setItem("itemCar", JSON.stringify(aux2))
    //   let info2 = JSON.parse(localStorage.itemCar)

    //   return{
    //     ...state,
    //     car: info2.car
    //   }
    //   case REMOVE_ALL_FROM_CAR:

    //   let aux4 = { ...state,
    //     car: state.car.filter((item) => item._id !== action.payload)}
    //     localStorage.setItem("itemCar", JSON.stringify(aux4))
    //   let info4 = JSON.parse(localStorage.itemCar)
    //   return {
    //    ...state,
    //    car: info4.car
    //   }

    // case CLEAR_CAR:
    //   let aux3 = [0]
    //   localStorage.setItem("itemCar", JSON.stringify(aux3))
    //   let info3 = JSON.parse(localStorage.itemCar)
    //   return{
    //     ...state,
    //     car: info3
    //   }
    default:
      return { ...state }
  }
}
      

