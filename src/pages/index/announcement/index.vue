<template>
  <div class="row justify-center">
    <div class="q-pa-md q-gutter-sm">
      <h2 v-text="this.data.title" class="text-center"></h2>
      <div class="text-center">
        <q-badge rounded color="primary" :label="this.data.updateTime" />
      </div>
      <q-card>
        <div v-html="this.data.html"></div>
      </q-card>
    </div>
  </div>
</template>

<script>
import { announcement } from "src/api/announcement";

export default {
  name: "index",
  mounted() {
    this.fetch_data();
  },
  data() {
    return {
      data: {},
    };
  },
  methods: {
    fetch_data() {
      announcement().then((res) => {
        this.data = res.data;
      });
    },
  },
};
</script>

<style scoped></style>
