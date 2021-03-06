import React from 'react'
import { Formik, FormikProps, FormikErrors } from 'formik'
import { useHistory } from 'react-router'
import axios from 'axios'
import '../styles/Form.css'

function Form() {

    interface Form {
        name: string,
        email: string,
        occupation: string,
        description: string
    }

    const history = useHistory()

    return (
        <>
            <Formik

                initialValues={{
                    name: '',
                    email: '',
                    occupation: '',
                    description: ''
                }}
                validate = {(valores: Form) => {
                    let error: FormikErrors<Form> = {}

                    //Validacion para el nombre
                    if(!valores.name){
                        error.name = 'Ingrese un nombre'
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
                        error.name = 'El nombre solo puede contener letras y espacios'
                    }

                    //Validacion para el email
                    if(!valores.email){
                        error.email = 'Ingrese un nombre'
                    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                        error.email = 'Email no valido'
                    }

                    //Validacion para la ocupacion
                    if(!valores.occupation){
                        error.occupation = 'Ingrese una ocupacion'
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.occupation)){
                        error.occupation = 'Solo puede contener letras y espacios'
                    }

                    //Validacion para la descripcion
                    if(!valores.description){
                        error.description = 'Ingrese una descripcion'
                    }

                    return error
                    
                    
                }}
                onSubmit={(valores, {resetForm}) => {
                    resetForm()
                    
                        axios.post('http://localhost:3030/users', valores)
                        //.then(res => console.log(res))
                        .then(() => history.push('/list'))
                    
                    //console.log(valores)
                }}>
                {({ values, errors, touched, handleSubmit, handleChange, handleBlur }: FormikProps<Form>) => (
                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                placeholder='Tu nombre'
                                value={values.name} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.name && errors.name && <div className="error">{errors.name}</div>}
                        </div>
                        <div>
                            <label htmlFor="name">Email</label>
                            <input
                                type="text"
                                id='email'
                                name='email'
                                placeholder='Tu email'
                                value={values.email} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.email && errors.email && <div className="error">{errors.email}</div>}
                        </div>
                        <div>
                            <label htmlFor="occupation">Ocupacion</label>
                            <input
                                type="text"
                                id='occupation'
                                name='occupation'
                                placeholder='Tu ocupacion'
                                value={values.occupation} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.occupation && errors.occupation && <div className="error">{errors.occupation}</div>}
                        </div>
                        <div>
                            <label htmlFor="description">Descripcion</label>
                            <textarea
                                name="description"
                                id="description"
                                cols={30}
                                rows={7}
                                placeholder='Danos una breve descripcion de ti'
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}></textarea>
                            {touched.description && errors.description && <div className="error">{errors.description}</div>}
                        </div>
                        <button type='submit'>Enviar</button>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default Form
