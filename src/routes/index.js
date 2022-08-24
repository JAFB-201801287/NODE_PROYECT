import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.render('index', { title: 'HOME', page: 'home' }));
router.get('/about', (req, res) => res.render('index', { title: 'ABOUT', page: 'about' }));

export default router;