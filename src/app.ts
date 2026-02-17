import express, { Request, Response } from 'express';
import cors from 'cors';
import { blogPostRouter } from './routes';

const app = express();

app.use(cors());
app.use(express.json()); // <- this is bodyParser middleware

app.use('/blogPost', blogPostRouter);

export default app;
