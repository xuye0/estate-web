<template>
  <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
    <q-card-section class="text-h6 q-pa-sm">
      <div class="text-h6" style="background-color: indianred">删除楼盘</div>
    </q-card-section>

    <q-select
      filled
      v-model="model"
      :options="list"
      option-label="name"
      label="选择楼盘"
    />

    <div v-if="this.model.id !== undefined">
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
          <q-item-section> 房产名称 </q-item-section>
        </q-item>
        <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
          <q-item-section>
            <q-input
              type="input"
              dense
              outlined
              round
              v-model="model.name"
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
            <q-input
              type="input"
              dense
              outlined
              round
              v-model="model.cityId"
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
              v-model="model.type"
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
              v-model="model.price"
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
              v-model="model.websiteUrl"
              label="主页"
            />
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="red" @click="this.handleRemove()">删除楼盘 </q-btn>
      </q-card-actions>
    </div>
  </div>
</template>

<script>
import { remove_estate, all_estate } from "src/api/estate";

export default {
  name: "estateRemove",
  created() {
    this.fetch_data();
  },
  methods: {
    handleRemove() {
      remove_estate(this.model.id).then(() => {
        this.$router.push("/admin/estateList");
      });
    },
    fetch_data() {
      all_estate().then((res) => {
        this.list = res.data;
        this.model = this.list[0];
      });
    },
  },
  data() {
    return {
      model: {
        id: undefined,
        name: undefined,
        cityId: undefined,
        address: undefined,
        type: undefined,
        price: undefined,
        websiteUrl: undefined,
      },
      list: [
        {
          id: undefined,
          name: undefined,
          cityId: undefined,
          address: undefined,
          type: undefined,
          price: undefined,
          websiteUrl: undefined,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
