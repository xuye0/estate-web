<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading> 房产资讯</q-timeline-entry>
      <q-timeline-entry
        :title="item.title"
        :subtitle="item.date"
        v-for="(item, index) in this.list"
        :key="index"
      >
        <div v-html="item.html"></div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
import { news } from "src/api/news";

export default {
  name: "index",
  data: function () {
    return {
      list: [],
    };
  },
  created() {
    this.fetch_data();
  },
  methods: {
    fetch_data() {
      news().then((res) => {
        this.list = res.data;
      });
    },
  },
};
</script>

<style scoped></style>
