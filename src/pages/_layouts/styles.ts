import { Flame } from 'lucide-react'
import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Sidebar = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #e1e6e1;
  background-color: #f8f9f7;
  padding: 2.5rem;
  color: var(--text-muted-foreground, #5a645a);

  img {
    max-width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 768px) {
    display: none;
    padding: 1rem;
    border-right: none;
    img {
      max-height: 50vh;
      object-fit: cover;
    }
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.125rem;
  color: var(--text-foreground, #3fa110);
`

export const Icon = styled(Flame)`
  height: 2.25rem;
  width: 2.25rem;
`

export const BrandName = styled.span`
  font-weight: 600;
  font-size: 2.75rem;
  line-height: 3.125rem;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.25rem;
  }
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
  padding: 1.5rem;

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`
