import { Parameter } from '../../models/parameter.js'

const byId = async (id) => Parameter.findByIdAndDelete(id)

export default {
    byId
}