import app from './app.js';
import { connectDB } from './db.js';

connectDB();
app.listen(4000, () => console.log('Server running on port 4000'));

// DEPLOY HEROKU
// app.listen(process.env.PORT || 4000, () => console.log('Server running on port 4000'));
// Agregar a Scripts en package.json: "start": "node src/index.js"