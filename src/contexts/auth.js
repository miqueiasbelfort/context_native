import React, {createContext, useState} from "react"
import { useNavigation } from "@react-navigation/native"

export const AuthContext = createContext({})

const AuthProvider = ({children}) => {

    const navigate = useNavigation()

    const [user, setUser] = useState({})

    function singIn(email, password){
        if(email !== "" && password !== ""){
            setUser({
                email: email,
                status: false
            })
            navigate.navigate("Pegina Inicial")
        }
    }

    return (
        <AuthContext.Provider value={{ singIn, user}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider