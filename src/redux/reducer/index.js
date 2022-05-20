import { GET_ALL_PRODUCTS,
         SEARCH_BY_NAME,
         GET_CATEGORYS,
         GET_BRAND,
         CATEGORY_FILTERED,
         BRAND_FILTERED,
         POST_USER,
         POST_PRODUCT,
         ORDER_BY_PRICE
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
                              : brandProducts.filter((e) => e.brand === action.payload)
                              console.log(brandFiltered)

                          return {
                            ...state,
                            products: brandFiltered,
                          }
                          case ORDER_BY_PRICE:
            let sortPrice = action.payload === 'menor' ? state.products.sort((a, b) => {
                if (a.price > b.price) return 1
                if (b.price > a.price) return -1
                return 0
            }) :
                state.products.sort((a, b) => {
                    if (a.price > b.price) return -1
                    if (b.price > a.price) return 1
                    return 0
                  })
                  console.log(sortPrice)
                return {
                  ...state,
                  products: sortPrice
              }
            // let products = state.allProducts
            // let sortPrice = action.payload === 'mayor' ?
            // products.sort(function(a, b) {
            //   return a.price - b.price
            // }) : 
            // products.sort(function(a, b) {
            //   return b.price - a.price
            // })

            // let productos = state.allProducts
            // function ordenamiento (productos) {
            //   for (let i=0; i<productos.length; i++) {
            //     for(let p=0; p<productos.length; p++) {
            //       if(productos[p].price > productos[p+1].price) {
            //         let aux = productos[p].price
            //         productos[p].price = productos[p+1].price
            //         productos[p+1].price = aux
            //       }
            //     }
            //   }
            //   return productos
            // }
            // let ordenados = ordenamiento(productos)
               
                          case POST_USER:
                          return{
                          ...state,
                        }  
                        case POST_PRODUCT:
                          return{
                          ...state,
                        }    
              default:
                return {...state}
            }
          }

              // filter by brand
    // else if (filter) {
    //   const products = await ProductModel.find({ brand: req.query.filter })
    //   return res.json(products)
    // }
    // // order by price
    // else if (order) {
    //   const products = await ProductModel.find().sort({
    //     price: req.query.order,
    //   })

      // https://pf-commerce.herokuapp.com/api/products?name=${payload}

      // https://pf-commerce.herokuapp.com/api/products?order=-1