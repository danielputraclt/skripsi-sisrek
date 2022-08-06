export const state = () => ({
    id: "",
    nama: "",
    nis: ""
})

export const mutations = {
    setId: (state, data) => {
        state.id = data
    },
    setNama: (state, data) => {
        state.nama = data
    },
    setNis: (state, data) => {
        state.nis = data
    }
}