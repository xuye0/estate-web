<template>
  <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
    <q-card-section class="q-pa-sm">
      <div class="text-h6">
        <div>请选择要添加的用户类型</div>
        <q-btn-toggle
          v-model="this.role"
          toggle-color="primary"
          @click="fetch_data()"
          :options="[
            { label: '员工', value: 'staff' },
            { label: '顾客', value: 'customer' },
          ]"
        />
      </div>
    </q-card-section>

    <q-card-section class="q-pa-sm"> </q-card-section>

    <q-select
      filled
      v-model="form"
      :options="list"
      option-label="name"
      label="选择用户"
    />
    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> id </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.userId"
            label="id"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> 名字 </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.name"
            disable
            label="名字"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> 密码 </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.password"
            label="密码"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn color="green" @click="this.handleSubmit()">保存</q-btn>
    </q-card-actions>
  </div>
</template>

<script>
import { save, unable_login_staff_list } from "src/api/user";

export default {
  name: "StaffAdd",
  created() {
    this.fetch_data();
  },
  methods: {
    fetch_data() {
      unable_login_staff_list(this.role).then((res) => {
        this.list = res.data;
        this.form = this.list[0];
      });
    },
    handleSubmit() {
      this.form.role = this.role;
      save(this.form).then((res) => {
        this.fetch_data(this.role);
      });
    },
  },
  data() {
    return {
      role: "staff",
      list: [
        {
          id: null,
          name: null,
        },
      ],
      form: {
        userId: null,
        name: null,
        password: null,
        role: null,
      },
    };
  },
};
</script>

<style scoped></style>
