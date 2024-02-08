import { IDragonData } from '@/types/apiTypes'
import { dragonApi } from '@services/api'

export const AddDragonData = async (data: IDragonData): Promise<void> => {
  try {
    const response = await dragonApi.post('dragon', data)
    console.log('Resposta da API:', response)
  } catch (error) {
    console.error('Erro ao adicionar dragão', error)
  }
}
