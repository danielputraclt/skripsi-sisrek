export const state = () => ({
    id: "",
    nama_kriteria: "",
    skor: ""
})

export const mutations = {
    setId: (state, data) => {
        state.id = data
    },
    setNama_kriteria: (state, data) => {
        state.nama_kriteria = data
    },
    setSkor: (state, data) => {
        state.skor = data
    }
}