import {Router} from 'express'
import ParameterController from '../controllers/ParameterController.js'

const Parameter = Router()

Parameter.post('/signup', ParameterController.createParameter)

Parameter.get('/', ParameterController.getParameter)

Parameter.get('/:id', ParameterController.getParameterById)

Parameter.delete('/:id', ParameterController.deleteParameter)

Parameter.put('/:id', ParameterController.updateParameterById)

export default Parameter