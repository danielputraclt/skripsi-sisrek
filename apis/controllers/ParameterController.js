import getParameterService from '../services/parameter/get.js'

import postParameterService from '../services/parameter/post.js'

import deleteParameterService from '../services/parameter/delete.js'

import putParameterService from '../services/parameter/put.js'


const getParameter = async (req, res) => {
    try {
        res.status(200).json((await getParameterService.all()))
    } catch (e) {
        res.status(500).json(e)
    }
}

const getParameterById = async (req, res) => {
    try {
        res.json((await getParameterService.byId(req.params.id)))
    } catch (e) {
        res.status(500).json(e)
    }
}

const createParameter = async (req, res) => {
    try {
        const {
            nama_parameter,
            skor_parameter
        } = req.body
        const newParameter = await postParameterService.create({
            nama_parameter,
            skor_parameter
        })
        res.status(200).json(newParameter)
    } catch (e) {
        res.status(500).json(e)
    }
}

const deleteParameter = async (req, res) => {
    try {
        const parameterDeleted = await deleteParameterService.byId(req.params.id)
        res.status(200).json({ parameterDeleted })
    } catch (e) {
        res.status(500).json(e)
    }
}

const updateParameterById = async (req, res) => {
    try {
        const {
            nama_parameter,
            skor_parameter
        } = req.body
        console.log({
            id: req.params.id
        })
        const updateParameterById = await putParameterService.byId(req.params.id, {
            nama_parameter,
            skor_parameter
        })
        res.status(200).json(updateParameterById)
    } catch (e) {
        res.status(500).json(e)
    }
}

export default {
    createParameter,
    getParameter,
    getParameterById,
    deleteParameter,
    updateParameterById
}