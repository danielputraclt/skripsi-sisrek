import { Ekstra } from '../../models/ekstra.js'

const create = async (ekstra) => Ekstra.create(ekstra)

export default {
    create
}