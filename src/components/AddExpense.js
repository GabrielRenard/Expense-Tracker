import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
width: 40vw;
background-color: #507867;
min-width: 20rem;
padding: 1.5rem 1rem 1rem;

display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr;  
  grid-template-areas: 
    "input__title input__amount"
    "input__date submit__btn-container"; 
}
.input__title { grid-area: input__title; }
.input__amount { grid-area: input__amount; }
.input__date { grid-area: input__date;}
.submit__btn-container { 
    grid-area: submit__btn-container;
 }

border: none;
border-radius: 0.5rem;
margin-top: 1rem;

input {
    width: 100%;
    padding: 0.3rem;
    border: 1px solid gray;
    border-radius: 0.25rem;
    outline: none;
    transition: 0.5s;
    background-color: F4F0E4;
}

.input__date input {
    color: gray;
}

input:focus {
    border: 1px solid black;
}

div {
    margin: .5rem;
}

button {
    padding: 0.25rem;
    width: 100%;
    background: #7AC47B;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: 0.2s;
}

button:hover {
    background:hsl(121, 39%, 50%);
}
`

export const AddExpense = ({ onSaveExpenseFormData, addExpenseHandler }) => {

    const [inputTitle, setInputTitle] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const titleChangeHandler = (e) => {
        setInputTitle(e.target.value);
    }
    const amountChangeHandler = (e) => {
        setInputAmount(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setInputDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        }

        if (inputTitle && inputAmount && inputDate) {
            onSaveExpenseFormData(expenseData);
            setInputTitle('');
            setInputAmount('');
            setInputDate('');
        }
    }

    return (
        <Form onSubmit={submitHandler}>
            <div className='input__title'>
                {/* <label htmlFor="title">Title</label> */}
                <input type="text" placeholder='Enter title' onChange={titleChangeHandler} value={inputTitle} />
            </div>
            <div className='input__amount'>
                {/* <label htmlFor="amount">Amount</label> */}
                <input type="number" placeholder='Enter amount' onChange={amountChangeHandler} value={inputAmount}></input>
            </div>
            <div className='input__date'>
                {/* <label htmlFor="date">Date</label> */}
                <input type="date" onChange={dateChangeHandler} value={inputDate} min='2019-01-31' max='2022-12-31'></input>
            </div>
            <div className="submit__btn-container">
                <button type="submit">Submit</button>
            </div>
        </Form>
    )
}
