import styled from 'styled-components'
import { Button } from '../../atoms/Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  .title {
    h1 {
      font-size: 1.875rem;
      font-weight: bold;
      letter-spacing: -0.025em;

      @media only screen and (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }

  .actions {
    display: flex;
    gap: 6px;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
    }
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.25rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`
export const StyledForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
    margin-top: 1.5rem;
    width: 100%;
    --tw-divide-opacity: 1;
    border-color: rgb(228 228 231 / var(--tw-divide-opacity));

    .container {
      display: grid;
      grid-template-columns:
        minmax(7.5rem /* 120px */, 17.5rem /* 280px */) minmax(
          25rem /* 400px */,
          1fr
        )
        minmax(0, 15rem /* 240px */);
      padding-top: 2.25rem;
      gap: 0.75rem;
      border-top: 1px solid #dff1df;

      @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding-top: 0.5rem;
      }

      label {
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        --tw-text-opacity: 1;
        color: rgb(63 63 70 / var(--tw-text-opacity));
      }
      .description {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 0.25rem;
      }
    }
    @media only screen and (max-width: 768px) {
      gap: 1.5rem;
      margin-top: 0.5rem;
    }
  }
`
export const StyledButton = styled(Button)`
  width: 100%;
  &.disabled-button {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;

    &:hover {
      background-color: #ccc;
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.875rem;
  }
`
