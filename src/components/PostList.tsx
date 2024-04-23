import { PostsResponse } from "../../types/posts";
import PostCard from "./PostCard";

function PostList({ posts }: PostsResponse) {
  return (
    <div className="flex flex-wrap justify-between mt-6">
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            tags={post.tags}
          />
        );
      })}
    </div>
  );
}

export default PostList;
