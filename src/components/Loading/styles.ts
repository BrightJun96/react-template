import styled from 'styled-components';

export const SLoadingSection = {
  Container: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `,
  Loading: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Message: styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 20px;
    font-size: 20px;
    color: #d9d9d9;
  `,
};
