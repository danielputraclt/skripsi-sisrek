import { Siswa } from '../../models/siswa.js'

const create = async (siswa) => Siswa.create(siswa)

export default {
    create
}