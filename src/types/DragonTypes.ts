import { IDragonData } from './apiTypes'

export interface DragonContextProps {
  selectedDragon: IDragonData | null
  setSelectedDragon: (dragon: IDragonData | null) => void
}

export interface DragonProviderProps {
  children: React.ReactNode
}
