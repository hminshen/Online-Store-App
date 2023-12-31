import dotenv from 'dotenv'; 
dotenv.config();

// This stores the config for the .env file

const config = {
    API_BASE_URL: process.env.API_BASE_URL ?? '',
    DATABASE_URL: process.env.DATABASE_URL ?? '',
    PORT: process.env.PORT ?? '',
    FRONTEND_HTTP: process.env.FRONTEND_HTTP ?? '',
    FRONTEND_SERVER: process.env.FRONTEND_SERVER ?? '',
    FRONTEND_PORT: process.env.FRONTEND_PORT ?? '',   
}
export default config;