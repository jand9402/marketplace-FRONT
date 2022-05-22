import React, { useState } from 'react'

//hay que hacer mucho más específicas las validaciones (con más tiempo)
const useValidateCreateProd = () => {
  function validate (input) {
    const errors = {}

    if (!input.name) {
      errors.name = 'Campo requerido'
    } else if (!/^[a-zA-ZÀ-ÿ\s]{5,100}$/g.test(input.name)) {
      errors.name = 'Ingrese más de 5 caracteres'
    }
    // price
    if (!input.price) {
      errors.price = 'Campo requerido'
    } else if (!/^[0-9]*?$/.test(input.price)) {
      errors.price = 'Solo números'
    };

    // offer
    if (!input.offer) {
      errors.offer = 'Campo requerido, seleccione una opción'
    };

    // brand
    if (!input.brand) {
      errors.brand = 'Campo requerido'
    };

    // model
    if (!input.model) {
      errors.model = 'Campo requerido'
    };

    // amount
    if (!input.amount) {
      errors.amount = 'Campo requerido'
    } else if (input.amount <= 0) {
      errors.amount = 'La cantidad debe ser mayor a 0'
    }

    // dimensions
    if (!input.dimensions) {
      errors.dimensions = 'Campo requerido'
    } else if (input.dimensions <= 0) {
      errors.dimensions = 'Las dimenciones deben ser mayores a 0'
    }
    //condition
    if (!input.condition) {
      errors.condition = 'Campo requerido, elija una opción'
    };
    // other
    if (!input.other) {
      errors.other = 'Campo requerido'
    };
    //image
    if (!input.image) {
      errors.image = 'Campo requerido'
    };
    //description
    if (!input.description) {
      errors.description = 'Campo requerido'
    };
    //category
    if (!input.category) {
      errors.category = 'Campo requerido, elija una categoría'
    };

    return errors
  }

  const [errors, setErrors] = useState({})
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
    // e.preventDefault()
    // setInput((prevInput) => {
    //   const newInput = {
    //     ...prevInput,
    //     [e.target.name]: e.target.value
    //   }
    //   const validations = validate(newInput)
    //   setErrors(validations)
    //   return newInput
    // })
  };


  return {
    handleChange,
    errors,
    input,
    validate
  }
}

export default useValidateCreateProd
