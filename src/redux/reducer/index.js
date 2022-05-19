import { GET_ALL_PRODUCTS,
         SEARCH_BY_NAME,
         GET_CATEGORYS,
         GET_BRAND,
         CATEGORY_FILTERED,
         BRAND_FILTERED,
         POST_USER
        } from "../actions";


        const initialState = {
            // loading: false,
            products: [],
            allProducts: [],
            categorys: [],
            brand: [],
            // login: false,
            createProduct: {},
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
                  products:action.payload
                }
              case GET_CATEGORYS:
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
                        const categoryFiltered =
                          action.payload === "all"
                            ? allProducts
                            : allProducts.filter((e) => e.category === action.payload)
                            console.log(categoryFiltered)   
                        return {
                          ...state,
                          products: categoryFiltered,
                        }
                        case BRAND_FILTERED:
                          const brandProducts = state.allProducts;
                          const brandFiltered =
                            action.payload === "all"
                              ? brandProducts


                              : brandProducts[0].filter((e) => e.brand === action.payload)
                              console.log(brandFiltered)

                          return {
                            ...state,
                            products: brandFiltered,
                          }
                          case POST_USER:
                          return{
                          ...state,
                        }    
              default:
                return {...state}
            }
          }