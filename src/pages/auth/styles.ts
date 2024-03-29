import { shade } from 'polished'
import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);

  }
`

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  img {
    height: 2.4rem;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    @media only screen and (max-width: 768px) {
      width: 90%;
      margin: 40px 0;
    }

    h1 {
      margin-bottom: 24px;
      color: #312e38;
    }

    button {
      background: #ff5100;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff5100')};
        color: #f4ede8;
      }
    }

    a {
      color: #312e38;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#ff5100')};
      }
    }
  }
`
