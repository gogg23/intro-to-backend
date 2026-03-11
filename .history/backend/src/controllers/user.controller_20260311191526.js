import { User } from '../models/user.model.js';

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // basic validation

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'all fields are important' });
    }

    // check if user already exists

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: 'user already exists' });
    }

    // create user
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
      loggedIn: false,
    });
  } catch (error) {
    res.
  }
};
