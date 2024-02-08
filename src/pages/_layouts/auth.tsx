import mediaImg from '@/assets/media-home.webp'
import { Outlet } from 'react-router-dom'
import {
  BrandName,
  FlexContainer,
  GridContainer,
  Icon,
  LogoContainer,
  Sidebar,
} from './styles'

export function AuthLayout() {
  return (
    <GridContainer>
      <Sidebar>
        <LogoContainer>
          <Icon />
          <BrandName>Desafio Frontend Dragon</BrandName>
        </LogoContainer>
        <img src={mediaImg} alt="Sicredi" />
        <footer>
          Painel do parceiro &copy; Dragon-APP - {new Date().getFullYear()}
        </footer>
      </Sidebar>
      <FlexContainer>
        <Outlet />
      </FlexContainer>
    </GridContainer>
  )
}
