import { Router } from 'express';
import {
  createBlogPostController,
  deleteBlogPostController,
  editBlogPostController,
  getBlogPostController,
  getBlogPostsController,
} from '../controllers';

export const blogPostRouter = Router();

blogPostRouter.get('/', getBlogPostsController);
blogPostRouter.get('/:id', getBlogPostController);
blogPostRouter.post('/', createBlogPostController);
blogPostRouter.delete('/:id', deleteBlogPostController);
blogPostRouter.put('/:id', editBlogPostController)
