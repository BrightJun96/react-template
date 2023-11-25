import { Link } from 'react-router-dom';
import { SHeader, SHeaderLogo, SNav } from './styles';
import { ROUTES } from '@/router';
import { SITE_NAVIGATIONS } from './constants.ts';

export default function GlobalHeader() {
  return (
    <SHeader.Wrapper>
      <SHeader.LeftSide>
        <SHeaderLogo>
          <Link replace={true} to={ROUTES.home.fullPath}>
            HOME
          </Link>
        </SHeaderLogo>
      </SHeader.LeftSide>
      <SHeader.RightSide>
        <SNav.List>
          {SITE_NAVIGATIONS.map((nav) => (
            <SNav.Item>
              <Link to={nav.to}>{nav.text}</Link>
            </SNav.Item>
          ))}
        </SNav.List>
      </SHeader.RightSide>
    </SHeader.Wrapper>
  );
}
