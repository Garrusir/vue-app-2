<template>
  <div class="row card red lighten-5">
    <div class="col s12">
      <h5>Добавить пользователя</h5>
    </div>
    <add-form @save="addUser" :buttonName="'Добавить'" />
  </div>
</template>
<script>
import AddForm from "../components/AddForm";

export default {
  components: {
    AddForm
  },
  methods: {
    addUser({ name, surname }) {
      if (name && surname) {
        this.$store.dispatch("addUser", { name, surname }).then(() => {
          this.$router.push("/");
        });
      }
    }
  }
};
</script>
