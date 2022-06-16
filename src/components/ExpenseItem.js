import React from 'react'
import './ExpenseItem.css';
import styled from 'styled-components';
import { ExpenseItemDate } from './ExpenseItemDate';
import { ExpenseItemTitle } from './ExpenseItemTitle';
import { ExpenseItemAmount } from './ExpenseItemAmount';
import { AiFillDelete } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

.delete-icon {
    font-size: 1.5rem;
    margin: 1rem;
    color:  hsl(153, 19%, 10%);
    cursor: pointer;
    transition: 0.2s;
}

.delete-icon:hover {
    color: hsl(153, 19%, 0%);
    transform: scale(1.1);
}

.check-icon {
    font-size: 1.3rem;
    color:  hsl(153, 19%, 10%);
    cursor: pointer;
    transition: 0.2s;
}

.check-icon:hover {
    color: hsl(153, 19%, 0%);
    transform: scale(1.1);
}

`

const ExpenseItemContainer = styled.div`
    border: none;
    border-radius: .25rem;
    padding: .25rem;
    width: 100%;
    margin-top: 0.5rem;
    background-color: #7BB89F;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
    
    .flex {
        display: flex;
        column-gap: 1rem;
        align-items: center;
    }
`

export const ExpenseItem = ({ title, date, amount, deleteExpense, key }) => {

    return (
        <Container>
            <ExpenseItemContainer>
                <div className='flex'>
                    <ExpenseItemDate date={date} />
                    <ExpenseItemTitle title={title} />
                    <ExpenseItemAmount amount={amount} />
                </div>
            </ExpenseItemContainer >
        </Container >
    )
}
