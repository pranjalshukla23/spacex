import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//define initial state
const initialState = {
  posts: [],
  payload: [],
  currentPage: 1,
  postsPerPage: 1,
};

//thunks are middleware to do an async operation
//thunks automatically call extra reducers after execution
//thunk function
export const fetchPosts = createAsyncThunk(
  "posts/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://api.spacexdata.com/v3/history");
      return await res.json();
    } catch (error) {
      console.log(error);

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//thunks are middleware to do an async operation
//thunks automatically call extra reducers after execution
//thunk function
export const fetchPayload = createAsyncThunk(
  "payload/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://api.spacexdata.com/v3/payloads");
      return await res.json();
    } catch (error) {
      console.log(error);

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//define slice
const postSlice = createSlice({
  //slice name
  name: "cart",
  //initial state
  initialState,
  //reducers
  //reducers contains actions to modify state
  reducers: {
    //action
    addPosts: (state, action) => {
      state.posts = action.payload;
    },
    //action
    addCurrentPage: (state, action) => {
      console.log("payload", action.payload);
      state.currentPage = action.payload;
    },
    //action
    addPostsPerPage: (state, action) => {
      state.postsPerPage = action.payload;
    },
  },

  //extra reducers functions are automatically called by thunk functions
  // these functions get executed based on the status of thunk function
  extraReducers: (builder) => {
    builder

      //case 1
      //if status of thunk function is pending
      .addCase(fetchPosts.pending, (state, action) => {})

      //case 2
      //if status of thunk function is fulfilled
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })

      //case 3
      //if status of thunk function is rejected
      .addCase(fetchPosts.rejected, (state, action) => {})

      //case 4
      //if status of thunk function is pending
      .addCase(fetchPayload.pending, (state, action) => {})

      //case 5
      // if status of thunk function is fulfilled
      .addCase(fetchPayload.fulfilled, (state, action) => {
        state.payload = action.payload;
      })

      //case 6
      //if status of thunk function is rejected
      .addCase(fetchPayload.rejected, (state, action) => {});
  },
});

//export actions
export const { addPosts, addCurrentPage, addPostsPerPage } = postSlice.actions;

//export reducers
export default postSlice.reducer;