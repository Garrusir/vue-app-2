<template>
  <div class="row card red lighten-5">
    <div class="col s12">
      <h5>Изменить пользователя</h5>
    </div>
    <add-form
      v-if="user"
      @save="saveUser"
      :firstName="user.name"
      :lastName="user.surname"
      :buttonName="'Сохранить'"
    />
  </div>
</template>
<script>
import AddForm from "../components/AddForm";

export default {
  components: {
    AddForm
  },
  computed: {
    user() {
      return this.$store.getters.getUserById(this.$route.params.id);
    }
  },
  methods: {
    saveUser({ name, surname }) {
      if (name && surname) {
        this.$store
          .dispatch("editUser", { id: this.$route.params.id, name, surname })
          .then(() => {
            this.$router.push("/");
          });
      }
    }
  }
};
</script>
