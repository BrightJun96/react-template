import styled from 'styled-components';

export const BlackBtn = styled.button`
  width: 120px;
  height: 40px;
  background-color: black;
  color: white;
  border-radius: 2px;
`;

export const SLoginInput = styled.input`
  width: 200px;
  height: 40px;
  border: 1px solid grey;
  padding: 10px;
  border-radius: 2px;
`;

export const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const LoginForm = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin: auto;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
`;

export const LogoutBtn = styled.button`
  width: 120px;
  height: 40px;
  background-color: lightblue;
  color: white;
  border-radius: 2px;
`;
