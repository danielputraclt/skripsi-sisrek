import { Ekstra } from '../../models/ekstra.js'

const all = async () => Ekstra.find({})

const byId = async (_id) => Ekstra.find({ _id })

export default {
    all,
    byId
}