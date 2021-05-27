import Quill, { QuillOptionsStatic } from 'quill';

export default function useCreateEditor(
  container: Element,
  options?: QuillOptionsStatic | undefined
) {
  const quill = new Quill(container, options);
  return {
    quill
  };
}
