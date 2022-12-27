import React from "react";
import "./App.css";

import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ExpenseEntryItemList from "./components/ExpenseEntryItemList";
import ExpenseEntryItemForm from "./components/ExpenseEntryItemForm";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="list">Expense list</Link>
              </li>
              <li>
                <Link to="add">Expense add</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="list" element={<ExpenseEntryItemList />} />
            <Route path="add" element={<ExpenseEntryItemForm />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
