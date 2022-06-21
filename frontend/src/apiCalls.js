import axios from "axios";

export const LoginCalls = async (userCredentials,dispatch)=>{
    dispatch({type:"LOGIN_START"});
    try {
        const res = await axios.post("auth/login",userCredentials);
        
        dispatch({type:"LOGIN_SUCCESS", Reducer:res.data});
    } catch (err) {
        dispatch({type:"LOGIN_FAILURE", Reducer:err});
    }
};