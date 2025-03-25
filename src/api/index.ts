import type { formData } from '@/interfaces'
import { dataStore } from '@/stores/index'

export const index = async () => {
  try {
    const stored = dataStore()
    const response = await fetch('https://fakestoreapi.com/products')

    if (!response.ok) throw new Error('Gagal mengambil data')

    const data = await response.json()
    stored.table = {
      ...stored.table,
      count: data.length,
      results: data,
    }
  } catch (err) {
    console.error(err)
  }
}

export const indexV2 = async () => {
  try {
    const stored = dataStore()
    const response = await fetch(stored.tableV2.url)

    if (!response.ok) throw new Error('Gagal mengambil data')

    const data = await response.json()
    stored.tableV2 = {
      ...stored.tableV2,
      count: data.count,
      next: data.next,
      previous: data.previous,
      results: data.results,
    }
  } catch (err) {
    console.error(err)
  }
}

export const store = async (payload: formData) => {
  try {
    const stored = dataStore()
    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify(payload),
    })

    if (!response.ok) throw new Error('Gagal mengimput data')

    const data = await response.json()
    stored.table.count++
    stored.table.results.push({ ...payload, id: data.id })
  } catch (err) {
    console.error(err)
  }
}

export const update = async (payload: formData) => {
  try {
    const stored = dataStore()
    const response = await fetch(`https://fakestoreapi.com/products/${payload.id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    })

    if (!response.ok) throw new Error('Gagal mengupdate data')

    stored.table.results.map((data) => {
      if (data.id === payload.id) {
        data.title = payload.title
        data.price = payload.price
        data.description = payload.description
        data.category = payload.category
        data.image = payload.image
      }
    })
  } catch (err) {
    console.error(err)
  }
}

export const deleted = async (id: number) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) throw new Error('Gagal menghapus data')
  } catch (err) {
    console.error(err)
  }
}
