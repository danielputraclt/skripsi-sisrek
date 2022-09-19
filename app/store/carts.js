export const state = () => ({
    items: [],
})

export const getters ={ 
    cartEkstra: (state, getters, rootState) => {
      return state.items.map(({ id }) => {
        let ekstrak = rootState.ekstra.ekstra.find(
          (ekstrak) => ekstrak.id === id
        )
  
        return {
          id: id,
          nama_ekstra: ekstrak.nama_ekstra,
        }
      })
    },}

export const mutations ={
    addItem(state, id) {
        state.items.push({
          id: id,
        })
      },
}

export const actions = {
    addToCart({ commit, state }, id) {
        const found = state.items.find((ekstrak) => ekstrak.id === id)
        if (found) {
          commit('addItem', id)
        }
      },
}