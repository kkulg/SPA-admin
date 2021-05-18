import { ElLoading } from 'element-plus';
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type';

class UIUtil {
  /**
   * loading
   */
  public loading(text?: string): ILoadingInstance {
    return ElLoading.service({
      fullscreen: true,
      body: true,
      lock: true,
      text
    });
  }
}

export const ui = new UIUtil();
