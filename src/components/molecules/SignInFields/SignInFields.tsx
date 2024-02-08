import logoImg from '@/assets/logo-southsystem.svg'
import { useAuthStore } from '@/store/useAuthStore'
import { Button } from '@components/atoms/Button'
import * as Input from '@components/atoms/Input'
import { ErrorMessage } from '@components/atoms/Input/ErrorMessage'
import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, LogIn, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { AnimationContainer, Container, Content } from './styles'

const signInFormSchema = z.object({
  email: z.string().email({ message: 'Por favor, insira um e-mail válido.' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter pelo menos 6 caracteres.' }),
})

export type SignInFormInputs = z.infer<typeof signInFormSchema>

export function SignInFields() {
  const navigate = useNavigate()
  const { signIn } = useAuthStore()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInFormInputs>({
    resolver: zodResolver(signInFormSchema),
  })

  async function handleSigIn(data: SignInFormInputs) {
    try {
      await signIn({ email: data.email, password: data.password })
      toast.success('Credenciais validadas com sucesso.')
      navigate('/dragon-list')
    } catch (error) {
      toast.error('Credenciais inválidas.', {
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
      })
    }
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="logo" />
          <form onSubmit={handleSubmit(handleSigIn)}>
            <h1>Acessar Painel</h1>
            <div className="Container">
              <Input.Root>
                <Input.Prefix>
                  <Mail />
                </Input.Prefix>
                <Input.Control
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  {...register('email')}
                />
              </Input.Root>
              <ErrorMessage error={errors.email?.message} />
            </div>
            <div className="Container">
              <Input.Root>
                <Input.Prefix>
                  <Lock />
                </Input.Prefix>
                <Input.Control
                  id="password"
                  type="password"
                  placeholder="Senha"
                  {...register('password')}
                />
              </Input.Root>
              <ErrorMessage error={errors.password?.message} />
            </div>
            <Button
              className="add-order"
              variant="primary"
              disabled={isSubmitting}
              type="submit"
            >
              <User />
              <span>Acessar minha conta</span>
            </Button>
            <Link to="/sign-up">
              <LogIn />
              Criar conta
            </Link>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  )
}
