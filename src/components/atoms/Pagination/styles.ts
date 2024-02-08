import { Button } from '@components/atoms/Button'
import { shade } from 'polished'
import styled from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`

export const TotalCountSpan = styled.span`
  font-size: 0.875rem;
  color: #323c32;
`

export const PageIndicator = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #323c32;
`

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    gap: 2rem;
  }
  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const ButtonStyled = styled(Button)`
  height: 2rem;
  width: 2rem;
  padding: 2px;
  background: transparent;

  font-size: 0.875rem;
  font-weight: 400;
  color: #cdcdcd;
  &:hover {
    color: ${shade(0.2, '#cdcdcd')};
    border: 1px solid ${shade(0.2, '#cdcdcd')};
  }

  .icon {
    height: 1rem;
    width: 1rem;
  }

  &:disabled {
    color: #a9a9a9;
    cursor: not-allowed;
    &:hover {
      color: #a9a9a9;
      border: 1px solid #a9a9a9;
    }
  }
`
