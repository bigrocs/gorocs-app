<template>
    <van-config-provider :theme-vars="themeVars">
        <van-sidebar v-model="active">
            <van-sidebar-item v-for="(item,index) in options" :title="item.label" :key="index" @click="SidebarChange(item.value)"/>
        </van-sidebar>
    </van-config-provider>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { options } from '@/settings/sidebarSetting'
const emit = defineEmits(['ChangeSidebar']);

const active = ref(0);
const themeVars = reactive({
    sidebarWidth: '12vw',
    // sidebarFontSize: 'var(--van-line-height-lg)',
    sidebarFontSize: '2.5vw',
    sidebarBackground: '#ccc'
});
// 定义侧边栏改变函数
const SidebarChange = function (key:String) {
    emit("ChangeSidebar", key)
}


</script>

