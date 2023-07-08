import { Dispatch } from "redux"
import axios from "axios"
import { TodoActionTypes } from "../reducers/todoReducer"


export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch:Dispatch<TodoAction>) => {
        try{
            dispatch(FetchTodoAC())
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params:{_page: page, _limit:limit}
            })
            dispatch(FetchTodoSuccessAC(response.data))
        }catch(e){
            dispatch(FetchTodoErrorAC('Some error occured in todo'))
        }
    }
}

export const setTodoPageAC = (page: number) => ({type: TodoActionTypes.SET_TODO_PAGE, payload:page} as const)
const FetchTodoAC = () => ({type: TodoActionTypes.FETCH_TODOS}as const)
const FetchTodoSuccessAC = (payload:any[]) => ({type:TodoActionTypes.FETCH_TODOS_SUCCESS, payload} as const)
const FetchTodoErrorAC = (payload:string) => ({ type:TodoActionTypes.FETCH_TODOS_ERROR, payload} as const)

type FetchTodoActionType = ReturnType<typeof FetchTodoAC>
type FetchTodoSuccessType = ReturnType<typeof FetchTodoSuccessAC>
type FetchUsersErrorType = ReturnType<typeof FetchTodoErrorAC>
type SetTodoPageType = ReturnType<typeof setTodoPageAC>

export type TodoAction = FetchTodoActionType | FetchTodoSuccessType | FetchUsersErrorType | SetTodoPageType;