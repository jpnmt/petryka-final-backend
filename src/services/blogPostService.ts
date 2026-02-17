import { BlogPost, BlogPostModel } from '../model';

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const result: BlogPost[] = await BlogPostModel.find();
  return result;
};

export const getBlogPost = async (id: string): Promise<BlogPost | null> => {
  const result: BlogPost | null = await BlogPostModel.findById(id);
  return result;
};

type CreateBlogPostProps = BlogPost & {
  id: never;
};

export const createBlogPost = async (blogPost: CreateBlogPostProps) => {
  const newBlogPost = new BlogPostModel(blogPost);
  const result = await newBlogPost.save();
  return result;
};

export const deleteBlogPost = async (id: string): Promise<boolean> => {
  await BlogPostModel.findByIdAndDelete(id);
  return true;
};

export const editBlogPost = async (
  id: string,
  blogPost: CreateBlogPostProps,
) => {
  await BlogPostModel.findByIdAndUpdate(id, blogPost, { runValidator: true });
  const result = await getBlogPost(id);
  return result;
};
