<template>
  <q-item clickable v-ripple v-if="value">
    <q-item-section avatar top>
      <q-avatar :icon="icon" color="grey-2" :text-color="text_color" />
    </q-item-section>
    <q-item-section>
      <q-item-label lines="1">{{ value }}</q-item-label>
      <q-item-label caption class="text-grey-8">{{ label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ContactDetailItem",
  props: {
    icon: {
      type: String,
    },
    text_color: {
      type: String,
    },
    value: {
      type: String,
    },
    label: {
      type: String,
    },
  },
});
</script>

<style scoped></style>
