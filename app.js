// app.js
const express = require('express');
const bodyParser = require('body-parser');
// const sequelize = require('./database'); // Configure your Sequelize instance
const Profile = require('./profile'); // Import your model

const app = express();

app.use(bodyParser.json());

app.post('/api/profiles', async (req, res) => {
  try {
    // Handle incoming data and save it to the database (req.body)
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
