import express from 'express';
import Siswa from './r_siswa.js'
import Ekstra from './r_ekstra.js'
import Kriteria from './r_kriteria.js'
var router = express.Router();

/* GET home page. */
router.use('/siswa', Siswa)
router.use('/data-ekstra', Ekstra)
router.use('/kriteria', Kriteria)
export default router;
