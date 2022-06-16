<script setup lang="ts">
import { reactive, getCurrentInstance, ComponentInternalInstance } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
interface LoginInfo {
    username: string;
    password: string;
}
const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const loginInfo: LoginInfo = reactive({
    username: '',
    password: '',
});
const router = useRouter();
async function handleLogin() {
    if (!(loginInfo.username && loginInfo.password)) {
        proxy!.$message.info('请填写用户名及密码');
        return;
    }
    try {
        let res = await axios.post(
            'http://localhost:3001/api/auth/login',
            {
                username: loginInfo.username,
                password: loginInfo.password,
            },
            { withCredentials: true }
        );
        if (res?.data) {
            console.log('res.data', res.data);
            router.push({
                name: 'dashborad',
            });
        }
    } catch (error: any) {
        proxy!.$message.error(error?.message || '网络异常');
    }
}
</script>
<template>
    <div class="container">
        <a-row class="content">
            <a-col :span="12" class="left"></a-col>
            <a-col :span="12" class="login-view">
                <a-row align="middle" justify="center" class="login-view-content">
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
                        <a-button type="primary" @click="handleLogin"
                            >登录</a-button
                        >
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
    box-shadow: 20px 10px 50px #fff1eb;
    border-radius: 10px;
}
.left {
    background: url('../../assets/home_bg.svg') no-repeat center;
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
.login-view {
    height: 100%;
}
.login-view-content{
    height: 100%;
}
</style>
