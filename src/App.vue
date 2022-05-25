<script setup lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { reactive, ref } from "vue";
let collapsed = ref<Boolean>(false);
let toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
};
let openKeys = ref(undefined);
let selectedKeys = ref(undefined);
let list = reactive([
  {
    title: "用户管理",
    key: "01",
    path: "user",
    children: [
      { title: "用户管理1", key: "011" },
      { title: "用户管理2", key: "012" },
    ],
  },
  {
    title: "权限管理",
    key: "02",
    path: "/right",
    children: [
      { title: "权限管理1", key: "021" },
      { title: "权限管理2", key: "022" },
    ],
  },
  {
    title: "商品管理",
    path: "/goods",
    key: "03",
  },
]);
</script>

<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img src="./assets/logo.png" alt="logo" class="logo-img" />
        <span v-if="!collapsed" style="color: #fff; fontweight: bold"
          >Vue3后台</span
        >
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <template v-for="item in list" :key="item.key">
          <a-sub-menu v-if="item.children && item.children.length > 0">
            <template #icon>
              <user-outlined />
            </template>
            <template #title>
              {{ item.title }}
            </template>
            <a-menu-item
              v-for="child in item.children"
              :key="child.key"
              class="menu"
            >
              <user-outlined />
              <span class="menu-title">{{ child.title }}</span>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item v-else class="menu" to="/about">
            <user-outlined />
            <span class="menu-title">{{ item.title }}</span>
          </a-menu-item>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.logo {
  margin: 20px;
}
.logo-img {
  width: 40px;
  height: 40px;
}
.layout {
  height: 100vh;
}
.menu {
  margin-top: 20px;
}
</style>
