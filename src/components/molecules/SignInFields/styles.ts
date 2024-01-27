import { shade } from 'polished'
import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
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
  width: 350px;

  animation: ${appearFromLeft} 1s;

  img {
    height: 2.4rem;
  }

  form {
    margin: 80px 0;
    width: 350px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #5a645a;
    }

    button {
      width: 100%;
    }

    a {
      color: #3fa110;
      margin-top: 50px;
      text-decoration: none;
      transition: color 0.2s;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        color: ${shade(0.2, '#3fa110')};
      }
      svg {
        margin-right: 16px;
      }
    }
    .Container {
      margin-bottom: 1rem;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
      margin: 40px 0;
    }
  }
`
