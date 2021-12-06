<template>
  <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
    <q-card-section class="text-h6 q-pa-sm">
      <div class="text-h6">修改密码</div>
    </q-card-section>
    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-item-section> 当前密码 </q-item-section>
      </q-item>
      <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <q-item-section>
          <q-input
            type="password"
            dense
            outlined
            round
            v-model="password_dict.current_password"
            label="当前密码"
          />
        </q-item-section>
      </q-item>
      <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-item-section> 新密码 </q-item-section>
      </q-item>
      <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <q-item-section>
          <q-input
            type="password"
            dense
            outlined
            round
            v-model="password_dict.new_password"
            label="新密码"
          />
        </q-item-section>
      </q-item>
      <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-item-section> 确认密码 </q-item-section>
      </q-item>
      <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <q-item-section>
          <q-input
            type="password"
            dense
            outlined
            round
            v-model="password_dict.confirm_new_password"
            label="确认新密码"
          />
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn color="primary">修改密码 </q-btn>
    </q-card-actions>
  </div>
</template>

<script>
export default {
  name: "SettingsPassword",
  data() {
    return {
      password_dict: {},
    };
  },
};
</script>

<style scoped></style>
