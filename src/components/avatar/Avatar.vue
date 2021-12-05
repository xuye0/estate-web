<template>
  <q-chip clickable @click="handleLogout()">
    <q-avatar color="blue" text-color="white" size="26px">
      {{ this.$store.state.user.username.charAt(0) }}
    </q-avatar>
    {{ this.$store.state.user.username }}
  </q-chip>
</template>

<script>
import { logout } from "src/api/user";

export default {
  name: "Avatar",
  methods: {
    handleLogout() {
      this.$q.notify({
        message: "确定要退出登录吗",
        color: "primary",
        progress: true,
        actions: [
          {
            label: "确定",
            color: "yellow",
            handler: () => {
              logout().then(() => {
                this.$store.commit("user/RESET_LOGIN");
                this.$router.push({ path: "welcome" });
              });
            },
          },
        ],
      });
    },
  },
};
</script>

<style scoped></style>
