import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, edit, updateTodoThunk } from "../features/todos/todoSlice";

const Form = () => {
  const { edit } = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    edit.isEdit
      ? dispatch(updateTodoThunk({ _id: edit.todo._id, title, description }))
      : dispatch(
          addTodo({
            title,
            description,
          })
        );

    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    setTitle(edit.todo.title);
    setDescription(edit.todo.description);
  }, [edit]);

  return (
    <form style={{ margin: "20px 0px" }} onSubmit={(e) => handleSubmit(e)}>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        variant="outlined"
        label="Enter Title"
        fullWidth
      />
      <TextField
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        sx={{ margin: "10px 0px" }}
        variant="outlined"
        label="Enter Description"
        multiline
        rows={5}
        fullWidth
      />
      <Button type="submit" variant="contained" color="success" fullWidth>
        Save
      </Button>
    </form>
  );
};

export default Form;
