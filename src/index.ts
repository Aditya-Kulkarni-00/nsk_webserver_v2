import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import cors from 'cors'
import { mongoDBConnect } from "@/db/mongodb/connect"
import channelRouter from "@/routes/channel.routes"
import valueRouter from "@/routes/value.routes"
import https from 'https'
import fs from 'fs'

dotenv.config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI!
const app = express()

mongoDBConnect(MONGODB_URI)
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())
app.use(cors())
app.use("/channel", channelRouter)
app.use("/value", valueRouter)

https.createServer({ key: fs.readFileSync('./certificates/key.pem'),    cert: fs.readFileSync('./certificates/cert.pem'),    passphrase: 'aditya'}, app).listen(2000)