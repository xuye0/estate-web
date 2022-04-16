<template>
  <q-page class="q-pa-sm bg-white">
    <q-resize-observer @resize="onResize" />

    <div class="row" v-if="!$q.screen.lt.sm">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card class="no-border no-border">
          <q-tab-panels v-model="tab" animated class="bg-white">
            <q-tab-panel
              name="all"
              class="q-pa-none full-height"
              :style="{ height: size['height'] - 80 + 'px !important' }"
            >
              <q-list class="">
                <q-item-label header class="text-center"
                  >{{ contacts_list.length }} 位销售</q-item-label
                >

                <span
                  v-for="(contact, index) in contacts_list"
                  :key="index"
                  @click="selected_contact = contact"
                >
                  <contact-item
                    :name="contact.username.charAt(0)"
                    :position="contact.position"
                  ></contact-item>
                </span>
              </q-list>
            </q-tab-panel>
          </q-tab-panels>

          <q-tabs v-model="tab" dense class="bg-grey-3" align="justify">
            <q-tab
              name="all"
              icon="person"
              class="text-capitalize"
              label="我们"
            ></q-tab>
          </q-tabs>
        </q-card>
      </div>
      <div class="col-lg-8 q-pl-xs col-md-8 col-sm-12 col-xs-12">
        <q-card
          class="no-border no-border"
          :style="{ height: size['height'] - 24 + 'px !important' }"
        >
          <q-toolbar class="text-black">
            <q-btn round flat class="q-pa-sm">
              <q-avatar
                size="80px"
                color="blue"
                text-color="white"
                v-if="selected_contact.username"
              >
                {{ selected_contact.username.charAt(0) }}</q-avatar
              >
            </q-btn>

            <q-item class="q-subtitle-1 q-pl-md">
              <q-item-section>
                <q-item-label lines="1">{{
                  selected_contact.name
                }}</q-item-label>
                <q-item-label caption lines="2">
                  <span class="text-weight-bold">{{
                    selected_contact.position
                  }}</span>
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-space />
          </q-toolbar>
          <q-separator v-if="selected_contact.username"></q-separator>

          <div
            v-for="(detail, detail_index) in detail_list"
            :key="detail_index"
          >
            <contact-detail-item
              :icon="detail.icon"
              :text_color="detail.text_color"
              :value="selected_contact[detail['field']]"
              :label="detail.label"
            >
            </contact-detail-item>
          </div>
        </q-card>
      </div>
    </div>

    <div v-else>
      <div
        v-if="
          Object.keys(selected_contact).length === 0 ||
          Object.keys(selected_contact).length === 1
        "
      >
        <q-tab-panels v-model="tab" animated class="bg-white">
          <q-tab-panel
            name="all"
            class="q-pa-none full-height"
            :style="{ height: size['height'] - 100 + 'px !important' }"
          >
            <q-list class="">
              <q-item-label header class="text-center"
                >{{ contacts_list.length }} CONTACTS</q-item-label
              >

              <span
                v-for="(contact, index) in contacts_list"
                :key="index"
                @click="selected_contact = contact"
              >
                <contact-item
                  :name="contact.username"
                  :position="contact.position"
                ></contact-item>
              </span>
            </q-list>
          </q-tab-panel>
        </q-tab-panels>
        <q-tabs v-model="tab" dense class="bg-grey-3" align="justify">
          <q-tab
            name="all"
            icon="person"
            class="text-capitalize"
            label="我们"
          ></q-tab>
        </q-tabs>
      </div>
      <transition v-else appear enter-active-class="animated bounceInRight">
        <q-card
          class="no-border no-border"
          :style="{ height: size['height'] - 100 + 'px !important' }"
        >
          <q-toolbar class="text-black">
            <q-btn round flat class="q-pa-sm">
              <q-avatar size="80px" color="blue" text-color="white">
                {{ selected_contact.username.charAt(0) }}</q-avatar
              >
            </q-btn>

            <q-item class="q-subtitle-1 q-pl-md">
              <q-item-section>
                <q-item-label lines="1">{{
                  selected_contact.name
                }}</q-item-label>
                <q-item-label caption lines="2">
                  <span class="text-weight-bold">{{
                    selected_contact.position
                  }}</span>
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-space />
            <q-btn
              round
              flat
              icon="keyboard_backspace"
              @click="selected_contact = {}"
            />
          </q-toolbar>
          <q-separator></q-separator>

          <div
            v-for="(detail, detail_index) in detail_list"
            :key="detail_index"
          >
            <contact-detail-item
              :icon="detail.icon"
              :text_color="detail.text_color"
              :value="selected_contact[detail['field']]"
              :label="detail.label"
            ></contact-detail-item>
          </div>
        </q-card>
      </transition>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
import { useQuasar } from "quasar";
import { ref } from "vue";
import { all_staff } from "src/api/staff";

const detail_list = [
  {
    icon: "phone",
    label: "电话号码",
    field: "phone",
    text_color: "blue",
  },
  {
    icon: "phone_iphone",
    label: "手机号码",
    field: "secondaryPhone",
    text_color: "orange",
  },
  {
    icon: "mail",
    label: "邮箱",
    field: "personalEmail",
    text_color: "grey-8",
  },
  {
    icon: "business_center",
    label: "工作邮箱",
    field: "companyEmail",
    text_color: "grey-8",
  },
  {
    icon: "location_on",
    label: "地址",
    field: "address",
    text_color: "grey-8",
  },
  {
    icon: "home_work",
    label: "个人网站",
    field: "websiteUrl",
    text_color: "grey-8",
  },
];

export default defineComponent({
  name: "Contact",
  components: {
    ContactDetailItem: defineAsyncComponent(() =>
      import("components/ContactDetailItem")
    ),
    ContactItem: defineAsyncComponent(() => import("components/ContactItem")),
  },
  setup() {
    const $q = useQuasar();
    const size = ref({ width: "200px", height: "200px" });

    return {
      tab: ref("all"),
      search: ref(""),
      size,
      contacts_list: ref([]),
      selected_contact: ref({ username: "" }),
      detail_list,

      onResize(size_dynamic) {
        size.value = size_dynamic;
      },
    };
  },
  mounted() {
    all_staff().then((res) => {
      this.contacts_list = res.data;
    });
  },
});
</script>

<style scoped></style>
