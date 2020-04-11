import { Router } from 'express';
import home from '../controllers/home';

const router = new Router();

router.get('/', home.home);
router.get('/spotify', home.getSpotifyAcess);
router.get('/i', home.middleware);
router.post('/result', home.result);


export default router;
