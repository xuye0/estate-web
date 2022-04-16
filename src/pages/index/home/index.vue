<template>
  <div>
    <h3>{{ this.$store.state.user.username }}</h3>
    <h3>{{ this.$store.state.user.role }}</h3>
  </div>
</template>

<script>
export default {
  name: "index",
};
</script>

<style scoped></style>
