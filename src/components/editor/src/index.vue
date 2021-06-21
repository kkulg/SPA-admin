<template>
  <div class="lc-editor">
    <div ref="root"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, Ref } from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

export type RefElement = Element | null;

import useCreateEditor from '@components/editor/src/composables/use-create-editor';
import useToolbar0ptions from '@components/editor/src/composables/use-toolbar-options';
import useRegisterFont from '@components/editor/src/composables/use-register-font';

export default defineComponent({
  name: 'LcEditor',
  setup() {
    const root: Ref<RefElement> = ref<RefElement>(null);
    let editor: Quill | null = null;

    onMounted(() => {
      const rootElement: Element = root.value as Element;
      const { toolbarOptions } = useToolbar0ptions();
      useRegisterFont();
      const { quill } = useCreateEditor(rootElement, {
        modules: {
          toolbar: toolbarOptions
        },
        theme: 'snow'
      });
      editor = quill;
      console.log(editor);
    });

    return {
      root,
      editor
    };
  }
});
</script>
<style lang="scss">
@import 'quill.element-plus.scss';
@import 'quill.custom-font.scss';
</style>