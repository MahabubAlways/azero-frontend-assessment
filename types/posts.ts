export type Post = {
  id?: number;
  title: string;
  body: string;
  tags: string[];
};

export type PostsResponse = {
  posts: Post[];
};
