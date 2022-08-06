import getSiswaService from '../services/siswa/get.js'

import postSiswaService from '../services/siswa/post.js'

import deleteSiswaService from '../services/siswa/delete.js'

import putSiswaService from '../services/siswa/put.js'


const getSiswa = async (req, res) => {
    try {
        res.status(200).json((await getSiswaService.all()))
    } catch (e) {
        res.status(500).json(e)
    }
}

const getSiswaById = async (req, res) => {
    try {
        res.json((await getSiswaService.byId(req.params.id)))
    } catch (e) {
        res.status(500).json(e)
    }
}

const createSiswa = async (req, res) => {
    try {
        const {
            nama,
            nis
        } = req.body
        const newSiswa = await postSiswaService.create({
            nama,
            nis
        })
        res.status(200).json(newSiswa)
    } catch (e) {
        res.status(500).json(e)
    }
}

const deleteSiswa = async (req, res) => {
    try {
        const siswaDeleted = await deleteSiswaService.byId(req.params.id)
        res.status(200).json({ siswaDeleted })
    } catch (e) {
        res.status(500).json(e)
    }
}

const updateSiswaById = async (req, res) => {
    try {
        const {
            nama,
            nis
        } = req.body
        console.log({
            id: req.params.id
        })
        const updateSiswaById = await putSiswaService.byId(req.params.id, {
            nama,
            nis
        })
        res.status(200).json(updateSiswaById)
    } catch (e) {
        res.status(500).json(e)
    }
}

export default {
    createSiswa,
    getSiswa,
    getSiswaById,
    deleteSiswa,
    updateSiswaById
}