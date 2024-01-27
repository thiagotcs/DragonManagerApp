import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 100vh;

  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    @media only screen and (max-width: 768px) {
      font-size: 1.75rem;
      line-height: 2rem;
    }
  }
  p {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.625;
    color: #5a645a;
    margin-top: 10px;

    @media only screen and (max-width: 768px) {
      font-size: 0.75rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    a {
      color: #3fa110;
      margin-top: 50px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#3fa110')};
      }
    }
  }
`
