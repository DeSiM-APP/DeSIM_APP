import { useCloseRoutesStore } from './closeRoute'

export const useStore = () => {
  return {
    closeRoutes: useCloseRoutesStore()
  }
}


