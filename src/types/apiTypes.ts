export interface IDragonData {
  id?: string
  name: string
  createdAt: string
  type: string
  histories?: string[]
}

export interface DragonModalProps {
  visible?: boolean
  onClose: () => void
}

export interface DragonResponse {
  data: IDragonData[]
}
