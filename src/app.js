import express from 'express';
import cookieParser from 'cookie-parser';
import LogMiddleware from './middlewares/log.middleware.js';


const app = express();
const PORT = 3019;

app.use(LogMiddleware);
app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(PORT, '포트로 서버가 열렸어요!');
});