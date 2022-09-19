import { Kriteria } from '../../models/kriteria.js'

const byId = async (id) => Kriteria.findByIdAndDelete(id)

export default {
    byId
}