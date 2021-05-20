<template>
  <div class="lc-sign-in">
    <div class="lc-sign-in-form">
      <div class="lc-sign-in-form__header">SPA-admin</div>
      <div class="lc-sign-in-form__body">
        <el-tabs v-model="activeTabName"
                 @tab-click="handleChangeTab">
          <el-tab-pane :label="$t('page.signIn.signIn')"
                       name="signIn">
          </el-tab-pane>
          <el-tab-pane label="注册"
                       name="signUp">
          </el-tab-pane>
        </el-tabs>
        <div class="lc-sign-in-form__item">
          <el-input v-model="username"
                    placeholder="请输入用户名"></el-input>
        </div>
        <div class="lc-sign-in-form__item">
          <el-input v-model="password"
                    placeholder="请输入密码"></el-input>
        </div>
        <div class="lc-sign-in-form__item"
             v-if="activeTabName === 'signUp'">
          <el-input v-model="password"
                    placeholder="请输入确认密码"></el-input>
        </div>
        <div class="lc-sign-in-form__item">
          <el-button type="primary"
                     @click="handleSignIn">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ElInput, ElButton, ElTabs, ElTabPane } from 'element-plus';
import useUserSignIn from '@pages/sign-in/composables/useUserSignIn';

export default defineComponent({
  name: 'LcSignIn',
  components: {
    ElInput,
    ElButton,
    ElTabs,
    ElTabPane
  },
  setup() {
    const username = ref('admin');
    const password = ref('888888');
    const activeTabName = ref('signIn');

    const { handleSignIn } = useUserSignIn(username.value, password.value);

    const handleChangeTab = (tab: any) => {
      activeTabName.value = tab.props.name;
    };

    return {
      username,
      password,
      activeTabName,
      handleSignIn,
      handleChangeTab
    };
  }
});
</script>
<style lang="scss" scoped>
.lc-sign-in {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('../src/assets/images/sign_bg.png') no-repeat center center;
  background-size: cover;
  &-form {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 400px;
    &__header {
      line-height: 60px;
      margin-bottom: 20px;
      text-align: center;
      font-size: 48px;
      font-weight: bold;
      color: #e6f7ff;
      font-style: oblique;
      text-shadow: 5px 5px 8px #1890ff;
    }
    &__body {
      background: #fff;
      border-radius: 2px;
      box-shadow: 0px -5px 12px 4px rgba(0, 0, 0, 0.09);
      padding: 20px;
      ::v-deep(.el-tabs__item.is-active) {
        font-size: 18px;
      }
    }
    &__item {
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
      .el-button {
        width: 100%;
      }
      ::v-deep(.el-input__inner) {
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #dcdfe6;
      }
    }
  }
}
</style>
