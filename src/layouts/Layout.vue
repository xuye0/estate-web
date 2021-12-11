<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <q-toolbar-title
          v-if="$q.screen.gt.xs"
          shrink
          class="row items-center no-wrap"
        >
          <!--          <img-->
          <!--            src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg"-->
          <!--          />-->
          <span class="q-ml-sm">楼盘信息</span>
        </q-toolbar-title>

        <q-space />

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            dense
            flat
            :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
            @click="$q.fullscreen.toggle()"
            v-if="$q.screen.gt.sm"
          >
          </q-btn>
          <q-btn
            to="/welcome"
            v-if="$q.screen.gt.sm"
            round
            dense
            flat
            color="text-grey-7"
            icon="bubble_chart"
          >
            <q-tooltip>欢迎页面</q-tooltip>
          </q-btn>
          <q-btn
            to="/admin"
            v-if="$q.screen.gt.sm"
            round
            dense
            flat
            color="text-grey-7"
            icon="admin_panel_settings"
          >
            <q-tooltip>后台管理页面</q-tooltip>
          </q-btn>
          <!--          <q-btn round dense flat color="grey-8" icon="notifications">-->
          <!--            <q-badge color="red" text-color="white" floating> 2 </q-badge>-->
          <!--            <q-tooltip>Notifications</q-tooltip>-->
          <!--          </q-btn>-->
          <Avatar></Avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item
            :to="link.to"
            class="GNL__drawer-item"
            v-ripple
            v-for="link in links1"
            :key="link.text"
            clickable
          >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

          <q-item
            :to="link.to"
            class="GNL__drawer-item"
            v-ripple
            v-for="link in links2"
            :key="link.text"
            clickable
          >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

          <div class="q-mt-md">
            <!--            <div class="flex flex-center q-gutter-xs">-->
            <!--              <a-->
            <!--                class="GNL__drawer-footer-link"-->
            <!--                href="javascript:void(0)"-->
            <!--                aria-label="Privacy"-->
            <!--                >Privacy</a-->
            <!--              >-->
            <!--              <span> · </span>-->
            <!--              <a-->
            <!--                class="GNL__drawer-footer-link"-->
            <!--                href="javascript:void(0)"-->
            <!--                aria-label="Terms"-->
            <!--                >Terms</a-->
            <!--              >-->
            <!--              <span> · </span>-->
            <!--              <a-->
            <!--                class="GNL__drawer-footer-link"-->
            <!--                href="javascript:void(0)"-->
            <!--                aria-label="About"-->
            <!--                >About Google</a-->
            <!--              >-->
            <!--            </div>-->
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { fasGlobeAmericas, fasFlask } from "@quasar/extras/fontawesome-v5";
import Avatar from "components/avatar/Avatar";

export default {
  name: "GoogleNewsLayout",
  components: { Avatar },
  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref("");
    const showAdvanced = ref(false);
    const showDateOptions = ref(false);
    const exactPhrase = ref("");
    const hasWords = ref("");
    const excludeWords = ref("");
    const byWebsite = ref("");
    const byDate = ref("Any time");

    function onClear() {
      exactPhrase.value = "";
      hasWords.value = "";
      excludeWords.value = "";
      byWebsite.value = "";
      byDate.value = "Any time";
    }

    function changeDate(option) {
      byDate.value = option;
      showDateOptions.value = false;
    }

    function toggleLeftDrawer() {
      console.log("/*?*/");
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return {
      leftDrawerOpen,
      search,
      showAdvanced,
      showDateOptions,
      exactPhrase,
      hasWords,
      excludeWords,
      byWebsite,
      byDate,
      links1: [
        { icon: "campaign", text: "公告", to: "/announcement" },
        { icon: "today", text: "日历", to: "/calendar" },
      ],
      links2: [
        { icon: "flag", text: "我的同事", to: "/contact" },
        { icon: "settings", text: "个人资料", to: "/settings" },
      ],
      onClear,
      changeDate,
      toggleLeftDrawer,
    };
  },
};
</script>

<style lang="sass">
.GNL

  &__toolbar
    height: 64px

  &__toolbar-input
    width: 55%

  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      .q-icon
        color: #5f6368

    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>
