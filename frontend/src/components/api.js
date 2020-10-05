const api = {};
const URL = "http://localhost:4000/api";

api.getTasks = async () => {
  try {
    const response = await fetch(`${URL}/tasks`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

api.createTask = async (task) => {
  try {
    await fetch(`${URL}/tasks`, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

api.getTask = async (task) => {
  try {
    const response = await fetch(`${URL}/tasks/${task}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

api.updateTask = async (task) => {
  try {
    await fetch(`${URL}/tasks/${task._id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

api.deleteTask = async (task) => {
  try {
    await fetch(`${URL}/tasks/${task}`, { method: "DELETE" });
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export default api;
