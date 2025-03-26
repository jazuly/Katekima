export interface listData {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface formData {
  id: number | null
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface listDataV2 {
  name: string
  url: string
}

export interface piniaStore {
  table: {
    limit: number
    count: number
    sort: 'asc' | 'desc'
    keyword: string
    page: number
    results: listData[]
  }
  tableV2: {
    url: string
    limit: number
    count: number
    sort: 'asc' | 'desc'
    keyword: string
    next: string | null
    previous: string | null
    results: listDataV2[]
  }
}
