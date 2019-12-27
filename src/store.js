import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userList: []
  },
  getters: {
    getUserList(state) {
      return state.userList;
    },
    getUserById: state => id => {
      console.log(state.userList);

      return state.userList.find(user => {
        return user.id == id;
      });
    }
  },
  mutations: {
    setUserList(state, payload) {
      state.userList = payload;
    }
  },
  actions: {
    updateUserList({ commit }) {
      axios
        .get("http://localhost:3000/users")
        .then(({ data }) => {
          console.log("updated");
          commit("setUserList", data);
        })
        .catch(() => {
          console.log("Ошибка загрузки");
        });
    },

    addUser({ dispatch }, payload) {
      axios.post("http://localhost:3000/users", payload).then(() => {
        dispatch("updateUserList");
      });
    },

    removeUser({ dispatch }, id) {
      axios.delete(`http://localhost:3000/users/${id}`).then(() => {
        dispatch("updateUserList");
      });
    },

    editUser({ dispatch }, payload) {
      const { id, name, surname } = payload;
      axios
        .patch(`http://localhost:3000/users/${id}`, { id, name, surname })
        .then(() => {
          dispatch("updateUserList");
        });
    }
  }
});
