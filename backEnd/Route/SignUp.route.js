import express from 'express';
import { signUp } from '../Controller/SignUp.js';
const router = express.Router();

router.post('/signup', signUp);

export default router;

