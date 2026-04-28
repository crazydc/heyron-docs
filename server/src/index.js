import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => { 
  res.json({ status: 'ok', timestamp: new Date().toISOString(), version: '1.0.0' }); 
});

// Basic user endpoints (stub - requires auth implementation)
app.patch('/api/user/onboarding-complete', (req, res) => {
  res.status(501).json({ error: 'Not implemented' });
});

app.get('/api/user/me', (req, res) => {
  res.status(401).json({ error: 'Unauthorized' });
});

app.listen(PORT, () => { console.log(`🚀 Heyron API running on port ${PORT}`); });