import { Parameter } from '../../models/parameter.js'

const create = async (parameter) => Parameter.create(parameter)

export default {
    create
}