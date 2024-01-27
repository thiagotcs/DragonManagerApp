import { useModalStore } from '../../../store/useModalStore'
import { firstCapitalLetter, formatDatePT } from '../../../utils/functions'
import { ItemDetails } from './styles'

export function DragonDetails() {
  const { selectedDragon } = useModalStore()
  if (!selectedDragon) {
    return null
  }
  const { name, createdAt, type } = selectedDragon
  return (
    <>
      <ItemDetails>
        <div className="title">
          <h1>{firstCapitalLetter('Detalhes do Dragão')}</h1>
        </div>
        <div className="Container">
          <div className="description">
            <strong>Nome</strong>
            <span>{firstCapitalLetter(name)}</span>
          </div>
          <div className="description">
            <strong>Tipo</strong>
            <span>{firstCapitalLetter(type)}</span>
          </div>
          <div className="date-create">
            <strong>Data de criação</strong>
            <span>{formatDatePT(createdAt)}</span>
          </div>
        </div>
      </ItemDetails>
    </>
  )
}
