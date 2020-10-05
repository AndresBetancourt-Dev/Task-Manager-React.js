import React from "react";
import { Form as BootstrapForm, Button } from "react-bootstrap";
import "./css/Form.css";

const Form = (props) => {
  return (
    <BootstrapForm>
      <h2 className="Form-title">{props.type} Task</h2>
      <BootstrapForm.Group controlId="Title">
        <BootstrapForm.Label className="Form-label">Title</BootstrapForm.Label>
        <BootstrapForm.Control
          onChange={props.onChange}
          type="text"
          name="title"
          placeholder="Please type the Task title here..."
          value={props.title}
        />
      </BootstrapForm.Group>

      <BootstrapForm.Group controlId="Content">
        <BootstrapForm.Label className="Form-label">
          Content
        </BootstrapForm.Label>
        <BootstrapForm.Control
          onChange={props.onChange}
          type="text"
          placeholder="Please type the Task content here..."
          name="content"
          value={props.content}
        />
      </BootstrapForm.Group>

      <BootstrapForm.Group controlId="Author">
        <BootstrapForm.Label className="Form-label">
          Author
        </BootstrapForm.Label>
        <BootstrapForm.Control
          onChange={props.onChange}
          type="text"
          name="author"
          placeholder="Please type the Task author here..."
          value={props.author}
        />
      </BootstrapForm.Group>
      <Button
        className="Form-button"
        type="submit"
        onClick={props.handleSubmit}
      >
        Submit
      </Button>
    </BootstrapForm>
  );
};

export default Form;
