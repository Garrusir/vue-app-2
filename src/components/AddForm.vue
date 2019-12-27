<template>
  <form class="col s12 ">
    <div class="row">
      <div class="input-field col s12">
        <input id="first_name" type="text" class="validate" v-model="name" />
        <label for="first_name" :class="{ active: name }">Имя</label>
      </div>
      <div class="input-field col s12">
        <input id="last_name" type="text" class="validate" v-model="surname" />
        <label for="last_name" :class="{ active: surname }">Фамилия</label>
      </div>
      <div class="input-field col s12">
        <a
          class="waves-effect waves-light btn col s12 red lighten-1"
          @click="save"
          >{{ buttonName }}</a
        >
      </div>
    </div>
  </form>
</template>

<script type="text/javascript">
export default {
  name: "add-form",
  created() {
    if (this.firstName && this.lastName) {
      this.name = this.firstName;
      this.surname = this.lastName;
    }
  },
  data: () => ({
    name: "",
    surname: ""
  }),
  props: ["buttonName", "firstName", "lastName"],
  methods: {
    save() {
      if (this.name && this.surname) {
        this.$emit("save", {
          name: this.name,
          surname: this.surname
        });
      }
    }
  }
};
</script>
<style type="text/css"></style>
