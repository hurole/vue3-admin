<script setup lang="ts">
import {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { reactive, ref } from "vue";
let collapsed = ref<boolean>(false);
console.log('vue3-admin')
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
    <a-layout :class="$style.layout">
        <a-layout-sider
            v-model:collapsed="collapsed"
            :trigger="null"
            collapsible
        >
            <div :class="$style.logo">
                <img
                    src="../../assets/logo.png"
                    alt="logo"
                    :class="$style['logo-img']"
                />
                <span v-if="!collapsed" :class="$style['logo-title']"
                    >Vue-Admin</span
                >
            </div>
            <a-menu
                v-model:selectedKeys="selectedKeys"
                theme="dark"
                mode="inline"
            >
                <template v-for="item in list" :key="item.key">
                    <a-sub-menu
                        v-if="item.children && item.children.length > 0"
                    >
                        <template #icon>
                            <user-outlined />
                        </template>
                        <template #title>
                            {{ item.title }}
                        </template>
                        <a-menu-item
                            v-for="child in item.children"
                            :key="child.key"
                            :class="$style.menu"
                        >
                            <user-outlined />
                            <span :class="$style['menu-title']">{{
                                child.title
                            }}</span>
                        </a-menu-item>
                    </a-sub-menu>
                    <a-menu-item v-else :class="$style.menu" to="/about">
                        <user-outlined />
                        <span :class="$style['menu-title']">{{
                            item.title
                        }}</span>
                    </a-menu-item>
                </template>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header :class="$style.header">
                <menu-unfold-outlined
                    v-if="collapsed"
                    :class="$style.trigger"
                    @click="() => (collapsed = !collapsed)"
                />
                <menu-fold-outlined
                    v-else
                    :class="$style.trigger"
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
<style module>
.logo {
    margin: 20px;
    height: 40px;
}
.logo-title {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    margin-left: 6px;
    line-height: 40px;
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
.trigger {
    margin-left: 16px;
    font-size: 20px;
}
.header {
    padding: 0;
    background-color: #fff;
}
</style>
