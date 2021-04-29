<template>
  <div class="lc-layout flex">
    <lc-aside></lc-aside>
    <div class="lc-container flex flex-column flex-1">
      <lc-header></lc-header>
      <div class="lc-main flex-1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import LcHeader from '@layout/header.vue';
import LcAside from '@layout/aside.vue';

export default defineComponent({
  name: 'LcLayout',
  components: {
    LcHeader,
    LcAside
  }
});
</script>
<style lang="scss" scoped>
.lc-layout {
  width: 100%;
  height: 100%;
}
</style>
