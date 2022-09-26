const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER || 'mufdidev'
const DB_PASSWORD = process.env.DB_PASSWORD || '12345'
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_NAME = process.env.DB_NAME || 'dogs'
const DB_PORT = process.env.DB_PORT || '5432'
const API_KEY = process.env.API_KEY || '3cb6b302-54e6-465c-9fc7-99e4a6150ef3'
 


module.exports = {
    PORT,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
    DB_PORT,
    API_KEY
}