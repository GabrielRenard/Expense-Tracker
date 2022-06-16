import React from 'react'
import styled from 'styled-components'

const AmountContainer = styled.div`
display: flex;
margin: 0 0 0 auto;
height: 4rem;
justify-content: center;
align-items: center;
border: none;
border-radius: 0.25rem;
padding: 0.25rem;
width: auto;
background: #6B3B32;
color:  hsl(9, 36%, 90%);

`
export const ExpenseItemAmount = ({ amount }) => {
    return (
        <AmountContainer>
            <h4>${amount}</h4>
        </AmountContainer>
    )
}
