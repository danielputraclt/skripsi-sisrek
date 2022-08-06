import {Router} from 'express'
import EkstraController from '../controllers/EkstraController.js'

const Ekstra = Router()

Ekstra.post('/signup', EkstraController.createEkstra)

Ekstra.get('/', EkstraController.getEkstra)

Ekstra.get('/:id', EkstraController.getEkstraById)

Ekstra.delete('/:id', EkstraController.deleteEkstra)

Ekstra.put('/:id', EkstraController.updateEkstraById)

export default Ekstra