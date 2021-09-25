import React from 'react'
import {Formik} from 'formik'
import '../styles/Form.css'

function Form() {

    type form = {
        children: () => void
    }

    return (
        <>
            <Formik
            initialValues = {{
                name: '',
                occupation: '',
                description: ''
            }}
            onSubmit={() => {

            }}>
                {({handleSubmit}) => (
                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id='name' name='name' placeholder='Tu nombre' />
                        </div>
                        <div>
                            <label htmlFor="occupation">Ocupacion</label>
                            <input type="text" id='occupation' name='occupation' placeholder='Tu ocupacion' />
                        </div>
                        <div>
                            <label htmlFor="description">Descripcion</label>
                            <textarea name="description" id="description" cols={30} rows={7} placeholder='Danos una breve descripcion de ti'></textarea>
                        </div>
                        <button type='submit'>Enviar</button>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default Form
