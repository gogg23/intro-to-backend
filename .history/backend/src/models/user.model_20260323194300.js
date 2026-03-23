import mongoose, { Schema } from 'mongoose';



  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User; 
