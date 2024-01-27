import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'
import { AddDragonData } from '../../../services/DragonService'
import { Button } from '../../atoms/Button'
import * as Input from '../../atoms/Input'
import { ErrorMessage } from '../../atoms/Input/ErrorMessage'
import { Container, Content, StyledButton, StyledForm } from './styles'

export const dragonAddFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Nome do Dragão deve ter pelo menos 3 caracteres' }),
  type: z
    .string()
    .min(3, { message: 'Tipo do Dragão deve ter pelo menos 3 caracteres' }),
  createdAt: z
    .string()
    .regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/, {
      message: 'Data deve estar no formato DD/MM/AAAA',
    }),
})

export type NewDragonFormInputs = z.infer<typeof dragonAddFormSchema>

export function DragonCreate() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<NewDragonFormInputs>({
    defaultValues: {
      name: '',
      type: '',
      createdAt: '',
    },
    resolver: zodResolver(dragonAddFormSchema),
  })

  async function handleSaveDragon(data: NewDragonFormInputs) {
    try {
      await AddDragonData(data)
      toast.success('Dragão cadastrado com sucesso!')
      reset()
    } catch (error) {
      console.error('Erro ao salvar o dragão:', error)
      toast.error('Erro ao cadastrar dragão.')
    }
  }

  const handleCancel = () => {
    reset()
  }
  return (
    <>
      <Helmet title=">Explorar Dragões" />
      <Container>
        <Content>
          <div className="title">
            <h1>Novo Dragão</h1>
          </div>
          <div className="actions">
            {isDirty && (
              <Button variant="outline" onClick={handleCancel}>
                Cancelar
              </Button>
            )}
            <StyledButton
              className={`add-order ${
                isSubmitting || !isDirty ? 'disabled-button' : ''
              }`}
              variant="primary"
              disabled={isSubmitting || !isDirty}
              type="submit"
              form="settings"
            >
              <span>Salvar</span>
            </StyledButton>
          </div>
        </Content>
        <StyledForm>
          <form id="settings" onSubmit={handleSubmit(handleSaveDragon)}>
            <div className="container">
              <label htmlFor="name">Nome do Dragão:</label>
              <div className="description">
                <Input.Root>
                  <Input.Control
                    id="name"
                    placeholder="Nome do Dragão"
                    {...register('name')}
                  />
                </Input.Root>
                <ErrorMessage error={errors.name?.message} />
              </div>
            </div>
            <div className="container">
              <label htmlFor="type">Tipo do Dragão:</label>
              <div className="description">
                <Input.Root>
                  <Input.Control
                    id="type"
                    placeholder="Tipo do Dragão"
                    {...register('type')}
                  />
                </Input.Root>
                <ErrorMessage error={errors.type?.message} />
              </div>
            </div>
            <div className="container">
              <label htmlFor="createdAt">Data da Criação:</label>
              <div className="description">
                <Input.Root>
                  <Input.Control
                    id="createdAt"
                    type="text"
                    placeholder="Data da Criação"
                    {...register('createdAt')}
                  />
                </Input.Root>
                <ErrorMessage error={errors.createdAt?.message} />
              </div>
            </div>
          </form>
        </StyledForm>
      </Container>
    </>
  )
}
