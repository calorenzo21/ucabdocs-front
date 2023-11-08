import React from 'react'
import icon1 from '../assets/img/archivo.png'
import icon2 from '../assets/img/archivo-azul.png'
import { useState } from 'react';

const Document = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div class="flex hover:scale-110">
            <img src={icon1} alt=""
                class={`w-12 h-12 transition duration-500 ease-in-out ${isHovered ? 'hidden' : 'opacity-100'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
            <img
                src={icon2}
                alt=""
                class={`w-12 h-12 transition duration-500 ease-in-out  ${isHovered ? 'opacity-100 ' : 'hidden'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
            <p
                class={`transition duration-500 ease-in-out ml-1 mt-3 mb-4  ${isHovered ? 'text-gray-800 text-ml animate-pulse' : 'text-black'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            > Archivo
            </p>
        </div>
    )
}

export default Document
