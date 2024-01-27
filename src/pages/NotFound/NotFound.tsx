import { Link } from 'react-router-dom'
import { Container } from './styles'

export function NotFound() {
  return (
    <Container>
      <h1>Página não encontrada</h1>
      <p>
        Voltar para o{' '}
        <Link to="/sign-in" className="text-sky-600">
          Início
        </Link>
      </p>
    </Container>
  )
}
