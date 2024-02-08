import logoImg from '@/assets/logo-southsystem.svg'
import { useAuthStore } from '@/store/useAuthStore'
import { Button } from '@components/atoms/Button'
import * as Input from '@components/atoms/Input'
import { ErrorMessage } from '@components/atoms/Input/ErrorMessage'
import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, LogIn, Mail, User, UserRoundPlus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { AnimationContainer, Container, Content } from './styles'

const signUpFormSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 caracteres' }),
  email: z.string().email({ message: 'Por favor, insira um e-mail válido.' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter pelo menos 6 caracteres.' }),
})

export type SignUpFormInputs = z.infer<typeof signUpFormSchema>

export function SignUpFields() {
  const navigate = useNavigate()
  const { signUp } = useAuthStore()

  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm<SignUpFormInputs>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpFormSchema),
  })
  async function handleSignUp(data: SignUpFormInputs) {
    try {
      await signUp(data)
      toast.success('Conta cadastrada com sucesso!')
      navigate('/sign-in')
    } catch (error) {
      toast.error('Erro ao cadastrar nome.')
    }
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="logo" />
          <form onSubmit={handleSubmit(handleSignUp)}>
            <h1>Criar conta grátis</h1>
            <div className="Container">
              <Input.Root>
                <Input.Prefix>
                  <User />
                </Input.Prefix>
                <Input.Control
                  id="name"
                  type="text"
                  placeholder="Nome"
                  {...register('name')}
                />
              </Input.Root>
              <ErrorMessage error={errors.name?.message} />
            </div>
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
              disabled={!isDirty}
              type="submit"
            >
              <UserRoundPlus />
              <span>Finalizar Cadastro</span>
            </Button>
            <Link to="/sign-in">
              <LogIn />
              Voltar para logon
            </Link>
          </form>
          <p className="message">
            Ao continuar, você concorda com nossos termos de serviço e políticas
            de privacidade
          </p>
        </AnimationContainer>
      </Content>
    </Container>
  )
}
