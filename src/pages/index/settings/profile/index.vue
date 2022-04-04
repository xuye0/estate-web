<template>
  <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
    <q-card-section class="text-h6">
      <div class="text-h6">修改个人资料</div>
    </q-card-section>
    <q-card-section class="q-pa-sm">
      <q-list class="row">
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input dense v-model="user_details.username" label="用户名" />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input dense v-model="user_details.position" label="岗位" />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input dense v-model="user_details.phone" label="电话号码" />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input
              dense
              v-model="user_details.secondaryPhone"
              label="手机号码"
            />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input
              dense
              v-model="user_details.personalEmail"
              label="个人邮箱"
            />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input
              dense
              v-model="user_details.companyEmail"
              label="工作邮箱"
            />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input dense v-model="user_details.websiteUrl" label="个人主页" />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input
              autogrow
              dense
              v-model="user_details.address"
              label="地址"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn color="primary" @click="handleUpdate()">修改个人信息</q-btn>
    </q-card-actions>
  </div>
</template>

<script>
import { me, update_me } from "src/api/staff";

export default {
  name: "SettingsProfile",
  data() {
    return {
      user_details: {
        username: undefined,
        position: undefined,
        phone: undefined,
        secondaryPhone: undefined,
        personalEmail: undefined,
        companyEmail: undefined,
        websiteUrl: undefined,
        address: undefined,
      },
    };
  },
  mounted() {
    this.fetch_data();
  },
  methods: {
    fetch_data() {
      me().then((response) => {
        this.user_details = response.data;
      });
    },
    handleUpdate() {
      update_me(this.user_details).then(() => {
        this.fetch_data();
      });
    },
  },
};
</script>

<style scoped></style>
