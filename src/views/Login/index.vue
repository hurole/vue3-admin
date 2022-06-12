<script setup lang="ts">
import { reactive } from "vue";
interface LoginInfo {
    username: string;
    password: string;
}
const loginInfo: LoginInfo = reactive({
    username: "",
    password: "",
});
</script>
<template>
    <div class="container">
        <a-row class="content" :gutter="12">
            <a-col :span="12" class="left"></a-col>
            <a-col :span="12">
                <a-row>
                    <a-form
                        :model="loginInfo"
                        name="login"
                        :label-col="{ span: 8 }"
                        :wrapper-col="{ span: 16 }"
                        autocomplete="off"
                    >
                        <a-form-item
                            label="用户名"
                            name="username"
                            :rules="[
                                {
                                    required: true,
                                    message: '请输入用户名',
                                },
                            ]"
                        >
                            <a-input
                                v-model:value="loginInfo.username"
                                placeholder="用户名"
                                class="user"
                            />
                        </a-form-item>
                        <a-form-item
                            label="用户名"
                            name="username"
                            :rules="[
                                {
                                    required: true,
                                    message: '请输入密码',
                                },
                            ]"
                        >
                            <a-input-password
                                v-model:value="loginInfo.password"
                                placeholder="密码"
                                class="pwd"
                            />
                        </a-form-item>
                        <a-button type="primary">登录</a-button>
                    </a-form>
                </a-row>
            </a-col>
        </a-row>
    </div>
</template>
<style scoped>
.container {
    height: 100vh;
    background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
    overflow: hidden;
}
.content {
    background-color: #fff;
    height: 80%;
    margin: 100px auto;
    width: 80%;
    max-width: 1920px;
    box-shadow: 20px 10px 50px #fff1eb;
    border-radius: 10px;
}
.left {
    background: url("../../assets/home_bg.svg") no-repeat center;
    background-size: 80% 80%;
    background-color: #accbee;
}
.right {
}
.user {
    height: 40px;
    border-radius: 10px;
}
.pwd {
    height: 40px;
    border-radius: 10px;
}
.user:focus {
    border-width: 2px;
    border-color: #ace0f9;
}
</style>
