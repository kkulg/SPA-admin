<template>
  <el-menu default-active="2">
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-basketball"></i>
        <span>dashboard</span>
      </template>
      <el-menu-item index="1-2">
        <template #title>分析页</template>
      </el-menu-item>
      <el-menu-item index="1-3">
        <template #title>监控页</template>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <template #title>导航二</template>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <template #title>导航三</template>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <template #title>导航四</template>
    </el-menu-item>
  </el-menu>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ElMenu, ElSubmenu, ElMenuItem } from 'element-plus';

export default defineComponent({
  name: 'LcAsideMenu',
  components: {
    ElMenu,
    ElSubmenu,
    ElMenuItem
  }
});
</script>
<style lang="scss" scoped>
::v-deep(.el-menu) {
  .el-menu-item.is-active {
    color: #1890ff;
    background-color: #e6f7ff;
    border-right: 3px solid #1890ff;
  }
}
</style>
