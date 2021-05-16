<template>
  <div class="lc-header">
    <div class="lc-header__main"></div>
    <div class="lc-header__right">
      <span class="lc-header__message">
        <el-badge :value="messageNumber" type="danger">
          <i class="el-icon-bell"></i>
        </el-badge>
      </span>
      <span class="lc-header__user">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar
              size="small"
              src="../src/assets/images/user_avatar.png"
            ></el-avatar>
            <span class="username">admin</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <i class="el-icon-user"></i>个人中心
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="el-icon-setting"></i>个人设置
              </el-dropdown-item>
              <el-dropdown-item divided>
                <i class="el-icon-setting"></i>退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </span>
      <span class="lc-header__lang">
        <el-dropdown>
          <span class="el-dropdown-link">中文</span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>中文</el-dropdown-item>
              <el-dropdown-item>English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  ElBadge,
  ElAvatar,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem
} from 'element-plus';

export default defineComponent({
  name: 'LcHeader',
  components: {
    ElBadge,
    ElAvatar,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem
  },
  setup() {
    const messageNumber = ref(99);
    return {
      messageNumber
    };
  }
});
</script>
<style lang="scss" scoped>
.lc-header {
  height: 48px;
  color: rgba(0, 0, 0, 0.85);
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  &__main {
    height: 100%;
    flex: 1;
  }
  &__right {
    height: 100%;
    display: flex;
    align-items: center;
    & > span {
      margin-left: 20px;
    }
  }
  &__lang {
    cursor: pointer;
  }
  &__user {
    display: flex;
    align-items: center;
    margin-left: 30px !important;
    cursor: pointer;
    span.username {
      margin-left: 8px;
    }
    ::v-deep(.el-dropdown) {
      span {
        display: inline-flex;
        align-items: center;
      }
    }
  }
}
</style>
