<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LcApp',
  components: {}
});
</script>
<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
