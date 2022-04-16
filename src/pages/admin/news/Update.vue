<template>
  <div class="text-h3 q-pa-md text-center">
    <q-select
      filled
      v-model="this.data"
      :options="this.list"
      option-label="title"
      label="选择资讯"
    />
    <q-separator />

    <q-input label="资讯标题" v-model="this.data.title"></q-input>
    <q-input label="资讯描述" v-model="this.data.description"></q-input>
    <q-input label="资讯日期" v-model="this.data.date">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            cover
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date v-model="this.data.date" mask="YYYY-MM-DD">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-editor v-model="this.data.html" min-height="15rem" />
    <q-card-actions align="right">
      <q-btn color="primary" @click="this.update()">更新</q-btn>
      <q-btn color="red" @click="this.delete()">删除</q-btn>
    </q-card-actions>
  </div>
</template>

<script>
import { news_list, update, delete_by_id } from "src/api/news_list";

export default {
  name: "index",
  mounted() {
    this.fetch_data();
  },
  methods: {
    fetch_data() {
      news_list().then((res) => {
        this.list = res.data;
        this.data = res.data[0];
      });
    },
    update() {
      update(this.data);
    },
    delete() {
      delete_by_id(this.data.id).then((res) => {
        this.fetch_data();
      });
    },
  },
  data() {
    return {
      data: {
        title: null,
        description: null,
        html: null,
        date: null,
      },
      list: [
        {
          title: null,
          description: null,
          html: null,
          date: null,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
