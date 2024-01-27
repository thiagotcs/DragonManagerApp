import { DragonResponse } from '../../types/apiTypes'
import { dragonApi } from '../api'

export const GetDragonDetail = async (id: string): Promise<DragonResponse> => {
  try {
    const response = await dragonApi.get<DragonResponse>(`dragon/${id}`)
    return response.data
  } catch (error) {
    console.error('Erro ao obter detalhes do dragão', error)
    throw error
  }
}
