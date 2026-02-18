const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    default: 'Announcement'
  },
  excerpt: {
    type: String,
    required: true,
    trim: true
  },
  readTime: {
    type: String,
    default: '4 min read'
  },
  content: [{
    type: {
      type: String,
      enum: ['paragraph', 'heading', 'subheading', 'list'],
      required: true
    },
    text: String,
    items: [String] // For list type
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
