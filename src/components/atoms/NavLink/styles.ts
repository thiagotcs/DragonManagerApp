import { shade } from 'polished'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  color: #3fa110;
  text-decoration: none;
  padding: 0.375rem;

  &:hover {
    color: ${shade(0.2, '#3fa110')};
  }

  &[data-current='true'] {
    font-weight: 700;
    color: ${shade(0.4, '#3fa110')};
  }
`
