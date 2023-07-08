import { Dispatch } from "redux"
import axios from "axios"
import { UserActionTypes } from '../reducers/userReducer'


export const fetchUsers = () => {
    return async (dispatch:Dispatch<UserAction>) => {
        try{
            dispatch(FetchUsersAC())
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch(FetchUsersSuccessAC(response.data))
        }catch(e){
            dispatch(FetchUsersErrorAC('Some error occured'))
        }
    }
}

const FetchUsersAC = () => ({type:UserActionTypes.FETCH_USERS} as const)
const FetchUsersSuccessAC = (payload:any[]) => ({type:UserActionTypes.FETCH_USERS_SUCCESS, payload} as const)
const FetchUsersErrorAC = (payload: string) => ({type:UserActionTypes.FETCH_USERS_ERROR,  payload }as const)

type FetchUsersActionType = ReturnType<typeof FetchUsersAC>
type FetchUsersSuccessType = ReturnType<typeof FetchUsersSuccessAC>
type FetchUsersErrorType = ReturnType<typeof FetchUsersErrorAC>

export type UserAction = FetchUsersActionType | FetchUsersSuccessType | FetchUsersErrorType;