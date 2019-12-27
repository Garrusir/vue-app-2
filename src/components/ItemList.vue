<template>
  <table class="item-list">
    <thead>
      <tr>
        <th class="sorted" @click="sortBy = 'id'">ID</th>
        <th class="sorted" @click="sortBy = 'name'">Имя</th>
        <th class="sorted" @click="sortBy = 'surname'">Фамилия</th>
        <th></th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(item, index) in sortedList"
        :key="item.id"
        :class="{ colored: index % 2 == 0 }"
      >
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.surname }}</td>
        <td @click="$emit('edit', item.id)" class="item-list__actions">
          <i class="material-icons">edit</i>
        </td>
        <td @click="$emit('remove', item.id)" class="item-list__actions">
          <i class="material-icons">delete</i>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    list: Array
  },
  data: () => ({
    sortBy: "id"
  }),
  computed: {
    sortedList() {
      let sortedList = this.list;
      return sortedList.sort((a, b) => {
        if (a[this.sortBy] > b[this.sortBy]) return 1;
        return -1;
      });
    }
  }
};
</script>
<style type="text/css">
.item-list__actions {
  width: 60px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 2px;
}
.item-list__actions:hover {
  color: #ee6e73;
  /*background-color: #f2f2f2;*/
}
.item-list__actions:active {
  color: #cd3c42;
  /*background-color: #d2d2d2;*/
}

.sorted:hover {
  cursor: pointer;
  border-bottom: 1px solid;
}
</style>
