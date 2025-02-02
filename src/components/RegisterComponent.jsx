import React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from "formik";
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Este campo es obligatorio'),
    id: Yup.number().required('Este campo es obligatorio'),
    phone: Yup.number(),
    email: Yup.string().email('Correo inválido').required('Este campo es obligatorio'),
    password: Yup.string().required('Este campo es obligatorio'),
})

const RegisterComponent = () =>{
    return(
        <div>
            <h3 className="mt-5 text-white">Registrate</h3>
            <Formik 
                initialValues={{name: "", id: "", phone: "", email: "", password: ""}}
                validationSchema={RegisterSchema}
            >
                {({handleBlur, handleChange, handleSubmit, values, errors})=>(
                <>
                    <div className="container contact-form mt-5">
                    
                        <div className="contact-image">
                            <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
                        </div>
                        
                                    
                        <div className="col d-flex justify-content-center">
                            
                            <div className="col-md-6">
                                <div className="form-group mb-2">
                                    <input type="text" name='name' className="form-control" placeholder="Nombre Completo" onChange={handleChange('name')} value={values.name} />
                                    {errors.name && <p>{errors.name}</p>}
                                </div>
                                <div className="form-group mb-2">
                                    <input name='id' className="form-control" placeholder="Numero de Documento" onChange={handleChange('id')} value={values.id} />
                                    {errors.id && <p>{errors.id}</p>}
                                </div>
                                <div className="form-group mb-2">
                                    <input type="phone" name='phone' className="form-control" placeholder="Telefono" onChange={handleChange('phone')} value={values.phone} />
                                    {errors.phone && <p>{errors.phone}</p>}
                                </div>
                                <div className="form-group mb-2">
                                    <input type="email" name='email' className="form-control" placeholder="Email" onChange={handleChange('email')} value={values.email} />
                                    {errors.email && <p>{errors.email}</p>}
                                </div>
                                <div className="form-group mb-2">
                                    <input type="password" name='password' className="form-control" placeholder="Creá tu contraseña" onChange={handleChange('password')} value={values.password} />
                                    {errors.password && <p>{errors.password}</p>}
                                </div>
                                <button type="button" className="btn btn-danger m-2">Registrarse</button>
                            </div>      
                        </div>
                    </div>
                </>    
                )}
                
            </Formik>
        </div>
        

    )
}
export default RegisterComponent;