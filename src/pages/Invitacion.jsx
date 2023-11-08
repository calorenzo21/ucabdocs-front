import React from 'react';
import foto from '../assets/img/descarga.png';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Invitacion = () => {

    const history = useHistory();
    const [code, setCode] = useState('');
    function handleClick() {
        history.push(`/documents/${code}`)
    }

    return (
        <div>
            <div>
                <section class="bg-gray-50 min-h-screen flex items-center justify-center">
                    <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                        <div class="md:flex md:items-center md:justify-center w-1/2 hidden">
                            <img class="rounded-2xl h-80 " alt="logo" src={foto} />
                        </div>
                        <div class="flex flex-col items-center md:w-1/2 md:px-8">
                            <h2 class="text-xl mb-4 font-bold w-[340px] text-[#002D74] animate-fade-down-fade-up">Hola Usuario </h2>
                            <h2 class="text-lg w-[340px] text-[#002D74] animate-fade-down-fade-up">Para acceder a un documento compartido ingresa el link de la invitación: </h2>
                            <input
                                class="p-2 w-[340px] mt-8 rounded-xl border border-blue-800"
                                type="email"
                                name="email"
                                placeholder="Ej: 80c77fed-abb1-40cc-b4b8-cd24aa28674d"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                            <button
                                class="bg-[#002D74] w-40 mt-8 rounded-xl text-white py-2 hover:scale-105 duration-300"
                                type='submit'
                                onClick={handleClick}
                            >Ingresa</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Invitacion
