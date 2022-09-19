export const state = () => ({
    id: "",
    nama_ekstra: "",
    
    ekstra: [],
})

export const mutations = {
    setId: (state, data) => {
        state.id = data
    },
    setNama_ekstra: (state, data) => {
        state.nama_ekstra = data
    }
}