import { Kriteria } from '../../models/kriteria.js'

const byId = async (id, kriteria) => Kriteria.findByIdAndUpdate(id, kriteria)

export default {
    byId
}