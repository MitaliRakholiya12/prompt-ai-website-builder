import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173', credentials: false }))

const mongoUri = process.env.MONGO_URI || ''
const jwtSecret = process.env.JWT_SECRET || ''

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true, trim: true },
  passwordHash: String
})
const User = mongoose.model('User', userSchema)

app.get('/health', (req, res) => {
  res.json({ ok: true })
})

app.post('/auth/register', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ message: 'Email and password required' })
    const existing = await User.findOne({ email })
    if (existing) return res.status(409).json({ message: 'Email already registered' })
    const passwordHash = await bcrypt.hash(password, 10)
    const user = await User.create({ email, passwordHash })
    const token = jwt.sign({ sub: user._id, email }, jwtSecret, { expiresIn: '7d' })
    res.json({ token })
  } catch (e) {
    res.status(500).json({ message: 'Server error' })
  }
})

app.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ message: 'Email and password required' })
    const user = await User.findOne({ email })
    if (!user) return res.status(401).json({ message: 'Invalid credentials' })
    const ok = await bcrypt.compare(password, user.passwordHash)
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' })
    const token = jwt.sign({ sub: user._id, email }, jwtSecret, { expiresIn: '7d' })
    res.json({ token })
  } catch {
    res.status(500).json({ message: 'Server error' })
  }
})

async function start() {
  if (!mongoUri || !jwtSecret) {
    console.error('Missing env MONGO_URI or JWT_SECRET')
    process.exit(1)
  }
  await mongoose.connect(mongoUri)
  const port = process.env.PORT || 5000
  app.listen(port, () => {})
}

start()
