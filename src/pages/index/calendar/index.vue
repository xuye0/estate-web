<template>
  <div class="row justify-center">
    <div class="q-pa-md q-gutter-sm row">
      <q-btn no-caps class="button" @click="onPrev()"> &lt; </q-btn>
      <q-btn no-caps class="button" @click="onToday()"> 今天 </q-btn>
      <q-btn no-caps class="button" @click="onNext()"> &gt; </q-btn>
    </div>
  </div>
  <div class="subcontent q-pa-md">
    <div class="row justify-center">
      <div style="display: flex; width: 100%">
        <q-calendar-month
          dateType="square"
          locale="zh-HANS"
          ref="calendar"
          v-model="selectedDate"
          show-day-of-year-label
          :day-min-height="60"
          animated
          bordered
          @change="onChange"
          @moved="onMoved"
          @click-date="onClickDate"
          @click-day="onClickDay"
          @click-workweek="onClickWorkweek"
          @click-head-workweek="onClickHeadWorkweek"
          @click-head-day="onClickHeadDay"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  QCalendarMonth,
  today,
} from "@quasar/quasar-ui-qcalendar/src/index.js";
import "@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass";

import { defineComponent } from "vue";

export default defineComponent({
  name: "MonthAlignment",
  components: {
    QCalendarMonth,
  },
  data() {
    return {
      selectedDate: today(),
    };
  },
  methods: {
    onToday() {
      this.$refs.calendar.moveToToday();
    },
    onPrev() {
      this.$refs.calendar.prev();
    },
    onNext() {
      this.$refs.calendar.next();
    },
    onMoved(data) {
      console.log("onMoved", data);
    },
    onChange(data) {
      console.log("onChange", data);
    },
    onClickDate(data) {
      console.log("onClickDate", data);
    },
    onClickDay(data) {
      console.log("onClickDay", data);
    },
    onClickWorkweek(data) {
      console.log("onClickWorkweek", data);
    },
    onClickHeadDay(data) {
      console.log("onClickHeadDay", data);
    },
    onClickHeadWorkweek(data) {
      console.log("onClickHeadWorkweek", data);
    },
  },
});
</script>
