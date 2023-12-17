import { client } from '@/api';
import { tokenAtom } from '@/store/login';
import { useSetAtom } from 'jotai';

/**
 * @description
 * 로그인 관련 훅
 * @returns
 */
const useAuth = () => {
  // const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

  const setIsToken = useSetAtom(tokenAtom);

  /**
   * @description
   * - 로그인 성공시 토큰 헤더에 심어주기
   * - 토큰은 로컬 변수에 저장
   * @todo
   * - 로그인 여부 전역 상태가 true로 해주는 로직(useAtom으로 구성)
   * - 토큰 소유 여부 전역 상태가 true로 해주는 로직
   */
  function onLoginSuccess(response: { data: { accessToken: string } }) {
    const accessToken = response.data;

    console.log('accessToken :', accessToken);

    if (!accessToken) return;

    // 토큰 보유 여부
    setIsToken(true);

    // accessToken 설정
    // 새로고침 or 창 닫지 않는 이상, 엑세스 토큰을 담아서 API 요청 가능
    client.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    /**
     * @description
     * 로그인을 계속 유지하게 하려면 해당 코드 사용
     * 토큰 만료시 로그아웃시키려면 해당 코드 미사용
     */
    // accessToken 만료하기 1분 전에 로그인 연장
    // setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
  }

  return { onLoginSuccess };
};

export default useAuth;
