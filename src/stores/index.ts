import type { piniaStore } from '@/interfaces'
import { defineStore } from 'pinia'
import * as API from '@/api/index'
import { urlParser } from '@/helpers'

export const dataStore = defineStore('dataStore', {
  state: (): piniaStore => {
    return {
      table: {
        url: 'https://pokeapi.co/api/v2/berry?offset=0&limit=20',
        count: 0,
        keyword: '',
        sort: 'asc',
        limit: 20,
        next: null,
        previous: null,
        results: [],
      },
    }
  },

  actions: {
    changePage(url: string | null) {
      if (url) {
        urlParser(url)
        API.index()
      }
    },

    changeLimit(limit: number) {
      if (limit !== this.table.limit) {
        this.table.limit = limit

        urlParser(this.table.url)
        API.index()
      }
    },
  },

  getters: {
    listDataTable: (state) => {
      let data = [...state.table.results]

      data = data.sort((a, b) =>
        state.table.sort === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
      )

      if (state.table.keyword !== '') {
        data = data.filter((data) => data.name.includes(state.table.keyword))
      }

      return data
    },
  },
})
