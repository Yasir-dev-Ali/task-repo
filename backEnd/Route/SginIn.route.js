import express from 'express';
import { signIn } from '../Controller/SignIn.js';
const router = express.Router();

router.post('/signin', signIn);

export default router;