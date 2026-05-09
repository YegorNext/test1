import 'dotenv/config';

import express, { Express, Request, Response, NextFunction } from 'express';
import { createServer, Server } from 'http';
import helmet from 'helmet';
import morgan from 'morgan';

import domainRouter from './routes/domain.routes';
import cloudflareRouter from './routes/cloudflare.router';

const PORT: number = parseInt(process.env.PORT ?? '3000', 10);

const app: Express = express();

app.use(helmet());
app.use(express.json());
app.use(
  morgan('dev', {
    skip: (req) =>
      process.env.NODE_ENV === 'production' &&
      (req.originalUrl.startsWith('/api-docs') || req.originalUrl.includes('favicon')),
  }),
);

app.use('/api/domain', domainRouter);
app.use('/api/cloudflare', cloudflareRouter);

// Centralized error handler — must be after all routes
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  res.status(err.status ?? 500).json({
    success: false,
    message: err.message,
  });
});

const server: Server = createServer(app);

const run = async (): Promise<void> => {
  try {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error: any) {
    console.error(`Server failed to start: ${error.message}`);
    process.exit(1);
  }
};

run();
