<template>
  <div>{{ this.data }}</div>
</template>

<script>
import { announcement } from "src/api/announcement";

export default {
  name: "index",
  mounted() {
    console.log("1");
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
