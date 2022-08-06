import { Siswa } from '../../models/siswa.js'

const all = async () => Siswa.find({})

const byId = async (_id) => Siswa.find({ _id })

export default {
    all,
    byId
}