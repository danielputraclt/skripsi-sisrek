import getEkstraService from '../services/ekstra/get.js'

import postEkstraService from '../services/ekstra/post.js'

import deleteEkstraService from '../services/ekstra/delete.js'

import putEkstraService from '../services/ekstra/put.js'


const getEkstra = async (req, res) => {
    try {
        res.status(200).json((await getEkstraService.all()))
    } catch (e) {
        res.status(500).json(e)
    }
}

const getEkstraById = async (req, res) => {
    try {
        res.json((await getEkstraService.byId(req.params.id)))
    } catch (e) {
        res.status(500).json(e)
    }
}

const createEkstra = async (req, res) => {
    try {
        const {
            nama_ekstra
        } = req.body
        const newEkstra = await postEkstraService.create({
            nama_ekstra
        })
        res.status(200).json(newEkstra)
    } catch (e) {
        res.status(500).json(e)
    }
}

const deleteEkstra = async (req, res) => {
    try {
        const ekstraDeleted = await deleteEkstraService.byId(req.params.id)
        res.status(200).json({ ekstraDeleted })
    } catch (e) {
        res.status(500).json(e)
    }
}

const updateEkstraById = async (req, res) => {
    try {
        const {
            nama_ekstra
        } = req.body
        console.log({
            id: req.params.id
        })
        const updateEkstraById = await putEkstraService.byId(req.params.id, {
            nama_ekstra
        })
        res.status(200).json(updateEkstraById)
    } catch (e) {
        res.status(500).json(e)
    }
}

export default {
    createEkstra,
    getEkstra,
    getEkstraById,
    deleteEkstra,
    updateEkstraById
}