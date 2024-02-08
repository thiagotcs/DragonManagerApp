import { IDragonData } from '@/types/apiTypes'
import { dragonApi } from '@services/api'

export const updateDragon = async (
  id: string,
  data: IDragonData,
): Promise<void> => {
  try {
    await dragonApi.put(`dragon/${id}`, data)
  } catch (error) {
    console.error('Erro ao atualizar dragão', error)
  }
}
