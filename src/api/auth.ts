import useAuth from '@/hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { client } from '.';

// 로그인 요청 PARAMETER
export interface ILoginInfo {
  userName: string;
  password: string;
}

// 쿼리키
const LOGIN_KEYS = {
  login: ['auth', 'login'],
  refresh: ['auth', 'refresh'],
};
/**
 * @description
 * 로그인
 */
export function useLoginMutation() {
  const { onLoginSuccess } = useAuth();
  return useMutation({
    mutationKey: LOGIN_KEYS.login,
    mutationFn: async function (params: ILoginInfo) {
      const response = await client.post('/auth/login', params);
      return onLoginSuccess(response);
    },
    onError(e: AxiosError) {
      if (e.response && e.response.status === 401) {
        return alert('로그인 정보를 다시 확인해주세요.');
      }
    },
  });
}

/**
 * @description
 * 리프래쉬 토큰으로 재로그인
 * (쿠키에 리프래시 토큰이 없다면 401/A01 에러 처리됩니다.)
 */

export function useRefreshMutation() {
  const { onLoginSuccess } = useAuth();
  return useMutation({
    mutationKey: LOGIN_KEYS.refresh,
    mutationFn: async function () {
      const response = await client.get('/auth/refresh');
      return onLoginSuccess(response);
    },
  });
}
