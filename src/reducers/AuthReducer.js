let initialState = {
    loginedInUsers : null
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case "add_user"

        :return {...state,loginedInUsers: action.payload}

        default : return state
    }
}

export default authReducer;