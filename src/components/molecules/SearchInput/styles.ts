import styled from 'styled-components'
interface SearchInputProps {
  isBasketOpen?: boolean
}
export const SearchInputStyled = styled.div<SearchInputProps>`
  background-color: #f8f9fa;
  width: 100%;
  gap: 4px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    display: ${({ isBasketOpen }) => (isBasketOpen ? 'none' : 'flex')};
    padding: 16px;
    flex-direction: column;
  }
`
