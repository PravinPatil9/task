import { useFormik } from 'formik'
import React from 'react'
import { signUpSchema } from '../schema'

const initialValues = {
    name:"",
    email:"",
    password:"",
    confirm_password:""
}

const RegistrationForm = () => {

    const {values ,
        errors,
        handleBlur, 
        touched,
         handleChange, 
         handleSubmit
        }= useFormik
        ({
        initialValues : initialValues,

        validationSchema:signUpSchema,
        onSubmit:(values , {resetForm}) => {
            resetForm();
            console.log(values);

        }
        
    })
    // console.log(Formik)
  return (

    <div>
    <h1>Welcome</h1>

<form onSubmit={handleSubmit}>
    <div>

        <label htmlFor="name" className='input-lable'>Name</label>
        <input 
        type="name" 
        autoComplete='off' 
        name='name' 
        id='name' 
        placeholder='name'
        
        values={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {errors.name && touched.name ? <p className='form-error'>{errors.name}</p> :null}
        
    </div>

    <div>

        <label htmlFor="e-mail" className='input-lable'>E-mail</label>
        <input
         type="email"
         autoComplete='off' 
         name='email' 
         id='email'
          placeholder='E-mail'
          
          values={values.email}
        onChange={handleChange}
        onBlur={handleBlur} 

        />
        {errors.email && touched.email? <p className='form-error'>{errors.email}</p> :null}
    </div>

    <div>

        <label htmlFor="password" className='input-lable'>Password</label>
        <input
         type="password"
          autoComplete='off' 
          name='password'
           id='password' 
           placeholder='password' 
           values={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
           />
           {errors.password && touched.password ? <p className='form-error'>{errors.password}</p> :null}
    </div>
    <div>

        <label htmlFor="confirm-password" className='input-lable'>confirm-password</label>
        <input
         type="password"
          autoComplete='off' 
          name='confirm_password'
           id='confirm-password' 
           placeholder='confirm-password'
           values={values.confirm_password}
        onChange={handleChange}
        onBlur={handleBlur} />
      
      {errors.confirm_password && touched.confirm_password ? <p className='form-error'>{errors.confirm_password}</p> :null}
    </div>

 <div>
    {/* <a href="#"> want to register using E-mail</a>  <br /> */}
    <button className='button' type='submit'>Registration</button>
 </div>


    </form>
    </div>
  )
}

export default RegistrationForm;