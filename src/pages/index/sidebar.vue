<template>
    <van-config-provider :theme-vars="themeVars">
        <van-sidebar v-model="active">
            <van-sidebar-item v-for="(item,index) in options" :title="item.label" :key="index" />
        </van-sidebar>
    </van-config-provider>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { options } from '@/settings/sidebarSetting'

const active = ref(0);
const themeVars = reactive({
    sidebarWidth: '12vw',
    sidebarFontSize: 'var(--van-line-height-lg)',
});
</script>

