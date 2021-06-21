<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="grid-content">
        <el-skeleton style="width: 100%"
                     animated>
          <template #template>
            <el-skeleton-item variant="image"
                              style="width: 100%; height: 240px;" />
            <div style="padding: 14px;">
              <el-skeleton-item variant="h3"
                                style="width: 50%;" />
              <div style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;">
                <el-skeleton-item variant="text"
                                  style="margin-right: 16px;" />
                <el-skeleton-item variant="text"
                                  style="width: 30%;" />
              </div>
            </div>
          </template>
        </el-skeleton>
      </div>
    </el-col>
    <el-col :span="18">
      <el-button-group>
        <el-button size="mini"
                   icon="el-icon-edit"></el-button>
        <el-button size="mini"
                   icon="el-icon-share"></el-button>
        <el-button size="mini"
                   icon="el-icon-delete"></el-button>
      </el-button-group>

      <el-dropdown size="mini"
                   split-button>
        超小尺寸
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div class="grid-content"
           style="margin-top:10px">
        <lc-editor></lc-editor>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {
  ElRow,
  ElCol,
  ElSkeleton,
  ElSkeletonItem,
  ElButtonGroup,
  ElButton,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem
} from 'element-plus';
import LcEditor from '@components/editor/src/index.vue';

export default defineComponent({
  name: 'LcAnalysis',
  components: {
    ElRow,
    ElCol,
    ElSkeleton,
    ElSkeletonItem,
    LcEditor,
    ElButtonGroup,
    ElButton,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem
  }
});
</script>
<style lang="scss" scoped>
.grid-content {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
}
</style>
