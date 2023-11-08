import React from 'react'
import logo from '../assets/img/doc.png'
import { useHistory } from 'react-router-dom'

const Welcome = () => {

    const history = useHistory();

    const handleClickInvitacion= () => {
        history.push('/invitacion')
    }

    const handleClickCrearDoc= () => {
        history.push('/nuevo-doc')
    }
    
    const handleClickAbrir= () => {
        history.push('/abrir-doc')
    }
    return (
        <div>
            <section class="bg-gray-50 min-h-screen flex items-center justify-center">
                <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    <div class="md:block hidden w-1/2">
                        <img class="rounded-2xl animate-pulse" alt="logo" src={logo} />
                    </div>
                    <div class="md:w-1/2 px-8 md:px-8">
                        <h2 class="font-bold text-2xl text-[#002D74] animate-fade-down-fade-up">Bienvenido a UCAB-DOCS </h2>
                        <p class="text-s mt-4  mb-4 text-[#002D74] "> ¿Qué deseas hacer?</p>
                        <div class="flex flex-col gap-4">
                            <button class="bg-white border-2 border-[#002D74] rounded-xl text-[#002D74] py-2 hover:scale-105 duration-300 " onClick={handleClickCrearDoc}>Crear Documento</button>
                            <button class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300" onClick={handleClickAbrir}>Abrir</button>
                            <button class="bg-[#00740ad0] rounded-xl text-white py-2 hover:scale-105 duration-300" onClick={handleClickInvitacion}>Acceder con Invitación</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Welcome
