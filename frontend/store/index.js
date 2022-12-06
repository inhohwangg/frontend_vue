import Vuex from "vuex";
import axios from "axios";

const store = () =>
  new Vuex.Store({
    state: {
      counter: 0,
      list: [],
      testData: "",
    },
    mutations: {
      setMore(state, data) {
        state.testData = data;
      },
      increment(state) {
        state.counter++;
      },
      listAdd(state, text) {
        state.list.push({
          text: text,
          done: false,
        });
      },
      remove(state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1);
      },
      toggle(state, todo) {
        todo.done = !todo.done;
      },
    },
    actions: {
      getData(store) {
        axios
          .get("http://localhost:8000/api/postRead")
          .then((data) => {
            console.info(data.data);
          })
          .catch((err) => console.error(err));
      },
    },
  });

export default store;
