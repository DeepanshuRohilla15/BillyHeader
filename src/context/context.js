import React, { useReducer, createContext  } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) ||  [[{"amount":125,"category":"Clothes","type":"Expense","date":"2023-03-27","id":"48dd9340-0060-40d2-973d-8c7126741010"},{"amount":200,"category":"Gifts","type":"Income","date":"2023-03-27","id":"997e4d00-0798-4752-9fd3-7837de7c91af"},{"amount":50,"category":"Lottery","type":"Income","date":"2023-03-27","id":"b58dfaf6-8b3a-459d-b6e1-9c4e76ff5656"},{"amount":1000,"category":"Salary","type":"Income","date":"2023-03-28","id":"f31dd374-3045-4db0-900b-db79ebce5bff"},{"amount":1000,"category":"Pets","type":"Expense","date":"2023-04-03","id":"9f18ae50-c260-49a8-b78e-e0dde57bdef5"}]];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
      const [transactions, dispatch] = useReducer(contextReducer, initialState);

      const deleteTransaction = (id) => {
            dispatch({ type: 'DELETE_TRANSACTION', payload: id});
      }
      
      const addTransaction = (transaction) => {
            dispatch({ type: 'ADD_TRANSACTION', payload: transaction});
      }

      const balance = transactions.reduce((acc,currVal) => {
            return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
      }, 0);

      return(
            <ExpenseTrackerContext.Provider value={{
                  deleteTransaction,
                  addTransaction,
                  transactions
             }}>
                  {children}
            </ExpenseTrackerContext.Provider>
      )
}