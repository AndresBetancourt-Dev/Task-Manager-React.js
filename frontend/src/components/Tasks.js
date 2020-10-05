import React from "react";
import { Row, Col } from "react-bootstrap";
import Task from "./Task";
import api from "./api";

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.getTasks();
      this.setState({ loading: false, tasks: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleDelete = async (id) => {
    await api.deleteTask(id);
    this.fetchData();
  };

  render() {
    if (this.state.loading) {
      return null;
    }
    return (
      <Row>
        {this.state.tasks.map((task) => (
          <Col key={task._id} sm lg={4}>
            <Task
              id={task._id}
              title={task.title}
              content={task.content}
              author={task.author}
              onDelete={this.handleDelete}
            />
          </Col>
        ))}
      </Row>
    );
  }
}

export default Tasks;
