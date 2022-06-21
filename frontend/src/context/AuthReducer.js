const AuthReducer = (state,action)=>{
    switch(action.type){
        case "LOGIN_START":
            return {
                user:null,
                isFetching:true,
                error:false
            };
        case "LOGIN_SUCCESS":
            return {
                user:action.Reducer,
                isFetching:false,
                error:false
            };
        case "LOGIN_FAILURE":
            return {
                user:null,
                isFetching:false,
                error:action.Reducer
                };
        default: 
            return state;
    }
}

export default AuthReducer;