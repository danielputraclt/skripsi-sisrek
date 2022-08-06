import { Ekstra } from '../../models/ekstra.js'

const byId = async (id, ekstra) => Ekstra.findByIdAndUpdate(id, ekstra)

export default {
    byId
}