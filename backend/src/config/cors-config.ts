import { CorsOptions } from 'cors';
import config from './endpoints.config';

// Define the allowed origins
const allowedOrigins: string[] = [`http://localhost:${config.FRONTEND_PORT}`];

// CORS configuration
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    console.log(origin);
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // If the origin is in the allowed list or is undefined (e.g., from a same-origin request), allow it
      callback(null, true);
    } else {
      // Otherwise, reject the request
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

export default corsOptions;