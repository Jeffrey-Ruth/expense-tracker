import { useState } from 'react'


function App() {
    const [expenses, setExpenses] = useState([]);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const addExpense = () => {
        if (!name || !amount) return;

        const newExpense = {
            id: Date.now(),
            name: name,
            amount: amount
        };

        setExpenses([...expenses, newExpense]);
        setName("");
        setAmount("");
    };

  return (
      <div style={{ padding: "20px" }}>
          <h1>Expense Tracker</h1>

          <div>
              <input
                  type="text"
                  placeholder="Expense name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />

              <input
                  type="number"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
              />

              <button onClick={addExpense}>Add Expense</button>
          </div>

          <h2>Expenses</h2>

          <ul>
              {expenses.map((expense) => (
                  <li key={expense.id}>
                      {expense.name} - ${expense.amount}
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default App
