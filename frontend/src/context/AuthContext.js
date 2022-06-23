import {createContext, useReducer} from "react";
import AuthReducer from "./AuthReducer";

// initial state where default value is set
const INITIAL_STATE = {
    user:{  
        _id:"629db603bac17b1c564c7cd0",
        username:"naruto",
        email:"Uzumaki548@gmail.com",
        profilePicture:"",
        coverPicture:"",
        followers:[],
        followings:[],
        isAdmin:false,
        desc:"Seventh Hokage",
        city:"Mumbai",
        from:"Maharastra",
        relationship:3
    },
    isFetching:false,
    error:false
}

//creating the context-api
export const AuthContext = createContext(INITIAL_STATE);

//wrapper where components are gonna use with context api

export const AuthContextProvider = ({children})=> {
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);

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