import { AxiosRequestConfig } from 'axios';

export interface httpRequestConfig extends AxiosRequestConfig {
  loading?: boolean;
}
