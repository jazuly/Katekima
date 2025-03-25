export interface listData {
  name: string
  url: string
}

export interface newData {
  name: string
  type: 'folder' | 'file'
  path: string
}

export interface piniaStore {
  table: {
    url: string
    limit: number
    count: number
    sort: 'asc' | 'desc'
    keyword: string
    next: string | null
    previous: string | null
    results: listData[]
  }
}
