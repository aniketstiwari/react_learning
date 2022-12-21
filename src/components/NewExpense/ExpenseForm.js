import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredtitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //different approach to combine multiple state
    // const [userInput, setUserInput] = useState({
    //     enteredtitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
       //if we use object to update multiple state then its our responsibility
       // to use spread operator or manually update the existing state
    //    setUserInput({
    //     ...userInput,
    //       enteredtitle: event.target.value,
    //    })

    //inorder to below approach it will always make use it uses the latest state
    // also when you have to update the count use anonymous functions instead of above syntax
    //    setUserInput((prevState) => {
    //     return { ...prevState, enteredtitle: event.target.value }
    //    })
    }

    const amountChangeHandler = (event) => {
         setEnteredAmount(event.target.value)
    //    setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    //    })   
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    //    setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    //    })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredtitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                      type="text" 
                      value={enteredtitle} 
                      onChange={titleChangeHandler} 
                     />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount}  min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;