import { Siswa } from '../../models/siswa.js'

const byId = async (id, siswa) => Siswa.findByIdAndUpdate(id, siswa)

export default {
    byId
}