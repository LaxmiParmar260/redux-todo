import axios from "axios";

export const fetchTodos = async () => {
  const response = await axios.get("/api/todo");
  return response.data;
};

//Create todo
export const createTodo = async (formData) => {
  const response = await axios.post("/api/todo", formData);
  return response.data;
};

//remove todo
export const remove = async (id) => {
  console.log(id);
  const response = await axios.delete("/api/todo/" + id);
  return response.data;
};

//update todo
export const updateTodo = async (formData) => {
  const response = await axios.put("/api/todo/" + formData._id, formData);
  return response.data;
};
