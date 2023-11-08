import { createContext, useContext, useEffect } from "react";
import { useSocket } from "../hooks/useSocket";
import { AuthContext } from "./authContext";

export const SocketContext = createContext()

// https://ucabdocs-api-23cccedce5d8.herokuapp.com

export const SocketProvider = ({ children }) => {

    const { socket, online, connectSocket, disconnectSocket } = useSocket('https://ucabdocs-api-23cccedce5d8.herokuapp.com')

    const { auth } = useContext(AuthContext)

    useEffect(() => {
        if (auth.logged) {
            connectSocket()
        }
    }, [auth, connectSocket])

    useEffect(() => {
        if (!auth.logged) {
            disconnectSocket()
        }
    }, [auth, disconnectSocket])

    return (
        <SocketContext.Provider value={ { socket, online } }>
            { children }
        </SocketContext.Provider>
    )
}