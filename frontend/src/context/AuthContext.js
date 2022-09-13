import {createContext, useEffect, useReducer} from "react";
import AuthReducer from "./AuthReducer";

// initial state where default value is set
const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false
}

//creating the context-api
export const AuthContext = createContext(INITIAL_STATE);

//wrapper where components are gonna use with context api

export const AuthContextProvider = ({children})=> {
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user));
      },[state.user]);
    //returning the state with respect to children
    return (
        <AuthContext.Provider 
            value={{
                user:state.user,
                isFetching:state.isFetching,
                error:state.error,
                dispatch,
                }}
            >
            {children}    
        </AuthContext.Provider>
    );
};