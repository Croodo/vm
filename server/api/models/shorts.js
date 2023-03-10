const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  seourl: {
    type: String,
    require: true,
    unique: true,
  },
  videoId: {
    type: String,
    require: true,
    unique: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },

  keywords: {
    type: String,
  },
  channelId: {
    type: String,
  },
  lengthSeconds: {
    type: String,
  },
  thumbnail: {
    type: Object,
  },

  category: {
    type: String,
  },
  viewCount: {
    type: String,
  },
  author: {
    type: Object,
  },
  format: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  lastModified: {
    type: Date,
  },
});
module.exports = mongoose.model("shorts", postSchema);
