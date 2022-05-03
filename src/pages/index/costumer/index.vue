<template>
  <q-card>
    <q-btn color="green" @click="this.handleClick()">添加客户</q-btn>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">添加客户</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="form.name"
            label="姓名"
            autofocus
            @keyup.enter="prompt = false"
          />
          <q-input
            dense
            type="number"
            v-model="form.age"
            label="年龄"
            autofocus
            @keyup.enter="prompt = false"
          />
          <q-input
            dense
            v-model="form.description"
            label="描述"
            autofocus
            @keyup.enter="prompt = false"
          />
          <q-input
            dense
            v-model="form.phone"
            label="手机号"
            autofocus
            @keyup.enter="prompt = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="取消" v-close-popup />
          <q-btn flat label="添加" @click="this.handleSave()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-card-section class="q-pa-none">
      <q-table
        title="客户列表"
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
import { all, save } from "src/api/customer";

const columns = [
  {
    name: "id",
    label: "id",
    align: "left",
    field: "id",
    sortable: true,
  },
  { name: "name", label: "用户名", field: "name" },
  { name: "age", label: "年龄", field: "age" },
  { name: "phone", label: "电话号码", field: "phone" },
  { name: "description", label: "描述", field: "description" },
  { name: "updateTime", label: "更新时间", field: "updateTime" },
];

export default defineComponent({
  name: "TableBasic",
  data: function () {
    return {
      data: [],
      form: {
        id: "",
        name: "",
        age: "",
        phone: "",
        description: "",
      },
      prompt: false,
    };
  },
  methods: {
    fetch_data() {
      all().then((res) => {
        this.data = res.data;
      });
    },
    handleClick() {
      this.prompt = true;
    },
    handleSave() {
      save(this.form).then((res) => {
        if (res.data === 1) {
          this.prompt = false;
          this.fetch_data();
        }
      });
    },
  },
  created() {
    this.fetch_data();
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
