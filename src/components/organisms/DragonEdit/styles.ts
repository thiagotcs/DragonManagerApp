import { Button } from '@components/atoms/Button'
import styled from 'styled-components'

export const ItemDetails = styled.div`
  background-color: #fff;

  .title {
    background: #f8f9fa;
    padding: 24px;
    text-align: center;
  }
  .Container {
    margin: 24px 24px 40px;
    border-radius: 10px;
    border: 1px solid #cbd5e0;

    .description {
      display: flex;
      padding: 24px;
      flex-direction: column;
      color: #323c32;

      div {
        margin-bottom: 1rem;
      }

      @media only screen and (max-width: 768px) {
        padding: 16px;
      }
    }
    .date-create {
      display: flex;
      padding: 24px;
      justify-content: space-between;
      border-top: 1px solid #cbd5e0;
      color: #323c32;

      @media only screen and (max-width: 768px) {
        padding: 16px;
        flex-direction: column;
        gap: 10px;
      }
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
