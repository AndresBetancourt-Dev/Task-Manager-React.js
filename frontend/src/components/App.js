import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TaskList from "../pages/TaskList";
import CreateTask from "../pages/CreateTask";
import EditTask from "../pages/EditTask";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={TaskList} />
        <Route exact path="/create" component={CreateTask} />
        <Route exact path="/edit/:id" component={EditTask} />
      </Layout>
    </Router>
  );
}

export default App;
