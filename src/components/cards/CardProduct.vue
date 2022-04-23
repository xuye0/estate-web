<template>
  <q-card class="">
    <q-img
      :src="require('../../assets/products/c-d-x-PDX_a_82obo-unsplash.jpg')"
      height="220px"
    >
      <q-chip
        v-if="data.chip"
        class="text-blue absolute-top-right"
        color="grey - 4"
        :label="data.chip"
      ></q-chip>
    </q-img>

    <q-card-section>
      <q-btn
        fab
        color="teal-7"
        icon="fas fa-cart-plus"
        padding="sm"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%)"
      />
    </q-card-section>

    <q-card-section>
      <div class="text-h6">{{ data.name }} - {{ data.cityName }}</div>
      <div class="text-subtitle1 text-justify q-mt-sm">
        {{ data.address }}
      </div>
      <div>
        <q-rating
          v-model="data.rating"
          max="5"
          size="1.5em"
          color="yellow"
          icon="star_border"
          icon-selected="star"
          icon-half="star_half"
          readonly
          no-dimming
        />
      </div>
    </q-card-section>
    <q-card-section>
      <div class="col-12">
        <span class="text-h6">{{ data.price }}</span>
        <span class="text-h6 float-right">
          <q-btn label="See Details" rounded color="secondary" outline></q-btn>
        </span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardProduct",

  props: ["data"],
});
</script>

<style scoped></style>
