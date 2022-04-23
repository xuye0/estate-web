<template>
  <q-page class="q-pa-sm">
    <div>
      <q-card class="no-border no-shadow bg-transparent">
        <q-card-section class="q-pa-sm">
          <q-input rounded v-model="search" outlined placeholder="搜索房产">
            <template v-slot:append>
              <q-icon v-if="search === ''" name="search" />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="search = ''"
              />
            </template>
          </q-input>
        </q-card-section>
      </q-card>
    </div>
    <div class="row q-col-gutter-sm">
      <div
        class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
        v-for="(item, item_index) in this.list"
      >
        <card-product :data="item"></card-product>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
import { all_estate, info_estate } from "src/api/estate";

const data = [];

export default defineComponent({
  name: "ProductCatalogues",
  components: {
    CardProduct: defineAsyncComponent(() =>
      import("components/cards/CardProduct")
    ),
  },
  created() {
    this.fetch_data();
  },
  methods: {
    fetch_data() {
      info_estate().then((res) => {
        this.list = res.data;
      });
    },
  },
  data() {
    return {
      search: "",
      list: [
        {
          name: "Our Changing Planet",
          cityName: "Our Changing Planet",
          address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          rating: 2,
          price: "$30",
          chip: "Discount 90%",
        },
      ],
    };
  },
});
</script>

<style scoped></style>
