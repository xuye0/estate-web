<template>
  <div class="text-h3 q-pa-md text-center">
    <q-input label="公告标题" v-model="this.data.title"></q-input>
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-editor v-model="this.data.html" min-height="5rem" />
    <q-card-actions align="right">
      <q-btn color="primary" @click="this.handleUpdate()">更新公告</q-btn>
    </q-card-actions>
  </div>
</template>

<script>
import { announcement, update_announcement } from "src/api/announcement";

export default {
  name: "index",
  mounted() {
    console.log("1");
    this.fetch_data();
  },
  data() {
    return {
      data: {
        id: null,
        html: null,
        title: null,
        updateTime: null,
      },
    };
  },
  methods: {
    fetch_data() {
      announcement().then((res) => {
        this.data = res.data;
      });
    },
    handleUpdate() {
      update_announcement(this.data).then((res) => {
        this.fetch_data();
      });
    },
  },
};
</script>

<style scoped></style>
