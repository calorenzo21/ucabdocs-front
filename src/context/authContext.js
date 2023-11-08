import React, { Children, createContext, useCallback, useState } from "react";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";

export const AuthContext = createContext()

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null
}

export const AuthProvider = ({ children }) => {
  
    const [ auth, setAuth ] = useState(initialState)
    
    const login = async ( email, password ) => {

        const resp = await fetchSinToken('login', { email, password }, 'POST')
        console.log( resp ) 
        
        if ( resp.ok ) {
            localStorage.setItem( 'token', resp.token )

            setAuth({
                uid: resp.user.uid,
                checking: false,
                logged: true,
                name: resp.user.name,
                email: resp.user.email
            })
        }

        return resp.ok
    }

    const register = async ( name, email, password ) => {
        
        const resp = await fetchSinToken('register', { email, password, name }, 'POST')
        console.log(resp)

        if ( resp.ok ) {
            localStorage.setItem( 'token', resp.token )
            console.log('Entro')
            setAuth({
                uid: resp.user.uid,
                checking: false,
                logged: true,
                name: resp.user.name,
                email: resp.user.email
            })

            return true
        }

        return resp.msg
    }

    const checkToken = useCallback( async () => {

        const token = localStorage.getItem('token')

        if ( !token ) {
            return setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null 
            })
        }

        const resp = await fetchConToken('renew')

        if ( resp.ok ){
            localStorage.setItem('token', resp.token )
           
            const { user } = resp

            setAuth({
                uid: user.uid,
                checking: false,
                logged: true,
                name: user.name,
                email: user.email 
            })

            return true

        } else {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null 
            })

            return false
        }

    }, [])

    const logout = () => {

    }

    return (
        <AuthContext.Provider value={{ 
            auth,
            login,
            register,
            checkToken,
            logout
        }}>
            { children }
        </AuthContext.Provider>
    )
}
