import { Outlet } from 'react-router-dom'
import { Header } from '../../components/atoms/Header'
import { MainContainer } from './styles'

export function AppLayout() {
  return (
    <div>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </div>
  )
}
