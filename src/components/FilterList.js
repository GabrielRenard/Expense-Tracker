import React from 'react'
import styled from 'styled-components'

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

label {
    margin-right: 5rem;
    color: hsl(121, 39%, 90%);
}

select {
    background: #7AC47B;
    border: none;
    padding: 0.5rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: 0.2s;
}

select:hover {
    background:hsl(121, 39%, 50%);
}
`

export const FilterList = ({ onChangeFilter, selected, data }) => {

    const filterHandler = (e) => {
        onChangeFilter(e.target.value);
    }

    return (
        <FilterContainer>
            <label htmlFor="year">Filter results</label>
            <select name="year" onChange={filterHandler} value={selected} placeholder="Year">
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </FilterContainer>
    )
}
