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
    <el-col :span="6">
      <div class="grid-content"></div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content"></div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content"></div>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ElRow, ElCol, ElSkeleton, ElSkeletonItem } from 'element-plus';

export default defineComponent({
  name: 'LcAnalysis',
  components: {
    ElRow,
    ElCol,
    ElSkeleton,
    ElSkeletonItem
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
