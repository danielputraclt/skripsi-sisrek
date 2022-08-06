import { Kriteria } from '../../models/kriteria.js'

const byId = async (id, kriteria) => kriteria.findByIdAndUpdate(id, kriteria)

export default {
    byId
}