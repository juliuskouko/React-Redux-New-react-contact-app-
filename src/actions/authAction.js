import User from "../components/User"

export const newloginUser =(user) => {
    return {
        type:"add_user",
        payload:User
    }
}