const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();

// Middleware to parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create a Sequelize instance with SQLite as the dialect
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'mydatabase.sqlite', // SQLite database file name
});

// Define a model (e.g., User)
const User = sequelize.define('User', {
  userName: DataTypes.STRING,
  bio: DataTypes.STRING,
  locationOfUser: DataTypes.STRING,
  connectionCount: DataTypes.INTEGER, // Corrected data type to INTEGER
  followers: DataTypes.INTEGER, // Corrected data type to INTEGER
});

// Sync the database to create tables
sequelize.sync({ force: true }).then(() => {
  console.log('Database and tables created!');
});

// Define a route to create a user
app.post('/users', async (req, res) => {
  console.log("Someone made a post request");
  try {
    // Extract user data from the request body
    const data = req.body;

    // Create a new user using Sequelize's create method
    const newUser = await User.create({
      userName: data.userName,
      bio: data.bio,
      locationOfUser: data.locationOfUser,
      connectionCount: data.connectionCount,
      followers: data.followers,
    });

    console.log(req.body);

    // Respond with the newly created user as JSON
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong!' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Define a route to get all users
app.get('/allusers', async (req, res) => {
  try {
    const users = await User.findAll(); // Query all users from the database
    res.json(users); // Send users as JSON response
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
