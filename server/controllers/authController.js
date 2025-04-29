//-----------------------------------------
// Sample of authController
//-----------------------------------------

const User = require('../models/User');

// Simple Register
exports.register = async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;

    const user = new User({ fullName, username, email, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(500).json({ message: 'Registration failed.' });
  }
};

// Simple Login (no real auth yet, just boilerplate)
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Normally you'd check hashed password here (not now, it's just boilerplate)
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    res.status(200).json({ message: 'Logged in successfully.' });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ message: 'Login failed.' });
  }
};
