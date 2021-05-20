<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="grid-content">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
               class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom">
              <el-button type="text"
                         class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
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
import { ElRow, ElCol, ElCard, ElButton } from 'element-plus';

export default defineComponent({
  name: 'LcMonitor',
  components: {
    ElRow,
    ElCol,
    ElCard,
    ElButton
  }
});
</script>
<style lang="scss" scoped>
.grid-content {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
