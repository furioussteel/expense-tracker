import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [input,setInput] = useState('');
  const [amount,setAmount] = useState('');
  const [expenses,setExpenses] = useState([]);

  const addExpense = () => {
    if(!input || !amount) {
      return;
    }
    const newExpense = {
      id: expenses.length + 1,
      title: input,
      amount : amount
    };
    setExpenses([...expenses,newExpense])
    setInput('')
    setAmount('')
  }
  const deleteHandle = (id) => {
    setExpenses(expenses.filter((expenses) => expenses.id !== id))
  }
  return (
    <div className='container'>
      <div>
        <h2>Expense Tracker</h2>
        <div>
          <input type="text" placeholder='Expense' onChange={(e) => setInput(e.target.value)}/>
          <input type="number" placeholder='Amount' onChange={(e) => setAmount(e.target.value)}/>
          <button onClick={addExpense}>Add Expense</button>
        </div>
        <ul className='expense-set'>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <span>{expense.title}</span>
              <span>{expense.amount}</span>
              <button onClick={()=>deleteHandle(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
