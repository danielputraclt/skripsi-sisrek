import {Router} from 'express'
import KriteriaController from '../controllers/KriteriaController.js'

const Kriteria = Router()

Kriteria.post('/signup', KriteriaController.createKriteria)

Kriteria.get('/', KriteriaController.getKriteria)

Kriteria.get('/:id', KriteriaController.getKriteriaById)

Kriteria.delete('/:id', KriteriaController.deleteKriteria)

Kriteria.put('/:id', KriteriaController.updateKriteriaById)

export default Kriteria