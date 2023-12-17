import axios from 'axios';

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

/**
 * @description
 * axios.interceptors.use에 대하여
 * interceptors.use의 첫번째 콜백함수는 요청/응답이 성공했을 때, 실행되는 함수입니다.
 * interceptors.request.use()&interceptors.response.use()
 * use(onFulfilled?: ((value: V) => V | Promise<V>) | null, onRejected?: ((error: any) => any) | null, options?: AxiosInterceptorOptions): number;
 *   interceptors: {
    request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
  */

/**
 * @description
 * request.use의 경우, 첫번째 콜백함수의 인자는 axios config 값이며 해당 콜백함수는 콜백함수의 인자 값인 config를 그대로 반환해줘야합니다.
 */
// client.interceptors.request.use(
//   /**
//    * @param config
//    * @description
//    * interceptors: {
//     request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
//   };
//    */
//   function (config) {
//     const source = axios.CancelToken.source();
//     console.log('cancel Token :', source);

//     console.log('interceptors Request config :', config);

//     return config;
//   },
//   function (error) {
//     // console.log('interceptors Request :', request);

//     const currentRequest = error;

//     /**
//      * 요청 중 에러가 있다면 해당 요청 취소
//      */
//     if (executingRequests[currentRequest.url]) {
//       const source = executingRequests[currentRequest.url];
//       delete executingRequests[currentRequest.url];
//       source.cancel();
//     }

//     const source = axios.CancelToken.source();
//     currentRequest.CancelToken = source.token;
//     executingRequests[currentRequest.url] = source;

//     return currentRequest;
//   }
// );
const pending: { [key: string]: boolean } = {};
axios.interceptors.request.use(
  (config) => {
    const requestKey = `${config.method} ${config.url}`;
    if (requestKey in pending) {
      config.cancelToken = new axios.CancelToken((cancel) => {
        cancel(`중복 요청: ${requestKey}`);
      });
    } else {
      pending[requestKey] = true;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    const requestKey = `${response.config.method} ${response.config.url}`;
    if (requestKey in pending) {
      delete pending[requestKey];
    }
    return response;
  },
  (error) => {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
    }
    if (error.response) {
      // console.error('err response: ', error.response);

      // 권한 없는 경우, 로그아웃(A01: 아이덴잇 권한없음 에러 코드)
      if (error.response.data.code === 'A01') {
        // location.href = 'login';
      }
    } else {
      // console.error('err message: ', error.message);
    }
    return Promise.reject(error);
  }
);

/**
 * @description
 * 서버와 쿠키를 주고 받기 위해 필요한 설정
 */
client.defaults.withCredentials = true;
