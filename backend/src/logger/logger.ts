import path from 'path';
import winston from 'winston';

const logFilePath = path.join(__dirname, 'logs', 'app.log');

// Create a Winston logger instance
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: logFilePath })
  ],
});

export default logger;