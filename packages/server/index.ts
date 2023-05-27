import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'

import fallback from "express-history-api-fallback";
import path from 'path';

//import { createClientAndConnect } from './db'

dotenv.config()
const root = path.resolve(__dirname, '../client/dist');

const app = express()
app.use(cors())
const port = Number(process.env.SERVER_PORT) || 3001

//createClientAndConnect()

//app.get('/', (_, res) => {
//  res.json('👋 Howdy from the server :)')
//})


app.use(express.static(root));
app.use(fallback("index.html", { root }));


app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
})

// lsof -i :3001 -t
