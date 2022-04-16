<template>
  <div class="text-h3 q-pa-md text-center">
    <q-input label="资讯标题" v-model="this.data.title"></q-input>
    <q-input label="资讯描述" v-model="this.data.description"></q-input>
    <q-input label="咨询日期" v-model="this.data.date">
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
      <q-btn color="primary" @click="this.save()">发布</q-btn>
    </q-card-actions>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { save } from "src/api/news";

export default {
  name: "index",
  mounted() {},
  methods: {
    save() {
      save(this.data);
    },
  },
  data() {
    return {
      data: {
        title: "",
        description: "",
        html: "",
        date: dayjs().format("YYYY-MM-DD"),
      },
    };
  },
};
</script>

<style scoped></style>
