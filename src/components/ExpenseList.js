import React, { useState } from 'react'
import { ExpenseItem } from './ExpenseItem'
import styled from 'styled-components'
import { FilterList } from './FilterList'


const ExpenseListContainer = styled.div`
display:flex;
flex-direction: column;
border: none;
border-radius: 0.5rem;
width: 60%;
max-width: 1200px;
padding: 0.5rem;
margin: 1rem;
background-color: #507867;

@media screen and (max-width: 600px) {
    width: 90vw;
}
`
export const ExpenseList = ({ data, deleteExpense }) => {
    const [year, setYear] = useState('2022')

    const filterChangeHandler = selectedYear => {
        setYear(selectedYear);
    };

    const filteredData = data.filter((expense) => {
        return expense.date.getFullYear().toString() === year;
    })

    if (data.length > 0) {
        return (
            <ExpenseListContainer>
                <FilterList selected={year} onChangeFilter={filterChangeHandler} data={data} />
                {filteredData.map((item) =>
                    <ExpenseItem key={item.id} title={item.title} date={item.date} amount={item.amount} deleteExpense={deleteExpense} />
                )}
            </ExpenseListContainer>
        )
    }
}

