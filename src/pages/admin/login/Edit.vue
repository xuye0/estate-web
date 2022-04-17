<template>
  <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
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
      {{ this.form }}
      <q-btn color="green" @click="this.handleUpdate()">更新</q-btn>
      <q-btn color="red" @click="this.handleDelete()">删除</q-btn>
    </q-card-actions>
  </div>
</template>

<script>
import { del, list, put } from "src/api/user";

export default {
  name: "StaffRemove",
  created() {
    this.fetch_data();
  },
  methods: {
    fetch_data() {
      list().then((res) => {
        this.list = res.data;
        this.form = this.list[0];
      });
    },
    handleDelete() {
      del(this.form.loginId).then(() => {
        this.fetch_data();
      });
    },
    handleUpdate() {
      put({ password: this.form.password, id: this.form.loginId }).then(() => {
        this.fetch_data();
      });
    },
  },

  data() {
    return {
      list: [
        {
          loginId: null,
          userId: null,
          name: null,
          password: null,
          role: null,
        },
      ],
      form: {
        loginId: null,
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
