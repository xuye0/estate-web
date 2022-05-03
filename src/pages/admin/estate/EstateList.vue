<template>
  <q-card>
    <q-card-section class="q-pa-none">
      <q-table
        title="楼盘列表"
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
import { all_estate } from "src/api/estate";

const columns = [
  {
    name: "id",
    label: "id",
    align: "left",
    field: "id",
    sortable: true,
  },
  { name: "name", label: "房产名称", field: "name" },
  { name: "address", label: "地址", field: "address" },
  { name: "cityId", label: "城市id", field: "cityId" },
  { name: "type", label: "类型", field: "type" },
  { name: "price", label: "价格", field: "price" },
  { name: "websiteUrl", label: "链接", field: "websiteUrl" },
];

export default defineComponent({
  name: "TableBasic",
  data: function () {
    return {
      data: [],
    };
  },
  created() {
    all_estate().then((res) => {
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
