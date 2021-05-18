import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type';
import { AxiosResponse, AxiosError } from 'axios';
import { axios } from '@common/plugins';
import { httpRequestConfig } from '@utils/index.d';
import { ui } from '@utils/index';

const enum ContentType {
  JSON = 'application/json',
  FORM = 'application/x-www-form-urlencoded'
}

const defaultHeaders = {
  'Content-Type': ContentType.JSON
};

class HttpUtil {
  private headerInterceptor(config: httpRequestConfig): void {
    const { headers } = config;
    config.headers = {
      ...defaultHeaders,
      ...headers
    };
  }
  /**
   * base request
   */
  public request(config: httpRequestConfig) {
    let loadingInstance: ILoadingInstance;
    if (config.loading) {
      loadingInstance = ui.loading();
    }
    return new Promise((resolve, reject) => {
      this.headerInterceptor(config);
      axios(config)
        .then(
          (response: AxiosResponse) => {
            resolve(response);
          },
          (error: AxiosError) => {
            reject(error);
          }
        )
        .finally(() => {
          loadingInstance?.close();
        });
    });
  }
  /**
   * get
   */
  public get(url: string, params = {}, config?: httpRequestConfig) {
    return this.request({
      url,
      method: 'get',
      params,
      ...config
    });
  }
  /**
   * post
   */
  public post(url: string, data = {}, config?: httpRequestConfig) {
    return this.request({
      url,
      method: 'post',
      data,
      ...config
    });
  }
  /**
   * put
   */
  public put(url: string, data = {}, config?: httpRequestConfig) {
    return this.request({
      url,
      method: 'put',
      data,
      ...config
    });
  }
  /**
   * delete
   */
  public delete(url: string, config?: httpRequestConfig) {
    return this.request({
      url,
      method: 'delete',
      ...config
    });
  }
}

export const http = new HttpUtil();
