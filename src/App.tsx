import GlobalHeader from '@/layouts/GlobalHeader';
import ReactIcon from '@icons/ico-react.svg';
import { useAtomValue } from 'jotai/react';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRefreshMutation } from './api/auth';
import { tokenAtom } from './store/login';

/**
 * @todo
 * 로그인 상태가 true이고 토큰 소유 여부가  false이면 refresh API 요청
 */
export default function App() {
  // 토큰 보유 여부
  const isToken = useAtomValue(tokenAtom);
  const navigate = useNavigate();
  // 리프래쉬 API
  const { mutate: onSilentRefresh } = useRefreshMutation();

  /**
   * @description
   * 엑세스 토큰 보유 여부에 따라 로그인 페이지 이동 및 리프래시 API 요청
   * (쿠키에 리프래시 토큰이 없다면 401/A01 에러 처리됩니다.)
   */
  useEffect(() => {
    if (!isToken) {
      navigate('/login');
      onSilentRefresh();
    }
  }, [isToken]);
  return (
    <div>
      <GlobalHeader />
      <img src={ReactIcon} alt="" />
      <Outlet />
    </div>
  );
}
