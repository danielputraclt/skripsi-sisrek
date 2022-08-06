import mongoose from 'mongoose'
export const Kriteria = mongoose.model('kriteria', new mongoose.Schema({
    nama_kriteria: String,
    skor: Number
}))