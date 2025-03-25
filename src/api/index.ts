import type { newData } from '@/interfaces'
import { dataStore } from '@/stores/index'

export const index = async () => {
  try {
    const stored = dataStore()
    const response = await fetch(stored.table.url)

    if (!response.ok) throw new Error('Gagal mengambil data')

    const data = await response.json()
    stored.table = {
      ...stored.table,
      count: data.count,
      next: data.next,
      previous: data.previous,
      results: data.results,
    }
  } catch (err) {
    console.error(err)
  }
}

export const store = async (payload: newData) => {
  try {
    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      body: JSON.stringify(payload),
    })

    if (!response.ok) throw new Error('Gagal mengimput data')

    return await response.json()
  } catch (err) {
    console.error(err)
  }
}
