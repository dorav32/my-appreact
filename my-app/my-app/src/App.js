import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses";
import Clock from "./components/Clock";
import './App.css';
function App() {
  const [expense] = useState([
    { title: 'mazda', amount: 3000, date: new Date(2020, 2, 28) },
    { title: 'ford', amount: 2000, date: new Date(2021, 3, 28) },
    { title: 'nisan', amount: 1000, date: new Date(2022, 4, 28) },
    { title: 'honda', amount: 500, date: new Date(2023, 5, 28) },
  ]);
  const [history, setHistory] = useState(() => {
    // Load history from local storage if available
    const savedHistory = localStorage.getItem('history');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    // Save history to local storage whenever it changes
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  const addEntryToHistory = (newEntry) => {
    setHistory(prevHistory => [...prevHistory, {...newEntry, date: newEntry.date.toString()}]);
  };

  return (
    <div>
      <Clock />
      <Expenses items={expense} onAddEntry={addEntryToHistory} />
      <div className="history-container">  
        <h3 className="history-header">History of Entries</h3>  
        {history.map((entry, index) => (
          <div key={index} className="history-entry">{`${entry.title} - ${entry.amount} - ${new Date(entry.date).toLocaleDateString()}`}</div>  // Added class name here
        ))}
      </div>
    </div>
  );
}

export default App;
