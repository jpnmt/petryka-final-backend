import { NextFunction, Request, Response } from 'express';
import {
  getBlogPost,
  getBlogPosts,
  createBlogPost,
  deleteBlogPost,
  editBlogPost,
} from '../services';

export const getBlogPostController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.params.id;
  
  const result = await getBlogPost(id);

  if (!result) {
    res.status(404).send('Not Found');
    next();
    return;
  }

  res.send(result);
  next();
};

export const getBlogPostsController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result = await getBlogPosts();
  res.send(result);
};

export const createBlogPostController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const blogPost = req.body;

  const result = await createBlogPost(blogPost);

  res.send({
    blogPost: result,
    success: true,
    msg: '',
  });
};

export const deleteBlogPostController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.params.id;
  

  const result = await deleteBlogPost(id);

  if (result) {
    res.send('Success');
  } else {
    res.send('Not found').status(404);
  }
};

export const editBlogPostController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.params.id;
  const blogPost = req.body;

  const result = await editBlogPost(id, blogPost);

  if (result) {
    res.send('Success');
  } else {
    res.send('Not found').status(404);
  }
};
