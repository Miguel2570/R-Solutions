import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/health', (req, res) => {
    res.json({ status: 'API is running' });
});

export default app;