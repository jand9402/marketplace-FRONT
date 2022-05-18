import { GET_ALL_PRODUCTS
        } from "../actions";


        const initialState = {
            // loading: false,
            products: [],
            // login: false,
            createProduct: {},
          }
          
          export default function rootReducer (state = initialState, action) {
            switch (action.type) {
              case GET_ALL_PRODUCTS:
                return{
                  ...state,
                  products: action.payload
                }
            //   case 'INCREMENT':
            //     return {
            //       ...state,
            //     }
            //   case 'DECREMENT':
            //     return {
            //       ...state,
            //     }
            //   case 'RESET':
            //     return {
            //       ...state,
            //     }
            //   case 'GET_POST':
            //     return {
            //       ...state,
            //     }
            //   case 'RECEIVE_POST':
            //     return {
            //       ...state,
            //     }
            //   case SEARCH_BY_NAME:
            //     return{
            //       ...state,
            //       products: action.payload
            //     }
              default:
                return {...state}
            }
          }