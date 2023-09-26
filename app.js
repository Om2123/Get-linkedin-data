// app.js

const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());
// Create a Sequelize instance with SQLite as the dialect
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'mydatabase.sqlite', // SQLite database file name
});

// Define a model (e.g., User)
const User = sequelize.define('User', {
  userName: DataTypes.STRING,
  bio:DataTypes.STRING,
  locationOfUser:DataTypes.STRING,
  connectionCount:DataTypes.STRING,
  followers:DataTypes.STRING,
});

// Sync the database to create tables
sequelize.sync({ force: true }).then(() => {
  console.log('Database and tables created!');
});


// Define a route to create a user
app.post('/users', async (req, res) => {
  
  console.log("someone made a post req");
  try {
    // Extract user data from the request body
    const data = req.body;
   
    // Create a new user using Sequelize's create method
    const newUser = await User.create({
      name:data.name,
      bio,
      location,
      connectionCount,
      followers,
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
  
app.listen(3000, () => {
  
  console.log('Server is running on port 3000');
});
