import { Box, Button, Divider, ListItem, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodos,
  removetodo,
  deleteTodo,
  edit,
} from "../features/todos/todoSlice";

const ListItemDetail = ({ todo }) => {
  const { isSuccess } = useSelector((state) => state.todos);

  const dispatch = useDispatch((state) => state.todos);

  const handleRemove = (id) => {
    dispatch(deleteTodo(id));
    // dispatch(getTodos())
    if (isSuccess) {
      dispatch(removetodo(id));
    }
  };

  const handleEdit = (todo) => {
    console.log(todo);
    dispatch(edit(todo));
  };

  return (
    <>
      <ListItem>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">{todo.title} </Typography>
          <Typography variant="body1">{todo.description} </Typography>
        </Box>
        <Box>
          <Button
            sx={{ margin: "0px 10px" }}
            variant="contained"
            color="warning"
            size="small"
            endIcon={<EditIcon />}
            onClick={() => handleEdit(todo)}
          >
            Edit
          </Button>
          <Button
            endIcon={<DeleteIcon />}
            variant="contained"
            color="error"
            size="small"
            onClick={() => handleRemove(todo._id)}
          >
            Delete
          </Button>
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

export default ListItemDetail;
