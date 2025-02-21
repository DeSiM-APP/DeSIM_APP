import { defineStore } from 'pinia'

export const useCloseRoutesStore = defineStore('closeRoutes', {
  state: () => ({
    closeRoutes: ''
  }),
  getters: {
    getCloseRoutes: (state) => state.closeRoutes
  },
  actions: {
    setCloseRoutes(route) {
      this.closeRoutes = route
    }
  }
})

