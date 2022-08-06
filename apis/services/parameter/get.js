import { Parameter } from '../../models/parameter.js'

const all = async () => Parameter.find({})

const byId = async (_id) => Parameter.find({ _id })

export default {
    all,
    byId
}