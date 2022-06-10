<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from "vue";
console.log("执行setup");
const name = ref("控制面板");
onMounted(() => {
    console.log("onMounted--生命周期");
});
onBeforeMount(() => {
    console.log("onBeforeMount--生命周期");
});
</script>
<template>
    <h1>{{ name }}</h1>
</template>
<style module></style>
