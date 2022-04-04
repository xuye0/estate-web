<template>
  <q-card>
    <q-card-section class="q-pa-none">
      <q-table
        title="员工列表"
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
import { all_staff } from "src/api/staff";

const columns = [
  {
    name: "id",
    label: "id",
    align: "left",
    field: "id",
    sortable: true,
  },
  { name: "username", label: "用户名", field: "username" },
  { name: "position", label: "岗位", field: "position" },
  { name: "phone", label: "电话号码", field: "phone" },
  { name: "secondaryPhone", label: "手机号码", field: "secondaryPhone" },
  { name: "personalEmail", label: "个人邮箱", field: "personalEmail" },
  { name: "companyEmail", label: "工作邮箱", field: "companyEmail" },
  { name: "address", label: "地址", field: "address" },
  { name: "websiteUrl", label: "个人主页", field: "websiteUrl" },
];

export default defineComponent({
  name: "TableBasic",
  data: function () {
    return {
      data: [],
    };
  },
  created() {
    all_staff().then((res) => {
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
