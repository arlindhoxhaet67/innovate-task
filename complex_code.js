// filename: complex_code.js

// This code implements a web-based chat application with multiple chatrooms and user authentication.
// It also includes features like message persistence, real-time updates, and user notifications.

// Required modules
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Create server and socket
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Configure middleware
app.use(express.json());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/chatApp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define MongoDB schemas
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const chatroomSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  chatroom: { type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom' },
});

const User = mongoose.model('User', userSchema);
const Chatroom = mongoose.model('Chatroom', chatroomSchema);
const Message = mongoose.model('Message', messageSchema);

// API routes
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({
      username: username,
      password: hashedPassword,
    });
  
    await newUser.save();
  
    return res.send('User registered successfully');
  } catch (error) {
    return res.status(500).send('Error registering user');
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await User.findOne({ username: username });
  
    if (!user) {
      return res.status(400).send('Invalid credentials');
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
  
    if (!isPasswordValid) {
      return res.status(400).send('Invalid credentials');
    }
  
    const token = jwt.sign({ userId: user._id }, 'secretKey');
  
    return res.json({ token: token });
  } catch (error) {
    return res.status(500).send('Error authenticating user');
  }
});

// More code goes here...

// Start the server
server.listen(3000, () => {
  console.log('Server started on port 3000');
});