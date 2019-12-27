<template>
  <div class="card-wrapper">
    <div class="row">
      <item-list
        v-if="userList.length != 0"
        :list="userList"
        @remove="removeUser($event)"
        @edit="editUser($event)"
      />
    </div>
  </div>
</template>

<script>
import ItemList from "../components/ItemList.vue";

export default {
  name: "app",
  components: {
    ItemList
  },
  created() {
    this.$store.dispatch("updateUserList");
  },
  computed: {
    userList() {
      return this.$store.getters.getUserList;
    }
  },
  methods: {
    removeUser(id) {
      this.$store.dispatch("removeUser", id);
    },
    editUser(id) {
      this.$router.push(`/user/${id}`);
      // this.$store.dispatch('removeUser', id);
    }
  }
};
</script>
