import { LinearProgress, List } from "@mui/material";
import React, { useEffect } from "react";
import ListItemDetail from "./ListItemDetail";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../features/todos/todoSlice";

const ListGroup = () => {
  const dispatch = useDispatch();
  const { allTodos, isLoading } = useSelector((curState) => curState.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <List>
      {allTodos.map((todo) => (
        <ListItemDetail key={todo._id} todo={todo} />
      ))}
    </List>
  );
};

export default ListGroup;
