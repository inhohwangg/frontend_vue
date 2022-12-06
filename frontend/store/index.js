import Vuex from "vuex";

const store = () =>
  new Vuex.Store({
    state: {
      counter: 0,
      list: [],
    },
    mutations: {
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
  });

export default store;
