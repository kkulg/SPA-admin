import Quill from 'quill';
import { DEFAULT_CUSTOM_FONTS } from '@components/editor/src/quill.config';

export default function useRegisterFont(fonts?: Array<string>) {
  const _fonts = fonts || [...DEFAULT_CUSTOM_FONTS];
  const Font = Quill.import('formats/font');
  console.log(Font);
  Font.whitelist = _fonts;
  Quill.register(Font, true);
}
