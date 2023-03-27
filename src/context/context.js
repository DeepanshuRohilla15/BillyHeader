import React, { useReducer, createContext  } from 'react';
import contextReducer from './contextReducer';

const initialState = [{ amount: 5, category: 'Savings',type: 'Income',date: '27-03-2023', id: '1'}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
      const [transactions, dispatch] = useReducer(contextReducer, initialState);

      const deleteTransaction = (id) => {
            dispatch({ type: 'DELETE_TRANSACTION', payload: id});
      }
      
      const addTransaction = (transaction) => {
            dispatch({ type: 'ADD_TRANSACTION', payload: transaction});
      }

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