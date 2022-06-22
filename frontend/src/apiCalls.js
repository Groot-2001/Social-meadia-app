import axios from "axios";

export const LoginCalls = async (userCredentials,dispatch)=>{
    dispatch({type:"LOGIN_START"});
    try {
     await axios.post("auth/login",userCredentials)
     .then(res =>dispatch({type:"LOGIN_SUCCESS", payload:res.data}));
        
    } catch (err) {
        dispatch({type:"LOGIN_FAILURE", payload:err});
    }
};