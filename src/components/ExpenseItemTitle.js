import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
font-size: 2rem;
color: hsl(153, 19%, 10%);
margin-left: 1rem;
`

export const ExpenseItemTitle = ({ title }) => {
    return (
        <TitleContainer>
            <h3>{title}</h3>
        </TitleContainer>
    )
}
