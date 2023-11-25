import styled from 'styled-components';

export const SHeader = {
  Wrapper: styled.header`
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 120px;
  `,
  Inner: styled.div`
    position: relative;
    padding: 0 20px;
  `,
  LeftSide: styled.div``,
  RightSide: styled.nav``,
};

export const SHeaderLogo = styled.h1`
  a {
    text-decoration: none;
  }
`;

export const SNav = {
  List: styled.ul``,
  Item: styled.li`
    a {
    }
  `,
};
