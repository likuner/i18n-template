<template>
  <el-dropdown
    class="lang-dropdown"
    type="default"
    :split-button="true"
    @command="handleCommand"
  >
    {{ curLang }}
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in langList"
          :key="item.lang"
          :command="item.lang"
        >{{item.desc}}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <div class="demo">
    {{ $t('i.welcome') }}
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { langList, langEnum } from '@/locale/enum'

export default {
  name: 'Demo',
  setup() {
    const store = useStore()
    const { t } = useI18n({ useScope: 'global' })
    const handleCommand = (e) => {
      if (e !== store.state.locale) {
        store.commit('setLocale', e)
        ElMessage.success(t('i.switchLang'))
      }
    }
    return {
      langList,
      handleCommand,
      curLang: computed(() => langEnum[store.state.locale])
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
  .lang-dropdown{
    position: fixed;
    z-index: 1;
    top: 20px;
    right: 100px;
  }
</style>
