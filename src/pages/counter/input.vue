<template>
    <van-config-provider :theme-vars="themeVars" class="provider">
        <van-cell-group inset class="cell">
            <van-field 
                v-model="number" 
                type="number" 
                left-icon="home-o"
                label="键盘" 
                size="large" 
                placeholder="请输入条形码/PLU/商品名称"
            />
        </van-cell-group>
    </van-config-provider>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
const themeVars = reactive({
    fieldLabelWidth: '2.5vw',
});
const number = ref()
</script>

<style scoped>
.provider {
    width: 100%;
}
.cell {
    margin: 10px;
}
</style>
