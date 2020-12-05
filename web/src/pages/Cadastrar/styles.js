import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

 
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #F0F0F5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
      width: 100%;
      height: 60px;
      color: #333;
      border: 1px solid #dcdce6;
      border-radius: 8px;
      padding: 0px 24px;
    }

    select {
      width: 100%;
      height: 60px;
      color: #333;
      border: 1px solid #dcdce6;
      border-radius: 8px;
      padding: 0px 24px;
      background: #fff;
    }

    button {
      width: 100%;
      height: 60px;
      background: #ff6961;
      border: 0;
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      margin-top: 16px;
      display: inline-block;
      font-size: 18px;
      line-height: 60px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#ff6961')};
      }
    }
`
