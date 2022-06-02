import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { modifyProduct, getCategories, getDetail } from "../../redux/actions/index"
import { useParams } from "react-router-dom";
import './ProductForm.css'


export function validate (input) {
    const errors = {}
  
    if (!input.name) {
      errors.name = 'Campo requerido'
    } 
    else if (!/^[a-zA-ZÀ-ÿ0-9_.+-\s]{5,100}$/g.test(input.name)) {
      errors.name = 'Ingrese más de 5 caracteres'
    }
    // brand
    else if (!input.brand) {
        errors.brand = 'Campo requerido'
    }  
    // model
    else if (!input.model) {
        errors.model = 'Campo requerido'
    }
  //  categories
    // else if (!input.categories.lenght) {
    //     errors.categories = 'Debe seleccionar al menos una categoría '
    // }
    else if (!input.screenSize) {
        errors.screenSize = 'Campo requerido'
    }
    // //image
    // else if (input.image.length < 3) {
    //   errors.image = 'Debe seleccionar 3 imágenes'
    // }
    // dimensions
    else if (!input.internalMemory) {
        errors.internalMemory = 'Campo requerido'
    } else if (input.internalMemory <= 0) {
        errors.internalMemory = 'La memoria interna deben ser mayor a 0'
    }
    //condition
    else if (!input.condition) {
        errors.condition = 'Campo requerido, elija una opción'
    }
    // price
    else if (!input.price) {
      errors.price = 'Campo requerido'
     }
    else if (!/^[1-9]\d*(\.\d+)?$/.test(input.price)) {
      errors.price = 'El precio no puede ser menor a 1'
    }   
    // amount
    else if (!input.amountInStock) {
      errors.amountInStock = 'Campo requerido'
    } else if (input.amountInStock <= 0) {
      errors.amountInStock = 'La cantidad debe ser mayor a 0'
    }

    // //image
    // else if (!input.image) {
    //   errors.image = 'Campo requerido'
    // }
    //description
    else if (!input.description) {
      errors.description = 'Campo requerido'
    }
  
    return errors
  }

