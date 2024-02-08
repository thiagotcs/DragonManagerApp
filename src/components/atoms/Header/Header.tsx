import { useAuthStore } from '@/store/useAuthStore'
import { NavLink } from '@components/atoms/NavLink'
import { Flame, Home, ListPlus, LogOut } from 'lucide-react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Container, HeaderContent, Profile } from './styles'

export function Header() {
  const navigate = useNavigate()
  const { signOut } = useAuthStore()

  const { mutateAsync: signOutFn, isLoading: isSigningOut } = useMutation(
    async () => {
      signOut()
    },
    {
      onSuccess: () => {
        navigate('/sign-in', { replace: true })
      },
    },
  )

  return (
    <Container>
      <HeaderContent>
        <Flame />
        <span>|</span>
        <nav>
          <NavLink to="/dragon-list">
            <Home />
            Início
          </NavLink>
          <NavLink to="/dragon-add">
            <ListPlus />
            Novo
          </NavLink>
        </nav>
      </HeaderContent>
      <Profile>
        <img
          src="https://avatars.githubusercontent.com/u/53226663?v=4"
          alt="Thiago Carvalho"
        />
        <div>
          <span>Bem-Vindo,</span>
          <strong>Thiago Carvalho</strong>
        </div>
        <button
          type="button"
          disabled={isSigningOut}
          onClick={() => signOutFn()}
        >
          <LogOut />
        </button>
      </Profile>
    </Container>
  )
}
