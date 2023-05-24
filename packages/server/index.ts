import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

import express from 'express'
import { createClientAndConnect } from './db'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import fallback from "express-history-api-fallback";
import path from 'path';

const root = path.resolve(__dirname, '../client/dist');

const app = express()
app.use(cors())
const port = Number(process.env.SERVER_PORT) || 3003

createClientAndConnect()

//app.get('/', (_, res) => {
//  res.json('👋 Howdy from the server :)')
//})

app.use(express.static(root));
app.use(fallback("index.html", { root }));

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
})

// lsof -i :3001 -t
