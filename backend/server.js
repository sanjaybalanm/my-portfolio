const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - allow all origins in production
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  credentials: false,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Portfolio API is running 🚀',
    timestamp: new Date().toISOString(),
  });
});

// Always serve the React frontend if the dist folder exists
const distPath = path.join(__dirname, '../frontend/dist');
if (fs.existsSync(distPath)) {
  console.log('✅ Serving frontend from:', distPath);
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  console.log('ℹ️  No frontend dist folder found. Running in API-only mode.');
  app.get('/', (req, res) => {
    res.json({ message: 'Portfolio API is running. Frontend not built yet.' });
  });
}

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌ Port ${PORT} is already in use.`);
    console.error(`   Run this to free it: netstat -ano | findstr :${PORT}`);
    console.error(`   Then: taskkill /PID <PID> /F\n`);
    process.exit(1);
  } else {
    throw err;
  }
});
