<template>
  <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
    <q-card-section class="text-h6 q-pa-sm">
      <div class="text-h6">添加员工</div>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> username </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.username"
            label="用户名"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> postition </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.position"
            label="position"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> phone </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.phone"
            label="phone"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> secondary_phone </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.secondary_phone"
            label="secondary_phone"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> personal_email </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.personal_email"
            label="personal_email"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> company_email </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.company_email"
            label="company_email"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> address </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.address"
            label="address"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-pa-sm row">
      <q-item class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <q-item-section> website_url </q-item-section>
      </q-item>
      <q-item class="col-lg-10 col-md-10 col-sm-18 col-xs-18">
        <q-item-section>
          <q-input
            type="input"
            dense
            outlined
            round
            v-model="form.website_url"
            label="website_url"
          />
        </q-item-section>
      </q-item>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn color="primary" @click="this.handleSubmit()">提交员工 </q-btn>
    </q-card-actions>
  </div>
</template>

<script>
export default {
  name: "StaffAdd",
  methods: {
    handleSubmit() {
      console.log(this.form);
    },
  },
  data() {
    return {
      form: {
        id: undefined,
        username: undefined,
        position: undefined,
        phone: undefined,
        secondary_phone: undefined,
        personal_email: undefined,
        company_email: undefined,
        address: undefined,
        website_url: undefined,
      },
    };
  },
};
</script>

<style scoped></style>
