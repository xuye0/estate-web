<template>
  <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
    <q-card-section class="text-h6 q-pa-sm">
      <div class="text-h6" style="background-color: limegreen">添加楼盘</div>
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
        <q-item-section> 房产名称 </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.name"
            label="房产名称"
          />
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> 城市 </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-select
            dense
            outlined
            round
            v-model="form.cityId"
            :options="city_options"
            option-label="name"
            option-value="id"
            emit-value
            label="城市"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> 类型 </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.type"
            label="类型"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> 价格 </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="number"
            dense
            outlined
            round
            v-model="form.price"
            label="价格"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> 主页 </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.websiteUrl"
            label="主页"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn color="primary" @click="this.handleSubmit()">添加 </q-btn>
    </q-card-actions>
  </div>
</template>

<script>
import { add_estate } from "src/api/estate";
import { citys } from "src/api/city";

export default {
  name: "estateAdd",
  created() {
    citys().then((res) => {
      this.city_options = res.data;
    });
  },
  methods: {
    handleSubmit() {
      add_estate(this.form);
    },
  },
  data() {
    return {
      city_options: {},
      form: {
        id: undefined,
        name: undefined,
        cityId: undefined,
        address: undefined,
        type: undefined,
        price: undefined,
        websiteUrl: undefined,
      },
    };
  },
};
</script>

<style scoped></style>
