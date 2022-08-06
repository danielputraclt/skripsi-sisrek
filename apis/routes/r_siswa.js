import {Router} from 'express'
import SiswaController from '../controllers/SiswaController.js'

const Siswa = Router()

Siswa.post('/signup', SiswaController.createSiswa)

Siswa.get('/', SiswaController.getSiswa)

Siswa.get('/:id', SiswaController.getSiswaById)

Siswa.delete('/:id', SiswaController.deleteSiswa)

Siswa.put('/:id', SiswaController.updateSiswaById)

export default Siswa