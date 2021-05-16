<template>
  <div class="lc-aside">
    <div class="lc-aside__logo">SPA-admin</div>
    <div class="lc-aside__menu">
      <lc-aside-menu></lc-aside-menu>
    </div>
    <div class="lc-aside__footer"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import LcAsideMenu from '@layout/aside-menu.vue';

export default defineComponent({
  name: 'LcAside',
  components: {
    LcAsideMenu
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
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
  &__logo {
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-weight: 600;
    font-size: 18px;
    color: #1890ff;
    cursor: pointer;
  }
  &__menu {
    flex: 1;
  }
}
</style>
