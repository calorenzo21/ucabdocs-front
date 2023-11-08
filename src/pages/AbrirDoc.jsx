import React from 'react'
import logo from '../assets/img/doc.png'
import Document from '../components/Document';

const AbrirDoc = () => {
    return (
        <div>
            <section class="bg-gray-50 min-h-screen flex items-center justify-center">
                <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    <div class="md:block hidden w-1/2">
                        <img class="rounded-2xl" alt="logo" src={logo} />
                    </div>
                    <div class="md:w-1/2 px-8 md:px-8">
                        <h2 class="font-bold text-2xl text-[#002D74] animate-fade-down-fade-up">Hola, </h2>
                        <p class="text-s mt-4  mb-4 text-[#002D74] "> Éstos son los documentos a los que has ingresado:</p>
                        <div class="flex flex-col gap-4">
                            <Document/>
                            <Document/>
                            <Document/>
                            <Document/>
                            <Document/>
                            <Document/>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default AbrirDoc
