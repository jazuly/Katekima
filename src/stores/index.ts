import type { piniaStore } from '@/interfaces'
import { defineStore } from 'pinia'
import * as API from '@/api/index'
import { urlParser } from '@/helpers'

export const dataStore = defineStore('dataStore', {
  state: (): piniaStore => {
    return {
      table: {
        count: 0,
        keyword: '',
        sort: 'asc',
        limit: 10,
        page: 1,
        results: [],
      },
      tableV2: {
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
    changePageV2(url: string | null) {
      if (url) {
        urlParser(url)
        API.index()
      }
    },

    changeLimitV2(limit: number) {
      if (limit !== this.tableV2.limit) {
        this.tableV2.limit = limit

        urlParser(this.tableV2.url)
        API.index()
      }
    },
  },

  getters: {
    listDataTable: (state) => {
      let data = [...state.table.results]

      data = data.sort((a, b) =>
        state.table.sort === 'asc'
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title),
      )

      if (state.table.keyword !== '') {
        data = data.filter((data) =>
          data.title.toLowerCase().includes(state.table.keyword.toLowerCase()),
        )

        state.table.count = data.length
      } else {
        state.table.count = data.length
      }

      data = data.filter(
        (_, index) =>
          index + 1 <= state.table.limit * state.table.page && // page
          index + 1 > state.table.limit * (state.table.page - 1), // offset
      )

      return data
    },

    listDataTableV2: (state) => {
      let data = [...state.tableV2.results]

      data = data.sort((a, b) =>
        state.tableV2.sort === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
      )

      if (state.tableV2.keyword !== '') {
        data = data.filter((data) =>
          data.name.toLowerCase().includes(state.tableV2.keyword.toLowerCase()),
        )
      }

      return data
    },
  },
})
