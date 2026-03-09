import { useState } from 'react'


function App() {
    const [expenses, setExpenses] = useState([]);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");

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

    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
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

              <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
              >
                  <option value="Food">Food</option>
                  <option value="Groceries">Groceries</option>
                  <option value="Gas">Gas</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Bills">Bills</option>
                  <option value="Misc">Misc</option>
              </select>

              <button onClick={addExpense}>Add</button>
          </div>

          <h2>Expenses</h2>

          <ul>
              {expenses.map((expense) => (
                  <li key={expense.id}>
                      {expense.name} - ${expense.amount}
                      <button onClick={() => deleteExpense(expense.id)}>
                          Delete
                      </button>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default App
