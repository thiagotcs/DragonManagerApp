import closeIcon from '../../../assets/close.png'
import { useModalStore } from '../../../store/useModalStore'
import { DragonModalProps } from '../../../types/apiTypes'
import { DragonDetails } from '../../organisms/DragonDetails'
import { DragonEdit } from '../../organisms/DragonEdit'
import { ModalBody, Overlay } from './styles'

export const Modal = ({ visible, onClose }: DragonModalProps) => {
  const { isEditMode } = useModalStore()
  if (!visible) {
    return null
  }
  return (
    <Overlay onClick={onClose}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <header>
          <button
            type="button"
            onClick={() => {
              onClose()
            }}
          >
            <img src={closeIcon} alt="close" width={28} height={28} />
          </button>
        </header>
        {isEditMode ? <DragonEdit onClose={onClose} /> : <DragonDetails />}
      </ModalBody>
    </Overlay>
  )
}
