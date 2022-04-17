<template>
  <q-card>
    <q-card-section class="q-pa-none">
      <q-table
        title="登录列表"
        :rows="data"
        :columns="columns"
        row-key="name"
        :filter="filter"
        :pagination="{ rowsPerPage: 10 }"
      >
        <template v-slot:top-right>
          <q-input
            v-if="show_filter"
            filled
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="搜索"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import { list } from "src/api/user";

const columns = [
  {
    name: "login_id",
    label: "登录编号",
    align: "left",
    field: "loginId",
    sortable: true,
  },
  { name: "password", label: "密码", field: "password" },
  { name: "role", label: "类型", field: "role" },
  { name: "id", label: "用户ID", field: "userId" },
  { name: "name", label: "用户名", field: "name" },
];

export default defineComponent({
  name: "TableBasic",
  data: function () {
    return {
      data: [],
    };
  },
  created() {
    list().then((res) => {
      this.data = res.data;
    });
  },

  setup() {
    const show_filter = ref(false);

    return {
      filter: ref(""),
      show_filter: ref(true),
      columns,
    };
  },
});
</script>

<style scoped></style>
