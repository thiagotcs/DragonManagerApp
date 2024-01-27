import styled from 'styled-components'

export const RootStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 44px;
  gap: 0.5rem;

  border-radius: 0.5rem;
  border: 1px solid #cbd5e0;
  --tw-border-opacity: 1;
  border-color: rgb(212 212 216 / var(--tw-border-opacity));
  padding: 8px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  outline: 2px solid transparent;
  outline-offset: 2px;

  &:focus-within {
    border-color: #3fa110;
    box-shadow: 0 0 0 2px #8bc34a;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 0;
  }
`
export const ControlStyled = styled.input`
  flex: 1;
  border: 0;
  background-color: transparent;
  padding: 0;
  color: #2c2c2c;
  outline: none;
  transition:
    color 0.2s,
    placeholder 0.2s;
`
export const PrefixStyled = styled.div`
  width: 48px;
  height: 44px;
  padding: 10px 12px 10px 12px;
  gap: 10px;
  color: #8a94a4;
`
export const StyleErrorMessage = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
`
