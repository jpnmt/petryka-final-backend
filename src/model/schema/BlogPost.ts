import { Schema, model } from 'mongoose';

export interface BlogPost {
  title: string;
  body: string;
  author: string;
  date: Date;
}

const BlogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: 'Untitled Blog',
  },
  body: {
    type: String,
    required: true,
    default: 'No content yet...',
  },
  author: {
    type: String,
    required: true,
    default: 'Anonymous',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const BlogPostModel = model('BlogPost', BlogPostSchema);
