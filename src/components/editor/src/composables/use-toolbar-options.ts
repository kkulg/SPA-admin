import { DEFAULT_CUSTOM_FONTS } from '@components/editor/src/quill.config';
export default function useToolbar0ptions() {
  const toolbarOptions = [
    [
      {
        font: [...DEFAULT_CUSTOM_FONTS]
      }
    ],
    [{ size: ['small', false, 'large', 'huge'] }],

    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],

    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],

    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }],
    [{ background: [] }],
    [{ align: [] }],

    ['link', 'image', 'video', 'formula'],

    ['clean']
  ];
  return {
    toolbarOptions
  };
}
