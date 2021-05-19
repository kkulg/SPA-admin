<template>
  <div class="lc-aside"
       :class="{'lc-aside--collapse': isCollapse}">
    <div class="lc-aside__logo"
         :class="{'lc-aside__logo--collapse': isCollapse}">SPA-admin</div>
    <div class="lc-aside__menu">
      <lc-aside-menu :collapse="isCollapse"></lc-aside-menu>
    </div>
    <div class="lc-aside__footer">
      <i v-if="isCollapse"
         class="el-icon-s-unfold"
         @click="handleOpenMenu()"></i>
      <i v-else
         class="el-icon-s-fold"
         @click="handleCloseMenu()"></i>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import LcAsideMenu from '@layout/aside-menu.vue';

export default defineComponent({
  name: 'LcAside',
  components: {
    LcAsideMenu
  },
  setup() {
    const isCollapse = ref(false);
    return {
      isCollapse,
      handleCloseMenu: () => {
        isCollapse.value = true;
      },
      handleOpenMenu: () => {
        isCollapse.value = false;
      }
    };
  }
});
</script>
<style lang="scss" scoped>
.lc-aside {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  background: #fff;
  z-index: 100;
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
  transition: width 0.6s;
  &--collapse {
    width: 64px;
  }
  &__logo {
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-weight: 600;
    font-size: 24px;
    color: #1890ff;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
  }
  &__menu {
    flex: 1;
  }
  &__footer {
    color: rgba($color: #000000, $alpha: 0.85);
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    border-top: 1px solid #f0f0f0;
    cursor: pointer;
  }
}
</style>
