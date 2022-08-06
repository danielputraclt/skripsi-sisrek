import { Kriteria } from '../../models/kriteria.js'

const all = async () => Kriteria.find({})

const byId = async (_id) => Kriteria.find({ _id })

export default {
    all,
    byId
}