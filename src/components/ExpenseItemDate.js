import React from 'react'
import styled from 'styled-components';

const DateContainer = styled.div`
border: none;
border-radius: 0.25rem;
padding: 0.25rem;
width: 3rem;
background-color: #6B3B32;
color:hsl(9, 36%, 90%);

.flex{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.month {
    font-size: 1rem;
}

.day {
    font-size: 1.25rem;
}

.year {
    font-size: 0.75rem;
}

`

export const ExpenseItemDate = ({ date }) => {
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });

    return (
        <DateContainer>
            <div className="flex">
                <h4 className='month'>{month}</h4>
                <h4 className='day'>{day}</h4>
                <h4 className='year'>{year}</h4>
            </div>
        </DateContainer>
    )
}
