import { shade, tint } from 'polished'
import styled, { css } from 'styled-components'

const baseStyles = css`
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: opacity 150ms;
  border: none;
  cursor: pointer;
  outline: none;
  &:active {
    opacity: 0.8;
  }
`

export const GhostButton = styled.button`
  ${baseStyles}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  gap: 8;
  background: transparent;
  color: #cdcdcd;
  width: 32px;
  height: 32px;
  &:hover {
    color: ${shade(0.2, '#cdcdcd')};
  }
`

export const PrimaryButton = styled.button`
  ${baseStyles}
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: #3fa110;
  color: #fff;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${shade(0.2, '#3fa110')};
  }
  svg {
    margin-right: 10px;
  }
`

export const OutlineButton = styled.button`
  ${baseStyles}
  outline: 2px solid transparent;
  outline-offset: 2px;
  background-color: transparent;
  border: 1px solid #d2d6dc;
  color: #3f3f46;
  border-radius: 0.375rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  --bg-opacity: 1;
  &:hover {
    background-color: rgba(250, 250, 250, var(--bg-opacity));
  }
`
