<template>
  <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
    <q-card-section class="text-h6 q-pa-sm">
      <div class="text-h6">添加员工</div>
    </q-card-section>
    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> 用户id </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.userId"
            label="用户id"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> 用户名 </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.username"
            label="用户名"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> 岗位 </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.position"
            label="岗位"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> 电话号码 </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.phone"
            label="电话号码"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> 手机号码 </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.secondaryPhone"
            label="手机号码"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> 个人邮箱 </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.personalEmail"
            label="个人邮箱"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> 工作邮箱 </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.companyEmail"
            label="工作邮箱"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> 地址 </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.address"
            label="地址"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> 个人主页 </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.websiteUrl"
            label="个人主页"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn color="primary" @click="this.handleSubmit()">提交员工 </q-btn>
    </q-card-actions>
  </div>
</template>

<script>
import { add_staff } from "src/api/staff";

export default {
  name: "StaffAdd",
  methods: {
    handleSubmit() {
      add_staff(this.form);
    },
  },
  data() {
    return {
      form: {
        id: undefined,
        userId: undefined,
        username: undefined,
        position: undefined,
        phone: undefined,
        secondaryPhone: undefined,
        personalEmail: undefined,
        companyEmail: undefined,
        address: undefined,
        websiteUrl: undefined,
      },
    };
  },
};
</script>

<style scoped></style>
