<template>
  <!-- <el-dropdown
    :split-button="true"
    type="primary"
  >
    <template #default>
      aaa
    </template>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>English</el-dropdown-item>
        <el-dropdown-item>简体中文</el-dropdown-item>
        <el-dropdown-item>日本語</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown> -->
  <div class="demo">
    {{ $t('message.welcome') }}
  </div>
</template>

<script>
import { ArrowDown } from '@element-plus/icons-vue'

export default {
  name: 'Demo',
  setup() {
    return {
      ArrowDown
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .demo{
    color: lightcoral;
    font-size: @font-size;
    text-align: center;
    margin: 300px 0 0 0;
  }
</style>
