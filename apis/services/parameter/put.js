import { Parameter } from '../../models/parameter.js'

const byId = async (id, parameter) => Parameter.findByIdAndUpdate(id, parameter)

export default {
    byId
}