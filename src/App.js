import { upload } from "@testing-library/user-event/dist/upload";
import React, { useState } from "react";
import styled from "styled-components";
import { AddExpense } from "./components/AddExpense";
import { ExpenseList } from "./components/ExpenseList";

const AppContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: auto;
align-items: center;
overflow: inherit;
`
const data =
  [
    {
      title: 'test',
      amount: 0,
      date: new Date(),
      id: '1'
    }
  ]

function App() {

  const [data, setData] = useState([]);

  const saveExpenseFormDataHandler = (expenseFormData) => {
    const expenseData = {
      ...expenseFormData,
      id: Math.random().toString()
    };
    setData((prevExpense) => {
      return [expenseData, ...prevExpense];
    })
    console.log(data.length)
  };


  const deleteExpense = (id) => {
    console.log(`clicked ${id}`)
  }



  return (
    <>
      <AppContainer>
        <AddExpense
          onSaveExpenseFormData={saveExpenseFormDataHandler}
        />
        <ExpenseList data={data} deleteExpense={deleteExpense} />
      </AppContainer>
    </>
  );
}

export default App;
