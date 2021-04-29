<template>
  <lc-layout></lc-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LcLayout from '@layout/layout.vue';

export default defineComponent({
  name: 'LcApp',
  components: {
    LcLayout
  }
});
</script>
<style lang="scss">
html,
body,
#app {
  width: 100vw;
  height: 100vh;
}
</style>
