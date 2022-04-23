<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }"
        >
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="profile.svg" />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">楼盘信息统计系统-登录</div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                filled
                v-model="this.credential"
                label="凭证"
                hint="员工请输入user_id，顾客请输入手机号"
                lazy-rules
              />

              <q-input
                type="password"
                filled
                v-model="this.password"
                label="密码"
                lazy-rules
              />
              <q-btn-toggle
                v-model="this.type"
                toggle-color="primary"
                @click="handleLogin()"
                :options="[
                  { label: '员工登陆', value: 'staff' },
                  { label: '顾客登陆', value: 'customer' },
                ]"
              />
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { login } from "src/api/user";

export default {
  data() {
    return {
      type: "",
      credential: "admin",
      password: "123456",
    };
  },
  methods: {
    handleLogin() {
      login(this.type, this.credential, this.password).then((res) => {
        if (res.code === 1000) {
          const { data } = res;
          const { user } = data;
          this.$store.commit("user/SET_LOGIN", {
            token: data.token,
            user,
          });
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style>
.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>
