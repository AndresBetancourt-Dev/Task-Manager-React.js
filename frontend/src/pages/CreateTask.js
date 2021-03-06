import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Form from "../components/Form";
import api from "../components/api";
class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      task: {},
      error: null,
    };
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

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.createTask(this.state.task);
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
            type={"Create"}
            handleSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />
        </Container>
      </React.Fragment>
    );
  }
}
export default CreateTask;
