const cors = require('cors');
const express = require('express');
const connectDB = require('./config/db.js');
const bodyParser = require('body-parser');
const authRoutes = require("./routes/authRoutes");
const communityRoutes = require("./routes/communityRoutes");
const taskRoutes = require("./routes/taskRoutes");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
connectDB();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/community', communityRoutes);
app.use('/task', taskRoutes);
app.get('/', (_req, res) => {
  res.send('Welcome to imprezz');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is live on ${PORT}`);
});
