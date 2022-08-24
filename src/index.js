import express from 'express';
import morgan from 'morgan';
import ejs from 'ejs';

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import indexRoutes from './routes/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
//console.log(__dirname);

const app = express();

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan("dev"));

app.use(indexRoutes);

app.use(express.static(join(__dirname, "public")));
app.use(express.static(join(__dirname, "../node_modules")));

app.listen(process.env.PORT || 3000);
console.log('SERVER LISTENING ON PORT', process.env.PORT || 3000);