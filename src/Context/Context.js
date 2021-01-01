import React,{useReducer,createContext} from 'react'

import contextReducer from './ContextReducer'


const initialState= JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(initialState);


export const Provider = ({children})=>{
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    //Action Creater
    const deleteTransaction =(id)=>{
        dispatch({type:'DELETE_TRANSACTION',payload: id})
    }

    //Add Transaction

    const addTransaction=(transaction)=>{
        dispatch({type:'ADD_TRANSACTION',payload:transaction})
    }

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions
        }}>
                {children}
        </ExpenseTrackerContext.Provider>
    )
}