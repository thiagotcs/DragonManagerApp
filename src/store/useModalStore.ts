import { IDragonData } from '@/types/apiTypes'
import { create } from 'zustand'

interface ModalState {
  selectedDragon: IDragonData | null
  setSelectedDragon: (dragon: IDragonData | null) => void
  isEditMode: boolean
  setEditMode: (editMode: boolean) => void
}

export const useModalStore = create<ModalState>((set) => ({
  selectedDragon: null,
  setSelectedDragon: (dragon) => set({ selectedDragon: dragon }),
  isEditMode: false,
  setEditMode: (editMode) => set({ isEditMode: editMode }),
}))
