import mongoose from 'mongoose'
export const Parameter = mongoose.model('parameter', new mongoose.Schema({
    nama_parameter: String,
    skor_parameter: Number
}))