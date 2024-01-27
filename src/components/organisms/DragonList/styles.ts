import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  padding-bottom: 2.25rem;

  border-bottom: 1px solid;
  --tw-divide-opacity: 1;
  border-color: rgb(228 228 231 / var(--tw-divide-opacity));

  h1 {
    font-size: 1.875rem;
    font-weight: bold;
    letter-spacing: -0.025em;

    @media only screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`
export const FormStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  span {
    padding: 10px;
    color: #323c32;
    font-weight: 500;
  }
  form {
    width: 100%;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
    }
  }
`
export const Content = styled.div`
  > div {
    border-radius: 0.375rem;
    border: 1px solid #cbd5e0;
    margin-top: 1rem;

    @media only screen and (max-width: 768px) {
      margin-top: 0.5rem;
    }
  }
`
