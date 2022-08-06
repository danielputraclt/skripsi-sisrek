export const state = () => ({
    id: "",
    nama_parameter: "",
    skor_parameter: ""
})

export const mutations = {
    setId: (state, data) => {
        state.id = data
    },
    setNama_parameter: (state, data) => {
        state.nama_parameter = data
    },
    setSkor_parameter: (state, data) => {
        state.skor_parameter = data
    }
}