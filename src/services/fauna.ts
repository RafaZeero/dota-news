import { Client } from 'faunadb'

//acesso ao bando de dados
export const fauna = new Client({
  secret: process.env.FAUNADB_KEY
})
