<template>
  <div class="lc-sign-in">
    <div class="lc-sign-in-form">
      <div class="lc-sign-in-form__item">
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
      </div>
      <div class="lc-sign-in-form__item">
        <el-input v-model="password" placeholder="请输入密码"></el-input>
      </div>
      <div class="lc-sign-in-form__item">
        <el-button type="primary" @click="handleSignIn">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElInput, ElButton } from 'element-plus';

export default defineComponent({
  name: 'LcSignIn',
  components: {
    [ElInput.name]: ElInput,
    [ElButton.name]: ElButton
  },
  setup() {
    const router = useRouter();
    const handleSignIn = () => {
      router.push('/dashboard/analysis');
    };
    return {
      username: ref(''),
      password: ref(''),
      handleSignIn
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
    background: #fff;
    border-radius: 2px;
    box-shadow: 0px -5px 12px 4px rgba(0, 0, 0, 0.09);
    padding: 20px;
    width: 400px;
    &__item {
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
      .el-button {
        width: 100%;
      }
      ::v-deep .el-input {
        &__inner {
          border: none;
          border-radius: 0;
          border-bottom: 1px solid #dcdfe6;
        }
      }
    }
  }
}
</style>
