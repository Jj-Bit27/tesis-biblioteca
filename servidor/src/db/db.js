import { createPool } from 'mysql2/promise'

export const pool = createPool({
  host: 'boy8ak6ctezq7asppmf5-mysql.services.clever-cloud.com',
  port: 3306,
  user: 'uy2i461pdkciabne',
  password: 'ApMfpUsmaeQnK5z81POZ',
  database: 'boy8ak6ctezq7asppmf5'
})