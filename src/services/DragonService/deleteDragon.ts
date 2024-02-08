import { dragonApi } from '@services/api'

export const DeleteDragon = async (id: string): Promise<void> => {
  try {
    await dragonApi.delete(`dragon/${id}`)
  } catch (error) {
    console.error('Erro ao deletar dragão', error)
  }
}
