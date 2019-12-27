import Vue from "vue";
import Router from "vue-router";
import UserList from "./screens/UserList";
import UserAdd from "./screens/UserAdd";
import UserEdit from "./screens/UserEdit";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "UserList",
      path: "/",
      component: UserList
    },
    {
      name: "UserAdd",
      path: "/add",
      component: UserAdd
    },
    {
      name: "UserEdit",
      path: "/user/:id",
      component: UserEdit
    }
  ]
});
