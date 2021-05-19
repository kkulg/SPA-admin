<template>
  <el-menu :default-active="defaultActive"
           :default-openeds="defaultOpeneds"
           :router="true"
           :collapse="collapse">
    <template v-for="(menu, index) in asideMenus">
      <el-submenu v-if="menu.children?.length"
                  :key="index"
                  :index="menu.path">
        <template #title>
          <i :class="menu.icon"></i>
          <span>{{ menu.title }}</span>
        </template>
        <el-menu-item v-for="(submenu, index) in menu.children"
                      :key="index"
                      :index="submenu.path">
          <template #title>{{ submenu.title }}</template>
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-if="!menu.children?.length"
                    :key="index"
                    :index="menu.path">
        <i :class="menu.icon"></i>
        <template #title>{{ menu.title }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { ElMenu, ElSubmenu, ElMenuItem } from 'element-plus';

export default defineComponent({
  name: 'LcAsideMenu',
  components: {
    ElMenu,
    ElSubmenu,
    ElMenuItem
  },
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const defaultActive = computed(() => route.path);
    const asideMenus = computed(() => store.getters.asideMenus);
    const defaultOpeneds = computed(() => {
      const _asideMenus = asideMenus.value;
      const _defaultActive = defaultActive.value;
      let _defaultOpeneds: Array<any> = [];
      for (const menu of _asideMenus) {
        if (menu.path === _defaultActive) {
          _defaultOpeneds = [menu.path];
          break;
        } else if (menu.children?.length) {
          const submenu = menu.children.filter((submenu: any) => {
            return submenu.path === _defaultActive;
          })[0];
          if (submenu) {
            _defaultOpeneds = [menu.path];
          }
          break;
        }
      }
      return _defaultOpeneds;
    });
    return {
      asideMenus,
      defaultActive,
      defaultOpeneds
    };
  }
});
</script>
<style lang="scss">
.el-menu {
  border-right: none !important;
  .el-menu-item {
    padding-left: 54px !important;
    &:hover,
    &:focus {
      background-color: #fff;
      color: #1890ff;
    }
    &.is-active {
      color: #1890ff;
      background-color: #e6f7ff;
      border-right: 3px solid #1890ff;
    }
  }

  .el-submenu.is-active {
    .el-submenu__title {
      color: #1890ff;
      i {
        margin-right: 10px;
        color: #1890ff;
      }
    }
  }
}
</style>
