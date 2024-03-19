import useConfigStore from '@/store/config/config';
import { message } from 'ant-design-vue';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

if (import.meta.env.VITE_BASEURL) {
  // axios.defaults.baseURL = import.meta.env.VITE_BASEURL;
}

export interface HttpResponse<T = unknown> {
  status: number;
  msg: string;
  code: number;
  data: T;
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    const configStore = useConfigStore();
    if (config.headers) {
      config.headers.Authorization = `Bearer ${configStore.$state.token}`;
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// add response interceptors
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (res.code === 500) {
      message.warn(res.msg || 'System Error');
      throw new Error(res.msg || 'System Error');
    }
    if (res.code === 401) {
      message.warn(res.msg || 'Permission Denied');
    }

    return response;
  },
  error => {
    if (error.toString().includes('Network Error')) {
      message.warn('Network Error');
    } else {
      message.error(error.response.data.error.message || 'Error');
    }

    return Promise.reject(error);
  },
);
