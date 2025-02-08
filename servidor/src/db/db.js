import { createPool } from 'mysql2/promise'

export const pool = createPool({
  host: 'host',
  port: 1111,
  user: 'usuario',
  password: 'contrase',
  database: 'bbase de datos'
})
