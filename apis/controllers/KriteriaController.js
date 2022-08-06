import getKriteriaService from '../services/kriteria/get.js'

import postKriteriaService from '../services/kriteria/post.js'

import deleteKriteriaService from '../services/kriteria/delete.js'

import putKriteriaService from '../services/kriteria/put.js'


const getKriteria = async (req, res) => {
    try {
        res.status(200).json((await getKriteriaService.all()))
    } catch (e) {
        res.status(500).json(e)
    }
}

const getKriteriaById = async (req, res) => {
    try {
        res.json((await getKriteriaService.byId(req.params.id)))
    } catch (e) {
        res.status(500).json(e)
    }
}

const createKriteria = async (req, res) => {
    try {
        const {
            nama_kriteria,
            skor
        } = req.body
        const newKriteria = await postKriteriaService.create({
            nama_kriteria,
            skor
        })
        res.status(200).json(newKriteria)
    } catch (e) {
        res.status(500).json(e)
    }
}

const deleteKriteria = async (req, res) => {
    try {
        const kriteriaDeleted = await deleteKriteriaService.byId(req.params.id)
        res.status(200).json({ kriteriaDeleted })
    } catch (e) {
        res.status(500).json(e)
    }
}

const updateKriteriaById = async (req, res) => {
    try {
        const {
            nama_kriteria,
            skor
        } = req.body
        console.log({
            id: req.params.id
        })
        const updateKriteriaById = await putKriteriaService.byId(req.params.id, {
            nama_kriteria,
            skor
        })
        res.status(200).json(updateKriteriaById)
    } catch (e) {
        res.status(500).json(e)
    }
}

export default {
    createKriteria,
    getKriteria,
    getKriteriaById,
    deleteKriteria,
    updateKriteriaById
}