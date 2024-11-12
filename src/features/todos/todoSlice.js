import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTodo, fetchTodos, remove, updateTodo } from "./todoService";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    allTodos: [],
    edit: { todo: {}, isEdit: false },
  },
  reducers: {
    removetodo: (state, action) => {
      return {
        ...state,
        allTodos: state.allTodos.filter((item) => item._id !== action.payload),
      };
    },
    edit: (state, action) => {
      return {
        ...state,
        edit: { todo: action.payload, isEdit: true },
      };
    },
  },
  //when promise pending set the state
  //reducer don't have access of promice only extra reducers having
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        (state.isLoading = false), (state.isError = false);
        state.allTodos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        (state.isLoading = false), (state.isError = true);
      })
      .addCase(addTodo.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        (state.isLoading = false), (state.isError = false);
        state.allTodos = [...state.allTodos, action.payload];
      })
      .addCase(addTodo.rejected, (state, action) => {
        (state.isLoading = false), (state.isError = true);
      })
      .addCase(deleteTodo.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        (state.isLoading = false), (state.isError = true);
      })
      .addCase(updateTodoThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateTodoThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.allTodos = state.allTodos.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
        state.edit = { todo: {}, isEdit: false };
      })
      .addCase(updateTodoThunk.rejected, (state, action) => {
        (state.isLoading = false), (state.isError = true);
      });
  },
});

//difference btween them
export const { removetodo, edit } = todoSlice.actions;
export default todoSlice.reducer;

// Get Data from server
//thunk having access of promise
export const getTodos = createAsyncThunk("FETCH/TODOS", async () => {
  try {
    return await fetchTodos();
  } catch (error) {
    console.log(error);
  }
});

//Create Data to Server

export const addTodo = createAsyncThunk("CREATE/TODO", async (formData) => {
  try {
    return await createTodo(formData);
  } catch (error) {
    console.log(error);
  }
});

//Remove data from Server
export const deleteTodo = createAsyncThunk("REMOVE/TODO", async (id) => {
  try {
    return await remove(id);
  } catch (error) {
    console.log(error);
  }
});

//Update todo
export const updateTodoThunk = createAsyncThunk(
  "UPDATE/TODO",
  async (formData) => {
    try {
      return await updateTodo(formData);
    } catch (error) {
      console.log(error);
    }
  }
);
