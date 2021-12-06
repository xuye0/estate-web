<template>
  <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
    <q-card-section class="text-h6">
      <div class="text-h6">修改个人资料</div>
    </q-card-section>
    <q-card-section class="q-pa-sm">
      <q-list class="row">
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input dense v-model="user_details.user_name" label="用户名" />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input dense v-model="user_details.email" label="邮箱" />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input
              dense
              v-model="user_details.first_name"
              label="First Name"
            />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input dense v-model="user_details.last_name" label="Last Name" />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input
              autogrow
              dense
              v-model="user_details.address"
              label="Address"
            />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input dense v-model="user_details.city" label="City" />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input
              dense
              v-model="user_details.post_code"
              label="Postal Code"
            />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input
              type="textarea"
              dense
              v-model="user_details.about"
              label="About"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn color="primary">修改个人信息</q-btn>
    </q-card-actions>
  </div>
</template>

<script>
export default {
  name: "SettingsProfile",
  data() {
    return {
      user_details: {},
    };
  },
};
</script>

<style scoped></style>
