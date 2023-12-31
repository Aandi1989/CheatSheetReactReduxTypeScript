import { useDispatch } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { RootState } from "../store/reducers"
import { AnyAction, bindActionCreators } from "redux"
import  ActionCreators from '../store/action-creators/index'

const useAppDispatch = () => useDispatch<ThunkDispatch<RootState,unknown,AnyAction>>()

export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}