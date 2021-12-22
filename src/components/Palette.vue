<template>
  <q-btn dense flat icon="palette" round>
    <q-tooltip>调色</q-tooltip>
    <q-popup-proxy>
      <q-color v-model="this.hex" />
    </q-popup-proxy>
  </q-btn>
</template>

<script>
import { setCssVar } from "quasar";

export default {
  name: "Palette",
  data() {
    return {
      type: "primary",
      hex: "",
    };
  },
  watch: {
    hex: function f(value) {
      setCssVar(this.type, value);
    },
  },
};
</script>

<style scoped></style>
