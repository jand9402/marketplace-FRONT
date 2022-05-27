import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postProduct } from "../../../redux/actions";

export default function ModalFormCreate ({estado, setEstado} ) {
    function validate (input) {
        const errors = {}
    
        if (!input.name) {
          errors.name = 'Campo requerido'
        } else if (!/^[a-zA-ZÀ-ÿ\s]{5,100}$/g.test(input.name)) {
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
        //category
        else if (!input.category) {
            errors.category = 'Campo requerido, elija una categoría'
        }
        //image
        // dimensions
        else if (!input.dimensions) {
            errors.dimensions = 'Campo requerido'
        } else if (input.dimensions <= 0) {
            errors.dimensions = 'Las dimenciones deben ser mayores a 0'
        }
        //condition
        else if (!input.condition) {
            errors.condition = 'Campo requerido, elija una opción'
        }
        // other
        else if (!input.other) {
            errors.other = 'Campo requerido'
        }
        // price
        else if (!input.price) {
          errors.price = 'Campo requerido'
        } else if (!/^[1-9]*?$/.test(input.price)) {
          errors.price = 'El precio no puede ser menor a 1'
        }
        // offer
        else if (!input.offer) {
          errors.offer = 'Campo requerido, seleccione una opción'
        }    
        // amount
        else if (!input.amount) {
          errors.amount = 'Campo requerido'
        } else if (input.amount <= 0) {
          errors.amount = 'La cantidad debe ser mayor a 0'
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
      let dispatch = useDispatch()
      // const { errors, handleChange } = useValidateCreateProd()
      const [file, setFile] = useState('')
    
      // const [createProduct] = postProduct()
      const handleFile = (e) => {
        setFile(e.target.files[0])
        setInput({
          ...input,
          [e.target.name]: file
        })
        
      }
      const [errors, setErrors ] = useState({})
    
      const [input, setInput] = useState({
        name: '',
        price: '',
        offer: '',
        brand: '',
        model: '',
        amount: '',
        dimensions: '',
        condition: '',
        other: '',
        image: '',
        description: '',
        category: ''
      })
    
      function handleChange (e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
        setErrors(validate( {
          ...input,
          [e.target.name]: e.target.value
        }))
      }
    
       function handleCreate  (e) {
      //   event.preventDefault()
      //   if (Object.values(errors).length > 0) {
      //     alert ('Complete toda la información requerida')    
      // }else
       if(
          input.name === '' && 
          input.image === '' &&
          input.brand === '' &&
          input.description === '' &&
          input.price === '' && 
          input.amount === '' &&
          input.condition === '' &&
          input.model === '' &&
          input.offer === '' && 
          input.dimensions === '' &&
          input.other === '' &&
          input.category === '' ) {
         alert ('No puede creear una nueva actividad si no completa el formulario')
      }else {
        const formdata = new window.FormData()
        formdata.append('name', input.name)
        formdata.append('image', file)
        formdata.append('brand', input.brand)
        formdata.append('description', input.description)
        formdata.append('price', input.price)
        formdata.append('amount', input.amount)
        formdata.append('condition', input.condition)
        formdata.append('model', input.model)
        formdata.append('offer', input.offer)
        formdata.append('dimensions', input.dimensions)
        formdata.append('other', input.other)
        formdata.append('category', input.category)
        // e.preventDefault()
        // createProduct(formdata).unwrap().then((payload) => console.log('fulfilled', payload))
        //   .catch((error) => console.error('rejected', error))
        dispatch(postProduct(formdata))
        console.log(formdata)
        alert(`Has creado ${input.name}, felicitaciones`)
        // setInput({
        //   name: '',
        //   price: '',
        //   offer: '',
        //   brand: '',
        //   model: '',
        //   amount: '',
        //   dimensions: '',
        //   condition: '',
        //   other: '',
        //   image: '',
        //   description: '',
        //   category: ''   
        //  })
      } 
    }
    return(
        <>
        {estado && 
        <div className="overLayCreateProduct">
            <div className='allProductForm'>
                <form onSubmit={(e) => handleCreate(e)}>
                    <h1 className='titleProduct'>Nuevo producto</h1>
                    <button onClick={()=> setEstado(false)} className="botonCerrarCreateForm">X</button>
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
                         <div className='productDiv2'>
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
                           <label className="titlesNNO" htmlFor=''><b>Tamaño de pantalla:</b></label>
                           {/* ES UN INPUT, QUE PERMITE DECIMALES */}
                           <select className='selectForm' name='condition' id='' onChange={(e) => handleChange(e)}>
                             <option disabled selected  value=''>px</option>
                             <option  value='new'>Nuevo</option>
                             <option value='used'>Usado</option>
                          </select>
                          {errors.condition && (
                          <p className='errosCreateLarge'>{errors.condition}</p>
                          )}
                        </div>
                         <div className='productDiv'>
                             <label className="titlesNNO" htmlFor=''><b>Imagen:</b></label>
                             <input  type='file' onChange={(e) => handleFile(e)} />
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
                     value={input.amount}
                     name='amount'
                     onChange={(e) => handleChange(e)}
                     />
                     {errors.amount && (
                     <p className='errosCreateLarge'>{errors.amount}</p>
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
                 <div className='productDiv'>
                     <label className='titlesNNO' htmlFor=''><b>Línea:</b></label>
                     <select  name='category' id='' onChange={(e) => handleChange(e)}  className='selectForm' >
                         <option disabled selected  value='' >Línea:</option>
                         <option value='art'>Arte</option>
                         <option value='Bookstore and haberdashery'>Librería y mercería</option>
                         <option value='cards'>Autos, Motos, y Otros</option>
                         <option value='motorcycle and others'>Motos y Otros</option>
                         <option value='beauty and personal care'>Belleza y Cuidado personal</option>
                         <option value='sports and fitness'>Deportes y fitness</option>
                         <option value='home appliances'>Electrodomésticos</option>
                         <option value='home furniture and garden'>Hogar, muebles y jardín</option>
                         <option value='fashion'>Moda</option>
                         <option value='kids'>Niños</option>
                         <option value='other'>Otras categorías</option>
                         <option value='technology'>Tecnología</option>
                     </select>
                     {errors.category && (
                     <p className='errosCreateLarge'>{errors.category}</p>
                     )}
                 </div>
                 <div className='productDiv'>
                     <label className='titlesNNO' htmlFor=''><b>Memoria interna:</b></label>
                     <input
                     autoComplete='off'
                     type='number'
                     className='inputsProductForm'
                     value={input.dimensions}
                     name='dimensions'
                     onChange={(e) => handleChange(e)}
                     />
                     {errors.dimensions && (
                     <p className='errosCreateLarge'>{errors.dimensions}</p>
                     )}
                 </div>
                 <div className='productDiv'>
                     <label htmlFor=''><b>Cámara trasera:</b></label>
                     <input
                     autoComplete='off'
                     type='text'
                     className='inputsProductForm'
                     value={input.other}
                     name='other'
                     onChange={(e) => handleChange(e)}
                     />
                     {errors.other && (
                     <p className='errosCreateLarge'>{errors.other}</p>
                     )}
                 </div>
                 <div className='productDiv'>
                     <label className='titlesNNO'>Con descuento:</label>
                     <select onChange={(e) => handleChange(e)} className='selectForm' name='offer' id=''>
                         <option disabled selected key='' value=''>Con descuento</option>
                         <option key='false' value='false'>NO</option>
                         <option key='5' value='5'>5%</option>
                         <option key='10' value='10'>10%</option>
                         <option key='15' value='15'>15%</option>
                         <option key='20' value='20'>20%</option>
                         <option key='25' value='25'>25%</option>
                         <option key='30' value='30'>30%</option>
                         <option key='35' value='35'>35%</option>
                         <option key='40' value='40'>40%</option>
                         <option key='45' value='45'>45%</option>
                         <option key='50' value='50'>50%</option>
                         <option key='55' value='55'>55%</option>
                         <option key='60' value='60'>60%</option>
                         <option key='65' value='65'>65%</option>
                         <option key='70' value='70'>70%</option>
                     </select>
                     {errors.offer && (
                     <p className='errosCreateLarge'>{errors.offer}</p>
                     )}
                 </div>
                 
                 <div className='productDiv'>
                     <label htmlFor=''><b>Descripción:</b></label>
                     <input
                     name='description'
                     value={input.description}
                     id=''
                     className='inputsProductForm'
                     onChange={(e) => handleChange(e)}
                     />
                     {errors.description && (
                     <p className='errosCreateLarge'>{errors.description}</p>
                     )}
                 </div>
             </div>
         </div>
            
        <button type='submit' className='buttonProduct'>Crear</button>
      </form>
    </div>
  </div> }
        </>
    )
}