export default function EditProduct () {
    
      const dispatch = useDispatch()
      const token = localStorage.getItem('authorization')
      const categoriesAll = useSelector(state => state.categoriesNew)
      const detailProduct = useSelector (state => state.detail)
      const {id} = useParams();
      console.log(id)
      // console.log(categoriesAll)
      
      useEffect(() => {
        dispatch(getDetail(id))
        console.log(detailProduct)
    },[dispatch, id])
      
     
    let aux =[]
    for (let i =0; i< categoriesAll.length; i++) {
         aux = aux.concat(categoriesAll[i])
        }
   const allCategoriesN = [...new Set(aux)] 
      
      const [file, setFile] = useState('')
      console.log(file)
      const [categorias, setCategorias] = useState([])
  
      const handleFile = (e) => {
        setFile(e.target.files)
      }
      const [errors, setErrors ] = useState({})
    
      const [input, setInput] = useState({
        name: '',
        price: '',
        brand: '',
        model: '',
        amountInStock: '',
        screenSize: '',
        condition: '',
        internalMemory: '',
        image: [],
        description: '',
        categories: [],
        newCategory :''
      })
    
      function handleSelectCat(e) {
        setInput({
          ...input,
          categories: [...input.categories, e.target.value]     
            })
            console.log(input)
      };
      function habdleOnChange (e){
        detailProduct = {
          ...detailProduct,
          [e.target.name]: [e.target.value]
        }
      }

      function handleChange (e) {
        e.preventDefault()
        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
        
        // detailProduct = {
        //   ...detailProduct,
        //   [e.target.name]: [e.target.value]
        // }
        // setCategorias({
        //   ...input,
        //   [e.target.categories]: [e.target.value.split(",")]
        // }
        //  )
        // setErrors(validate( {
        //   ...input,
        //   [e.target.name]: e.target.value
        // }))
        console.log(input)
      }

      function handleDelet (e) {
        setInput( (prevInputDel) => {
            const newInpuDel = {
                ...prevInputDel,
                categories : input.categories.filter((c => c !== e.target.id))
            }
            console.log(newInpuDel)
            return newInpuDel
        } )
    }
    
      const handleCreate = async  (e) => {
        e.preventDefault()
      //   if (Object.values(errors).length > 0) {
      //     alert ('Complete toda la información requerida')    
      // }else
       if(
          input.name === '' && 
          !input.image.length === '' &&
          input.brand === '' &&
          input.description === '' &&
          input.price === '' && 
          input.amountInStock === '' &&
          input.condition === '' &&
          input.model === '' &&
          input.internalMemory === '' &&
          input.screenSize === '' &&
          !input.temperament.length 
          ) {
         alert ('No puede creear una nueva actividad si no completa el formulario')
      }else {
        // const formdata = new window.FormData()
        // formdata.append('name', input.name)
        // for(let i = 0; i < file.length; i++)
        // formdata.append('image', file[i])
        // formdata.append('brand', input.brand)
        // formdata.append('description', input.description)
        // formdata.append('price', input.price)
        // formdata.append('amountInStock', input.amountInStock)
        // formdata.append('condition', input.condition)
        // formdata.append('model', input.model)
        // formdata.append('internalMemory', input.internalMemory)
        // formdata.append('screenSize', input.screenSize)
        // for (let i =0; i < input.categories.length; i++)
        // formdata.append('categories', input.categories[i])
        // formdata.append('categories', input.newCategory)
        e.preventDefault()
        await dispatch(modifyProduct( id, input, token))
        alert(`Has Modificado ${input.name}, felicitaciones`)
        setInput({
          name: '',
          price: '',
          brand: '',
          model: '',
          amountInStock: '',
          screenSize: '',
          condition: '',
          internalMemory: '',
          image: [],
          description: '',
          categories: [], 
          newCategory: ''
        })
      } 
    }

    useEffect(() => {
      dispatch(getCategories())
   },[dispatch])

    return(
        <>
        <div>
            <div className='allProductForm'> 
                <form key={id} onSubmit={(e) => handleCreate(e)}>
                    <h1 className='titleProduct'>Editar producto</h1>
                    {/* <button onClick={()=> setEstado(false)} className="botonCerrarCreateForm">X</button> */}
                    <div className="boxColumnas1y2" >
                        <div className="boxColumna1PF">
                            <div className='productDiv'>
                                <label className='titlesNNO'>Nombre del producto:</label>
                                <input
                                autoComplete='off'
                                type='text'
                                className='inputsProductForm'
                                value={input.name}
                                name='name'
                                onChange={(e) => handleChange(e)}
                                />
                                {errors.name && (
                                <p className='errosCreateLarge'>{errors.name}</p>
                                )}
                            </div>
                            <div className='productDiv'>
                              <label className='titlesNNO' htmlFor=''><b>Modelo:</b></label>
                              <input
                              autoComplete='off'
                              type='text'
                              className='inputsProductForm'
                              value={input.model}
                              name='model'
                              onChange={(e) => handleChange(e)}
                              />
                              {errors.model && (
                              <p className='errosCreateLarge'>{errors.model}</p>
                              )}
                           </div>
                           <div className='productDiv'>
                             <label className="titlesNNO" htmlFor=''><b>Display:</b></label>
                             <input
                             autoComplete='off'
                             type='number'
                             step="0.01" 
                             min="0" 
                             max="10"
                             className='inputsProductForm'
                             value={input.screenSize}
                             name='screenSize'
                             onChange={(e) => handleChange(e)}
                             />
                             {errors.screenSize && (
                             <p className='errosCreateLarge'>{errors.screenSize}</p>
                             )}
                           </div>
                           <div className='productDiv'>
                             <label className="titlesNNO" htmlFor=''><b>Imagen:</b></label>
                             <input
                             type='file' 
                             id='file'
                             multiple 
                             name="image" 
                             onChange={habdleOnChange} 
                             />
                             {errors.image && (
                             <p className='errosCreateLarge'>{errors.image}</p>
                             )}
                           </div>
                           <div className='productDiv'>
                             <label className='titlesNNO'>Precio:</label>
                             <input
                             placeholder='En US$'
                             autoComplete='off'
                             type='number'
                             value={input.price}
                             name='price'
                             className='inputsProductForm'
                             onChange={(e) => handleChange(e)}
                             />
                             {errors.price && (
                             <p className='errosCreateLarge'>{errors.price}</p>
                             )}
                           </div>
                           <div className='productDiv'>
                             <label className='titlesNNO' htmlFor=''><b>Cantidad:</b></label>
                             <input
                             autoComplete='off'
                             type='number'
                             className='inputsProductForm'
                             value={input.amountInStock}
                             name='amountInStock'
                             onChange={(e) => handleChange(e)}
                             />
                             {errors.amountInStock && (
                             <p className='errosCreateLarge'>{errors.amountInStock}</p>
                             )}
                           </div>
                         </div>
                         <div className="boxColumna2PF">
                           <div className='productDiv'>
                             <label className='titlesNNO' htmlFor=''><b>Marca:</b></label>
                             <select  name='brand' id='' onChange={(e) => handleChange(e)}  className='selectForm' >
                               <option disabled selected  value=''>Marca</option>
                               <option value='ALCATEL'>Alcatel</option>
                               <option value='APPLE'>Apple</option>
                               <option value='ASUS'>Asus</option>
                               <option value='HUAWEI'>Huawei</option>
                               <option value='LG'>LG</option>
                               <option value='MOTOROLA'>Motorola</option>
                               <option value='NOKIA'>Nokia</option>
                               <option value='SAMSUNG'>Samsung</option>
                               <option value='SONY'>Sony</option>
                             </select>
                             {errors.brand && (
                             <p className='errosCreateLarge'>{errors.brand}</p>
                             )}
                           </div>
                           <div className='productDivC'>
                             <label className='titlesNNO' name='categories'><b>Categoría/s:</b></label>
                             <select  className='selectForm' onChange={handleSelectCat}>
                               <option disabled selected  value="">Tipo de línea</option>
                               {allCategoriesN && allCategoriesN.map((c) => (
                               <option key= {c} value= {c} >{c}</option>
                               )
                              )}
                             </select>
                             {input.categories? <div>
                             {input.categories?.map(c => 
                             (<div className="listaCountSelD" key={c}>
                               <span>{c}</span>
                                 <button className="botonDeletCat" id={c}  onClick={handleDelet}>x</button>
                              </div> 
                            ))}
                             {/* <div className="titlesNewCat" >Si no encuentra la categoría puede agregarla</div>
                              <input
                              autoComplete='off'
                              type='text'
                              className='inputsProductForm'
                              name='newCategory'
                              value={input.newCategory}
                              onChange={(e) => handleChange(e)}
                              /> */}
                             {errors.categories && (
                             <p className='errosCreateLarge'>{errors.categories}</p>
                             )}
                           </div> : null  }
                           </div>
                           {/* </div> */}
                           <div className='productDiv'>
                             <label className='titlesNNO' htmlFor=''><b>Memoria interna:</b></label>
                             <input
                             autoComplete='off'
                             type='number'
                             className='inputsProductForm'
                             value={input.internalMemory}
                             name='internalMemory'
                             onChange={(e) => handleChange(e)}
                             />
                             {errors.internalMemory && (
                             <p className='errosCreateLarge'>{errors.internalMemory}</p>
                             )}
                           </div>
                           <div className='productDiv'>
                             <label className='titlesNNO' htmlFor=''><b>Estado:</b></label>
                             <select className='selectForm' name='condition' id='' onChange={(e) => handleChange(e)}>
                               <option disabled selected  value=''>Estado</option>
                               <option  value='new'>Nuevo</option>
                               <option value='used'>Usado</option>
                             </select>
                               {errors.condition && (
                               <p className='errosCreateLarge'>{errors.condition}</p>
                               )}
                           </div>
                           <div className='productDiv'>
                             <label className='titlesNNO' htmlFor=''><b>Descripción:</b></label>
                             <input
                             name='description'
                             value={input.description}
                             id=''
                             className='inputsProductFormDes'
                             onChange={(e) => handleChange(e)}
                             />
                             {errors.description && (
                             <p className='errosCreateLarge'>{errors.description}</p>
                             )}
                           </div>
                        </div>
                    </div>
                    <button type='submit' className='buttonProduct'>OK</button>
                </form>
            </div>
        </div> 
     </>
    )
}