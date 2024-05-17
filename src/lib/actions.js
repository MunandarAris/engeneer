import { createSlice } from "@reduxjs/toolkit";

export const actionGlobal = createSlice({
  name: "actions",
  initialState: {
    status: "searchTask",
    tasks: [],
    edit: null,
    searchResult: [],
    isSearch: false,
  },
  reducers: {
    setIsAddTask: (state) => {
      state.status = "addTask";
    },
    setIsSearchTask: (state) => {
      state.status = "searchTask";
    },
    setIsEditTask: (state, action) => {
      state.status = "editTask";
      state.edit = action.payload;
    },
    addTask: (state, action) => {
      state.tasks = action.payload;
    },
    isDoneTask: (state, action) => {
      const findData = state.tasks.map((item) => {
        if (item?.id == action.payload) {
          return { ...item, isDone: true };
        }

        return item;
      });

      state.tasks = findData;
    },
    handleDeleteTask: (state, action) => {
      const filterData = state.tasks.map((item) => {
        if (item?.id != action.payload) {
          return item;
        }
      });

      state.tasks = filterData?.filter(Boolean);
    },
    editTask: (state, action) => {
      const findData = state.tasks.map((item) => {
        if (state?.edit?.id == item?.id) {
          return { ...item, task: action.payload };
        }

        return item;
      });

      state.tasks = findData;
    },
    handleSearchData: (state, action) => {
      const filters = state.tasks.filter((item) =>
        item.task.toLowerCase().includes(action.payload.toLowerCase())
      );

      state.searchResult = filters;
      state.isSearch = true;
    },

    handleClearSearch: (state) => {
      state.searchResult = [];
      state.isSearch = false;
    },
  },
});

export const {
  setIsAddTask,
  setIsSearchTask,
  addTask,
  isDoneTask,
  handleDeleteTask,
  setIsEditTask,
  editTask,
  handleSearchData,
  handleClearSearch,
} = actionGlobal.actions;

export default actionGlobal.reducer;
