/**
 *
 * @description
 * - 로그인 과정 예시 코드입니다.
 * - API에 따라 코드가 달라질 수 있습니다.
 */

import { ILoginInfo, useLoginMutation } from '@/api/auth';
import LoadingSection from '@/components/Loading/Loading';
import useQueryString from '@/hooks/useQueryString';
import { tokenAtom } from '@/store/login';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlackBtn, LoginContainer, LoginForm, SLoginInput, Title } from './styles';

const Login = () => {
  const navigate = useNavigate();

  const { qsChangeHandler, getQueryString } = useQueryString();

  const [info, setInfo] = useState<ILoginInfo>({
    userName: '',
    password: '',
  });

  const userName = getQueryString('userName', '');
  const password = getQueryString('password', '');

  console.log('QS userName :', userName);
  console.log('QS password :', password);

  // 로그인 API
  const { mutate: login } = useLoginMutation();

  // 토큰 보유 여부
  const token = useAtomValue(tokenAtom);

  // 인풋 핸들러
  function commonChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setInfo((p) => ({ ...p, [name]: value }));

    qsChangeHandler({
      text: value,
      name,
    });
  }

  // 로그인
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!info.userName) return alert('아이디를 입력해주세요.');
    if (!info.password) return alert('비밀번호를 입력해주세요.');

    login(info);
    // 폼 초기화
    setInfo({
      userName: '',
      password: '',
    });
  }

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <LoginContainer>
      <LoginForm onSubmit={submit}>
        <Title>로그인</Title>
        <SLoginInput
          type="text"
          placeholder="아이디"
          name="userName"
          onChange={commonChangeHandler}
          value={info.userName}
        />
        <SLoginInput
          type="text"
          placeholder="비밀번호"
          name="password"
          onChange={commonChangeHandler}
          value={info.password}
        />
        <BlackBtn type="submit">로그인 버튼</BlackBtn>
        <LoadingSection isLoading={true} isError={false} isEmpty={false} />
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
