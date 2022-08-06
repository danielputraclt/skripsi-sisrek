import { Kriteria } from '../../models/kriteria.js'

const create = async (kriteria) => Kriteria.create(kriteria)

export default {
    create
}