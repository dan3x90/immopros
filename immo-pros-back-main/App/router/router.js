import { Router } from 'express';
const router = Router();

// Import des routers
import authRouter from './authRouter.js';
import supportRouter from './supportRouter.js';
import informationRouter from './informationRouter.js';
import actionRouter from './actionRouter.js';
import collaboratorRouter from './collaboratorRouter.js';
import sectorRouter from './sectorRouter.js';
import avatarRouter from './avatarRouter.js';
import messagerieRouter from './messagerieRouter.js';
import statRouter from './statRouter.js';
import errorRouter from './errorRouter.js';

router.use(authRouter);
router.use(supportRouter);
router.use(informationRouter);
router.use(actionRouter);
router.use(collaboratorRouter);
router.use(sectorRouter);
router.use(avatarRouter);
router.use(messagerieRouter);
router.use(statRouter);
router.use(errorRouter);

export default router;
