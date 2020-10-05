import React from "react";
import { Link } from "react-router-dom";
import "./css/Task.css";
import EditIcon from "../assets/images/lapiz-de-color.png";
import DeleteIcon from "../assets/images/compartimiento.png";

const Task = (props) => {
  return (
    <div className="Task">
      <div className="Task-title"> {props.title}</div>
      <div className="Task-content">{props.content}</div>
      <div className="Task-footer">
        <div className="Task-options">
          <div className="Task-option"></div>
          <div className="Task-option">
            <Link to={`/edit/${props.id}`}>
              <img src={EditIcon} alt="Editar" />
            </Link>
          </div>
          <div className="Task-option" onClick={() => props.onDelete(props.id)}>
            <img src={DeleteIcon} alt="Eliminar" />
          </div>
        </div>
        <cite className="Task-author">- {props.author}</cite>
      </div>
    </div>
  );
};

export default Task;
