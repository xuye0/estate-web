<template>
  <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">
      <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg">
        <h1 class="text-white">角色：{{ this.$store.state.user.role }}</h1>
        <h1 class="text-white">名字：{{ this.$store.state.user.username }}</h1>
      </q-parallax>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
};
</script>

<style scoped></style>
