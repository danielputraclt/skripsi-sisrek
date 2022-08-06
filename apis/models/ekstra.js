import mongoose from 'mongoose'
export const Ekstra = mongoose.model('ekstra', new mongoose.Schema({
    nama_ekstra: String
}))