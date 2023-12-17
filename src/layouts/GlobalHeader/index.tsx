import useAuth from '@/hooks/useAuth';
import { LogoutBtn } from '@/pages/LoginPage/styles';
import { ROUTES } from '@/router';
import { tokenAtom } from '@/store/login';
import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';
import { SHeader, SHeaderLogo } from './styles';

export default function GlobalHeader() {
  // 로그아웃
  const { logout } = useAuth();
  // 토큰 보유 여부
  const isToken = useAtomValue(tokenAtom);

  return (
    <SHeader.Wrapper>
      <SHeader.LeftSide>
        <SHeaderLogo>
          <Link replace={true} to={ROUTES.home.fullPath}>
            HOME
          </Link>
        </SHeaderLogo>
      </SHeader.LeftSide>
      <SHeader.RightSide>{isToken && <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>}</SHeader.RightSide>
    </SHeader.Wrapper>
  );
}
