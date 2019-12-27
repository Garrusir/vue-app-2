<template>
  <div id="app">
    <app-navigation />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppNavigation from "./components/AppNavigation.vue";

export default {
  name: "app",
  created() {
    this.$store.dispatch("updateUserList");
  },
  components: {
    AppNavigation
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
