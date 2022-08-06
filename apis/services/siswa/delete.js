import { Siswa } from '../../models/siswa.js'

const byId = async (id) => Siswa.findByIdAndDelete(id)

export default {
    byId
}