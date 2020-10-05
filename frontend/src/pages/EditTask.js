import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Form from "../components/Form";
import api from "../components/api";

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      task: {},
      error: null,
    };
  }

  componentDidMount() {
    this.fetchTask();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      task: {
        ...this.state.task,
        [name]: value,
      },
    });
  };

  fetchTask = async () => {
    this.setState({ loading: true, error: null });
    try {
      const task = await api.getTask(this.props.match.params.id);
      this.setState({ loading: false, task: task });
    } catch (error) {
      this.setState({ loading: false, error: error });
      console.log(error.message);
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.updateTask(this.state.task);
      this.props.history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    if (this.state.loading) {
      return null;
    }
    return (
      <React.Fragment>
        <Container>
          <Form
            type={"Edit"}
            onChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            title={this.state.task.title}
            content={this.state.task.content}
            author={this.state.task.author}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default EditTask;
