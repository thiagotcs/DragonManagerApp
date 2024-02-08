import { DeleteDragon } from '@/services/DragonService'
import { useModalStore } from '@/store/useModalStore'
import { IDragonData } from '@/types/apiTypes'
import { firstCapitalLetter, formatDatePT } from '@/utils/functions'
import { Button } from '@components/atoms/Button'
import { Modal } from '@components/atoms/Modal'
import { TableCell, TableRow } from '@components/atoms/Table'
import { Edit, Search, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useQueryClient } from 'react-query'
import { toast } from 'sonner'

export function DragonTableRow({ id, name, createdAt, type }: IDragonData) {
  const queryClient = useQueryClient()
  const { setSelectedDragon, setEditMode } = useModalStore()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleOpenDetails = (dragon: IDragonData) => {
    setIsModalVisible(true)
    setSelectedDragon(dragon)
    setEditMode(false)
  }
  const handleOpenEdit = (dragon: IDragonData) => {
    setIsModalVisible(true)
    setSelectedDragon(dragon)
    setEditMode(true)
  }
  const handleCloseModal = () => {
    setIsModalVisible(false)
    setSelectedDragon(null)
  }
  if (!id) {
    return null
  }
  const handleDelete = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        if (window.confirm('Tem certeza que deseja deletar este dragão?')) {
          DeleteDragon(id)
            .then(() => {
              queryClient.invalidateQueries('dragon')
              resolve('Dragão deletado com sucesso!')
            })
            .catch(reject)
        } else {
          reject('Ação cancelada.')
        }
      }),
      {
        loading: 'Deletando dragão...',
        success: 'Dragão deletado com sucesso!',
        error: 'Erro ao deletar dragão.',
      },
    )
  }
  return (
    <TableRow>
      <TableCell w={'1px'}>
        <Modal visible={isModalVisible} onClose={handleCloseModal} />
      </TableCell>
      <TableCell w={'64px'}>
        <Button
          variant="ghost"
          onClick={() => handleOpenDetails({ id, name, createdAt, type })}
        >
          <Search />
        </Button>
      </TableCell>
      <TableCell w={'140px'}>{id}</TableCell>
      <TableCell w={'180px'}>{firstCapitalLetter(name)}</TableCell>
      <TableCell>{firstCapitalLetter(type)}</TableCell>
      <TableCell w={'180px'}>{formatDatePT(createdAt)}</TableCell>
      <TableCell w={'64px'}>
        <Button
          variant="ghost"
          onClick={() => handleOpenEdit({ id, name, createdAt, type })}
        >
          <Edit />
        </Button>
      </TableCell>
      <TableCell w={'64px'}>
        <Button variant="ghost" onClick={handleDelete}>
          <Trash2 />
        </Button>
      </TableCell>
    </TableRow>
  )
}
