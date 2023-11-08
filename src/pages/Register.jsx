import React, { useContext, useState } from 'react'
import logo from '../assets/img/logos.png'
import { AuthContext } from '../context/authContext'
import Swal from 'sweetalert2'

const Register = () => {
    
    const [ form, setForm ] = useState({
        email: '',
        password: '',
        name: ''
    })

    const { register } = useContext(AuthContext)

    const handleChange = ({ target }) => {
        
        const { name, value } = target

        setForm({
            ...form,
            [name]: value
        })
    }

    const onSubmit = async ( ev ) => {
        ev.preventDefault()
        
        const msg = await register( form.name, form.email, form.password )
        console.log(msg)

        if ( msg !== true ){
            Swal.fire({
                title: 'Error', 
                text: msg, 
                icon: 'error',
                confirmButtonColor: '#002D74',
                width: '410px'
            })
            return
        }

        if ( msg === true ) {
            Swal.fire({
                title: 'Bienvenido', 
                text: 'Inicio de sesión exitoso ', 
                icon: 'success',
                confirmButtonColor: '#002D74',
                width: '410px'
            })
        }
    }

    const checkFormFields = () => {
        return ( 
            form.email.length > 0 && 
            form.password.length > 0 && 
            form.name.length > 0
        ) ? true : false
    }
    
    return (
        <div>
            <section class="bg-gray-50 min-h-screen flex items-center justify-center">
                <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    <div class="md:w-1/2 px-8 md:px-16">
                        <h2 class="font-bold text-2xl text-[#002D74]">Registro</h2>
                        <form action="" class="flex flex-col gap-4" onSubmit={ onSubmit }>
                            <input class="p-2 mt-8 rounded-xl border" type="" name="name" placeholder="Nombre de Usuario" 
                                    value={ form.name } 
                                    onChange={ handleChange }
                            />
                            <input class="p-2 mt- rounded-xl border" type="email" name="email" placeholder="Email" 
                                    value={ form.email }
                                    onChange={ handleChange }
                            />
                            <input class="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Contraseña"
                                    value={ form.password }
                                    onChange={ handleChange }
                             />

                            <button 
                                class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
                                type='submit'
                                disabled={ !checkFormFields() }
                            >Registrar</button>
                        </form>
                    </div>
                    <div class="md:block hidden w-1/2">
                        <img class="rounded-2xl" src={logo} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register
