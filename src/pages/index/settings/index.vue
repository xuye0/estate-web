<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="bg-grey-3"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab
            v-if="this.$store.state.user.role !== 'customer'"
            name="profile"
            label="资料"
          />
          <q-tab name="password" label="密码" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="profile">
            <SettingsProfile></SettingsProfile>
          </q-tab-panel>

          <q-tab-panel name="password">
            <SettingsPassword></SettingsPassword>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import SettingsProfile from "pages/index/settings/profile";
import SettingsPassword from "pages/index/settings/password";
export default {
  components: { SettingsPassword, SettingsProfile },
  data() {
    return {
      tab: "profile",
    };
  },
  created() {
    if (this.$store.state.user.role !== "customer") {
      this.tab = "profile";
    } else {
      this.tab = "password";
    }
  },
};
</script>
