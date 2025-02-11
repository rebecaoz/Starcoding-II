import React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Este campo es obligatorio').matches(/^[A-Za-z]+$/,'Solo debe incluir letras'),
    id: Yup.number().required('Este campo es obligatorio').typeError('Sólo ingrese números').min(30000000, 'El documento debe ser mayor a 30 millones'),
    phone: Yup.number().typeError('Sólo ingrese números'),
    email: Yup.string().email('Correo inválido').required('Este campo es obligatorio').matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, 'Correo inválido'),
    password: Yup.string().required('Este campo es obligatorio').min(8, 'Debe tener al menos 8 caracteres').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_-]).{8,18}$/,'Debe incluir al menos un número, al menos una letra minúscula, al menos una letra mayúscula y al menos un carácter especial.'),
    verifyPassword: Yup.string()
        .required('Este campo es obligatorio')
        .oneOf([Yup.ref('password')],'Las contraseñas no coinciden')
})

const RegisterComponent = () =>{

    const [visible, setVisible] = useState(false);

    return(
        <div>
            <h3 className="mt-5 text-white">Registrate</h3>
            <Formik 
                initialValues={{name: "", id: "", phone: "", email: "", password: ""}}
                validationSchema={RegisterSchema}
                onSubmit={values=>console.log(values)}
                validateOnBlur
            >
                {({handleBlur, handleChange, handleSubmit, values, errors, touched})=>(
                <>
                    <form className="container contact-form mt-5" onSubmit={handleSubmit}>
                    
                        <div className="contact-image">
                            <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
                        </div>
                        
                                    
                        <div className="col d-flex justify-content-center">
                            
                            <div className="col-md-6">
                                <div className="form-group mb-2">
                                    <input type="text" name='name' className="form-control" placeholder="Nombre Completo" onChange={handleChange('name')} onBlur={handleBlur('name')} value={values.name} />
                                    {touched.name && errors.name && <p className="error-name">{errors.name}</p>}
                                </div>
                                <div className="form-group mb-2">
                                    <input name='id' className="form-control" placeholder="Numero de Documento" onChange={handleChange('id')} onBlur={handleBlur('id')}value={values.id} />
                                    {touched.id && errors.id && <p className="error-name">{errors.id}</p>}
                                </div>
                                <div className="form-group mb-2">
                                    <input type="phone" name='phone' className="form-control" placeholder="Telefono" onChange={handleChange('phone')} onBlur={handleBlur('phone')} value={values.phone} />
                                    {touched.phone && errors.phone && <p className="error-name">{errors.phone}</p>}
                                </div>
                                <div className="form-group mb-2">
                                    <input type="email" name='email' className="form-control" placeholder="Email" onChange={handleChange('email')} onBlur={handleBlur('email')} value={values.email} />
                                    {touched.email && errors.email && <p className="error-name">{errors.email}</p>}
                                </div>
                                <div className="form-group mb-2">
                                    <input type={visible ? "text" : "password"} name='password' className="form-control" placeholder="Creá tu contraseña" onChange={handleChange('password')} onBlur={handleBlur('password')} value={values.password} />
                                    {touched.password && errors.password && <p className="error-name">{errors.password}</p>}
                                </div>
                                <div className="form-group mb-2">
                                    <input type={visible ? "text" : "password"} name='verifyPassword' className="form-control" placeholder="Volvé a ingresar la contraseña" onChange={handleChange('verifyPassword')} onBlur={handleBlur('verifyPassword')} value={values.verifyPassword} />
                                    {touched.verifyPassword && errors.verifyPassword && <p className="error-name">{errors.verifyPassword}</p>}
                                </div>
                                <div className="form-check text-start mt-1">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={()=>setVisible(!visible)}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                         Mostrar contraseña
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-danger m-2">Registrarse</button>
                            </div>      
                        </div>
                    </form>
                </>    
                )}
                
            </Formik>
        </div>
        

    )
}
export default RegisterComponent;