<template>
  <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
    <q-card-section class="text-h6 q-pa-sm">
      <div class="text-h6">
        <div style="background-color: grey">更新员工</div>
      </div>
    </q-card-section>

    <q-select
      filled
      v-model="model"
      :options="list"
      option-label="username"
      label="选择员工"
    />

    <div v-if="this.model.id !== undefined">
      <q-card-section class="q-pa-sm row">
        <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
          <q-item-section> 用户id </q-item-section>
        </q-item>
        <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
          <q-item-section>
            <q-input
              type="input"
              readonly
              dense
              outlined
              round
              v-model="model.userId"
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
              v-model="model.username"
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
              v-model="model.position"
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
              v-model="model.phone"
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
              v-model="model.secondaryPhone"
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
              v-model="model.personalEmail"
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
              v-model="model.companyEmail"
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
              v-model="model.address"
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
              v-model="model.websiteUrl"
              label="个人主页"
            />
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="grey" @click="this.handleEdit()">更新员工 </q-btn>
      </q-card-actions>
    </div>
  </div>
</template>

<script>
import { all_staff, edit_staff } from "src/api/staff";

export default {
  name: "StaffRemove",
  created() {
    this.fetch_data();
  },
  methods: {
    handleEdit() {
      edit_staff(this.model);
    },
    fetch_data() {
      all_staff().then((res) => {
        this.list = res.data;
        this.model = this.list[0];
      });
    },
  },
  data() {
    return {
      model: {
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
      list: [
        {
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
      ],
    };
  },
};
</script>

<style scoped></style>
