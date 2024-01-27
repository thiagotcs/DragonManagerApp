import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useQueryClient } from 'react-query'
import { toast } from 'sonner'
import { z } from 'zod'
import { updateDragon } from '../../../services/DragonService'
import { useModalStore } from '../../../store/useModalStore'
import { DragonModalProps, IDragonData } from '../../../types/apiTypes'
import { formatDatePT } from '../../../utils/functions'
import * as Input from '../../atoms/Input'
import { ItemDetails, StyledButton } from './styles'

const dragonEditForm = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  createdAt: z.string(),
})

type DragonEditForm = z.infer<typeof dragonEditForm>

export function DragonEdit({ onClose }: DragonModalProps) {
  const { selectedDragon } = useModalStore()
  const queryClient = useQueryClient()
  if (!selectedDragon) {
    return null
  }

  const defaultValues: IDragonData = useMemo(
    () => ({
      ...selectedDragon,
      createdAt: formatDatePT(selectedDragon.createdAt),
    }),
    [selectedDragon],
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = useForm<DragonEditForm>({
    defaultValues: defaultValues,
  })

  async function handleDragonEdit(data: DragonEditForm) {
    await updateDragon(data.id, data)
    onClose()
    try {
      queryClient.invalidateQueries('dragon')
      toast.success('Dragão atualizado com sucesso!')
    } catch (error) {
      toast.error('Falha na atualização do dragão', {
        description:
          'Não foi possível concluir a edição. Por favor, tente novamente mais tarde.',
      })
    }
  }

  return (
    <>
      <ItemDetails>
        <form onSubmit={handleSubmit(handleDragonEdit)}>
          <div className="title">
            <h1>Editar Informações do Dragão</h1>
          </div>
          <div className="Container">
            <div className="description">
              <Input.Root>
                <Input.Control
                  id="name"
                  type="text"
                  placeholder="Nome"
                  {...register('name')}
                />
              </Input.Root>
              <Input.Root>
                <Input.Control
                  id="type"
                  type="text"
                  placeholder="Tipo"
                  {...register('type')}
                />
              </Input.Root>
              <Input.Root>
                <Input.Control
                  id="createdAt"
                  type="text"
                  placeholder="Data"
                  {...register('createdAt')}
                />
              </Input.Root>
            </div>
            <div className="date-create">
              <StyledButton
                className={`add-order ${
                  isSubmitting || !isDirty ? 'disabled-button' : ''
                }`}
                variant="primary"
                disabled={isSubmitting || !isDirty}
                type="submit"
              >
                <span>Atualizar</span>
              </StyledButton>
            </div>
          </div>
        </form>
      </ItemDetails>
    </>
  )
}
