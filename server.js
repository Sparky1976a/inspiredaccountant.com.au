const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append extension
  }
});

// Initialize multer
const upload = multer({ storage: storage });

// Middleware to serve static files from 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Route for file uploading
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully: ' + req.file.filename);
});

// Route for file downloading
app.get('/download/:filename', (req, res) => {
  const file = path.join(__dirname, 'uploads', req.params.filename);
  res.download(file); // Set disposition and send it
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
