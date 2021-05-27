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
export type RefQuill = Quill | null;

import useCreateEditor from '@components/editor/src/composables/use-create-editor';

export default defineComponent({
  name: 'LcEditor',
  setup() {
    const root: Ref<RefElement> = ref<RefElement>(null);
    const editor: Ref<RefQuill> = ref<RefQuill>(null);

    onMounted(() => {
      const rootElement: Element = root.value as Element;
      const { quill } = useCreateEditor(rootElement, {
        theme: 'snow'
      });
      editor.value = quill;
    });

    return {
      root,
      editor
    };
  }
});
</script>
<style lang="scss" scoped>
.lc-editor {
  width: 100%;
}
</style>