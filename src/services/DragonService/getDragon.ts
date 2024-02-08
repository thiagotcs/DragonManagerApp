import { DragonResponse, IDragonData } from '@/types/apiTypes'
import { dragonApi } from '@services/api'

export const GetDragon = async (): Promise<IDragonData[]> => {
  try {
    const response = await dragonApi.get<DragonResponse>('dragon')
    if (Array.isArray(response.data)) {
      return response.data
    } else {
      return []
    }
  } catch (error) {
    console.error('Erro ao obter dragões', error)
    throw error
  }
}
