<template>
  <div class="lc-layout flex">
    <lc-aside></lc-aside>
    <div class="lc-container flex flex-column flex-1">
      <lc-header></lc-header>
      <div class="lc-main flex-1">
        <router-view v-slot="{ Component }">
          <transition name="back-in-down">
            <component :is="Component" />
          </transition>
        </router-view>
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
<style lang="scss">
.back-in-down-enter-active {
  transition: all 0.8s ease-out;
  transition-delay: 0.3s;
}

.back-in-down-leave-active {
  transition: all 0.3s ease-out;
}

.back-in-down-enter-from,
.back-in-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
<style lang="scss" scoped>
.lc-layout {
  width: 100%;
  height: 100%;
}
.lc-main {
  background: #f0f2f5;
  padding: 24px;
  overflow: auto;
}
</style>
