<template>
  <q-layout
    view="lHh Lpr lFf"
    style="background: linear-gradient(135deg, #5b6a82 10%, #162b4d 100%)"
  >
    <q-header class="bg-transparent text-white">
      <q-toolbar class="q-pa-md">
        <q-toolbar-title>必看好房，周周上新</q-toolbar-title>
        <q-space />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <section
        style="min-height: 25vh"
        class="flex text-white flex-center layout_bg"
      >
        <div style="position: relative">
          <div class="text-h1 text-center">连接每个家的故事</div>
          <div class="text-h5 text-center">在售新房楼盘 795 个</div>
        </div>
      </section>
      <section class="q-pb-lg">
        <div class="row q-col-gutter-sm q-px-sm">
          <div
            class="col-lg-3 col-md-3 col-xs-12 col-sm-12"
            v-for="(pricing_item, pricing_index) in pricing_data"
          >
            <card-pricing
              :title="pricing_item.title"
              :icon="pricing_item.icon"
              :price="pricing_item.price"
              :background_image="pricing_item.background_image"
              :text="pricing_item.text"
            ></card-pricing>
          </div>
        </div>
      </section>
    </q-page-container>

    <div class="text-center">
      <q-btn square flat color="grey" to="/" label="首页" icon="home"> </q-btn>
    </div>

    <section class="flex row flex-center q-py-sm">
      <div
        class="text-weight-bold text-subtitle2 text-white fixed-bottom text-center"
      >
        Copyright © {{ year }}
        <q-icon name="fas fa-heart"></q-icon>
        xuye
      </div>
    </section>
  </q-layout>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";

const pricing_data = [
  {
    title: "二手好房",
    price: "涨幅2%",
    icon: "home_work",
    background_image: "linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)",
    text: "好房源那么多，我们为你精选",
  },
  {
    title: "小区",
    price: "本月新增26个",
    icon: "home",
    background_image: "linear-gradient(-225deg, #5D9FFF 0%, #6BBBFF 100%)",
    text: "纵览小区恋上这座城",
  },
  {
    title: "新房",
    price: "均价¥54390/平",
    icon: "apartment",
    background_image: "linear-gradient(to right, #2B86C5 0%, #2B86C5 100%)",
    text: "真实信息准确同步，楼盘动态一手掌握",
  },
  {
    title: "海外房产",
    price: "$350 ~ $750/套",
    icon: "business_center",
    background_image:
      "linear-gradient(87deg, rgb(17, 205, 239), rgb(17, 113, 239)) !important",
    text: "海量全球好房，畅享美好生活",
  },
];
export default defineComponent({
  name: "Pricing",
  components: {
    CardPricing: defineAsyncComponent(() =>
      import("components/cards/CardPricing")
    ),
  },
  setup() {
    return {
      year: new Date().getFullYear(),
      pricing_data,
    };
  },
});
</script>

<style scoped></style>
