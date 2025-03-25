import { dataStore } from '@/stores/index'

export const urlParser = (url: string) => {
  const store = dataStore()
  const connvertUrl = new URL(url)
  connvertUrl.searchParams.set('limit', store.table.limit.toString())

  store.table.url = connvertUrl.toString()
}
