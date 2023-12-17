import axios, { CancelTokenSource } from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:3000/api',
  // baseURL: `${import.meta.env.VITE_API_HOST}/api`,
  timeout: 100000,
  headers: {
    'x-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache',
  },
  responseType: 'json',
});

// formData 헤더
export const formHeaders = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

const executingRequests: { [key: string]: CancelTokenSource } = {};

client.interceptors.request.use(
  function (config) {
    return config;
  },
  function (request) {
    const currentRequest = request;

    if (executingRequests[currentRequest.url]) {
      const source = executingRequests[currentRequest.url];
      delete executingRequests[currentRequest.url];
      source.cancel();
    }

    const source = axios.CancelToken.source();
    currentRequest.CancelToken = source.token;
    executingRequests[currentRequest.url] = source;

    return currentRequest;
  }
);

client.interceptors.response.use(
  function (response) {
    if (executingRequests[response.request.reponseURL]) {
      delete executingRequests[response.request.reponseURL];
    }

    return response;
  },
  function (error) {
    const { config } = error;
    const originalRequest = config;

    console.log('error :', error);

    if (axios.isCancel(error)) {
      console.error('cancel err: ', error);
    }

    if (executingRequests[originalRequest.url]) {
      delete executingRequests[originalRequest.url];
    }

    if (error.response) {
      // console.error('err response: ', error.response);

      // 권한 없는 경우, 로그아웃(A01: 아이덴잇 권한없음 에러 코드)
      if (error.response.data.code === 'A01') {
        // location.href = 'login';
      }
    } else {
      console.error('err message: ', error.message);
    }

    return Promise.reject(error);
  }
);

/**
 * @description
 * 서버와 쿠키를 주고 받기 위해 필요한 설정
 */
client.defaults.withCredentials = true;
