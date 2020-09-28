import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import TaskList from "./pages/TaskList";
import CreateTask from "./pages/CreateTask";
import CreateUser from "./pages/CreateUser";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={TaskList} />
        <Route exact path="/create" component={CreateTask} />
        <Route exact path="/edit/:id" component={CreateTask} />
        <Route exact path="/user" component={CreateUser} />
      </Layout>
    </Router>
  );
}

export default App;
