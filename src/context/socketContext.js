import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext()

export const SocketProvider = ({ children }) => {

    const { socket, online } = useSocket('https://api-ucabdocs-v1-e3f4067d244a.herokuapp.com')

    return (
        <SocketContext.Provider value={ { socket, online } }>
            { children }
        </SocketContext.Provider>
    )
}