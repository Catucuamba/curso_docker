import express from 'express'
import mongoose from 'mongoose'

const Alumno = mongoose.model('Alumno', new mongoose.Schema({
  cedula: String,
  nombre: String,
}))

const app = express()

mongoose.connect('mongodb://userF:passwordF@localhost:27017/basealumnos?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listando... Alumnos...')
  const alumnos = await Alumno.find();
  return res.send(alumnos)
})
app.get('/crear', async (_req, res) => {
  console.log('creando...')
  await Alumno.create({ cedula: '0123456789', nombre: 'Freddy' })
  return res.send('ok')
})

app.listen(3000, () => console.log('Servidor corriendo...'))
