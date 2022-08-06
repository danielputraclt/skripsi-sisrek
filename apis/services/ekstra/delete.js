import { Ekstra } from '../../models/ekstra.js'

const byId = async (id) => Ekstra.findByIdAndDelete(id)

export default {
    byId
}