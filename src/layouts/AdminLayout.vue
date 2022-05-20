<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          icon="menu"
          aria-label="Menu"
        />
        <q-toolbar-title> 楼盘信息统计系统-管理员后台</q-toolbar-title>
        <q-space />
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            dense
            flat
            color="white"
            :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
            @click="$q.fullscreen.toggle()"
            v-if="$q.screen.gt.sm"
          >
          </q-btn>
          <Palette></Palette>
          <q-btn
            to="/"
            v-if="$q.screen.gt.sm"
            round
            dense
            flat
            color="text-grey-7"
            icon="home"
          >
            <q-tooltip>首页</q-tooltip></q-btn
          >
          <Avatar></Avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-primary text-white"
    >
      <q-list>
        <q-item to="/admin/dashboard" active-class="text-orange">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>主页</q-item-label>
          </q-item-section>
        </q-item>
        <!--        <q-item to="/admin/dashboard2" active-class="text-orange">-->
        <!--          <q-item-section avatar>-->
        <!--            <q-icon name="dashboard" />-->
        <!--          </q-item-section>-->
        <!--          <q-item-section>-->
        <!--            <q-item-label>CRM Dashboard</q-item-label>-->
        <!--          </q-item-section>-->
        <!--        </q-item>-->
        <q-item to="/admin/announcement" active-class="text-orange">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>公告编辑</q-item-label>
          </q-item-section>
        </q-item>

        <q-expansion-item icon="newspaper" label="资讯管理">
          <q-item
            to="/admin/newsAdd"
            class="q-ml-xl"
            active-class="text-orange"
          >
            <q-item-section>
              <q-item-label>发布</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            to="/admin/newsUpdate"
            class="q-ml-xl"
            active-class="text-orange"
          >
            <q-item-section>
              <q-item-label>更新/删除</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item icon="people" label="员工管理">
          <q-item
            to="/admin/staffList"
            class="q-ml-xl"
            active-class="text-orange"
          >
            <q-item-section>
              <q-item-label>列表</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            to="/admin/staffAdd"
            class="q-ml-xl"
            active-class="text-orange"
          >
            <q-item-section>
              <q-item-label>添加</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            to="/admin/staffEdit"
            class="q-ml-xl"
            active-class="text-orange"
          >
            <q-item-section>
              <q-item-label>更新</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            to="/admin/staffRemove"
            class="q-ml-xl"
            active-class="text-orange"
          >
            <q-item-section>
              <q-item-label>删除</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item icon="password" label="登录管理">
          <q-item
            to="/admin/loginList"
            class="q-ml-xl"
            active-class="text-orange"
          >
            <q-item-section>
              <q-item-label>列表</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            to="/admin/loginAdd"
            class="q-ml-xl"
            active-class="text-orange"
          >
            <q-item-section>
              <q-item-label>添加</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            to="/admin/loginEdit"
            class="q-ml-xl"
            active-class="text-orange"
          >
            <q-item-section>
              <q-item-label>更新</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item icon="apartment" label="楼盘管理">
          <q-item
            to="/admin/estateList"
            class="q-ml-xl"
            active-class="text-orange"
          >
            <q-item-section>
              <q-item-label>列表</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            to="/admin/estateAdd"
            class="q-ml-xl"
            active-class="text-orange"
          >
            <q-item-section>
              <q-item-label>添加</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            to="/admin/estateEdit"
            class="q-ml-xl"
            active-class="text-orange"
          >
            <q-item-section>
              <q-item-label>更新</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            to="/admin/estateRemove"
            class="q-ml-xl"
            active-class="text-orange"
          >
            <q-item-section>
              <q-item-label>删除</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <!--        <q-item to="/admin/directory" active-class="text-orange">-->
        <!--          <q-item-section avatar>-->
        <!--            <q-icon name="card_giftcard" />-->
        <!--          </q-item-section>-->
        <!--          <q-item-section>-->
        <!--            <q-item-label>Directory</q-item-label>-->
        <!--          </q-item-section>-->
        <!--        </q-item>-->
        <!--        <q-item to="/admin/treeTable" active-class="text-orange">-->
        <!--          <q-item-section avatar>-->
        <!--            <q-icon name="list" />-->
        <!--          </q-item-section>-->
        <!--          <q-item-section>-->
        <!--            <q-item-label>TreeTable</q-item-label>-->
        <!--          </q-item-section>-->
        <!--        </q-item>-->
        <!--        <q-item to="/admin/charts" active-class="text-orange">-->
        <!--          <q-item-section avatar>-->
        <!--            <q-icon name="insert_chart" />-->
        <!--          </q-item-section>-->
        <!--          <q-item-section>-->
        <!--            <q-item-label>Charts</q-item-label>-->
        <!--          </q-item-section>-->
        <!--        </q-item>-->
        <!--        <q-item to="/admin/footer" active-class="text-orange">-->
        <!--          <q-item-section avatar>-->
        <!--            <q-icon name="info" />-->
        <!--          </q-item-section>-->
        <!--          <q-item-section>-->
        <!--            <q-item-label>Footer</q-item-label>-->
        <!--          </q-item-section>-->
        <!--        </q-item>-->
        <!--        <q-item to="/admin/cardHeader" active-class="text-orange">-->
        <!--          <q-item-section avatar>-->
        <!--            <q-icon name="card_giftcard" />-->
        <!--          </q-item-section>-->
        <!--          <q-item-section>-->
        <!--            <q-item-label>Card Header</q-item-label>-->
        <!--          </q-item-section>-->
        <!--        </q-item>-->
        <!--        <q-item to="/admin/cards" active-class="text-orange">-->
        <!--          <q-item-section avatar>-->
        <!--            <q-icon name="card_giftcard" />-->
        <!--          </q-item-section>-->
        <!--          <q-item-section>-->
        <!--            <q-item-label>Cards</q-item-label>-->
        <!--          </q-item-section>-->
        <!--        </q-item>-->
        <!--        <q-item to="/admin/checkout" active-class="text-orange">-->
        <!--          <q-item-section avatar>-->
        <!--            <q-icon name="check_circle_outline" />-->
        <!--          </q-item-section>-->
        <!--          <q-item-section>-->
        <!--            <q-item-label>Checkout</q-item-label>-->
        <!--          </q-item-section>-->
        <!--        </q-item>-->
        <!--        <q-item to="/admin/pagination" active-class="text-orange">-->
        <!--          <q-item-section avatar>-->
        <!--            <q-icon name="date_range" />-->
        <!--          </q-item-section>-->
        <!--          <q-item-section>-->
        <!--            <q-item-label>Pagination</q-item-label>-->
        <!--          </q-item-section>-->
        <!--        </q-item>-->
        <!--        <q-item to="/admin/ecommerce" active-class="text-orange">-->
        <!--          <q-item-section avatar>-->
        <!--            <q-icon name="shopping_cart" />-->
        <!--          </q-item-section>-->
        <!--          <q-item-section>-->
        <!--            <q-item-label>Product Catalogues</q-item-label>-->
        <!--          </q-item-section>-->
        <!--        </q-item>-->
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Messages from "layouts/Messages";

import { defineComponent, ref } from "vue";
import Avatar from "components/avatar/Avatar";
import Palette from "components/Palette";

export default defineComponent({
  name: "MainLayout",

  components: {
    Palette,
    Avatar,
    Messages,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
