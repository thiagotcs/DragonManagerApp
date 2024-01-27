import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  border-bottom: 1px solid #dff1df;
  color: #3fa110;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    padding-top: 1rem;
  }
`
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 4rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  span {
    line-height: 30px;
    font-size: 30px;
    margin-left: 10px;
  }

  nav {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
  @media only screen and (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
    height: auto;
    gap: 4px;

    span {
      font-size: 24px;
    }
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    margin: 0 16px;
    line-height: 16px;

    span {
      color: #5a645a;
      font-size: 16px;
      margin: 0;
    }
    strong {
      color: #3fa110;
      font-size: 16px;
    }
  }
  button {
    background-color: transparent;
    border: none;
    color: #3fa110;
    margin-right: 16px;

    &:hover {
      color: ${shade(0.2, '#3fa110')};
    }
  }
  @media only screen and (max-width: 768px) {
    margin-left: 20px;
    img {
      width: 40px;
      height: 40px;
    }
    div {
      margin: 0 8px;
      span,
      strong {
        font-size: 14px;
      }
    }
  }
`
