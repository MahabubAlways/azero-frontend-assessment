// TODO: This component should match the following figma design:
// https://www.figma.com/file/yArz6JS1cYHLV43pXE22GS?type=design&node-id=2-157
import { Suspense } from "react";
import fetchData from "../../api/fetchData";
import PostList from "./PostList";

const resource = fetchData(
  "https://dummyjson.com/posts?limit=4&skip=10&select=title,body,tags"
);

function LatestPosts() {
  const { posts } = resource.read();
  return (
    <div className="py-12 px-8 xl:px-0">
      <h2 className="text-art">Latest posts</h2>
      <Suspense fallback={<p>Loading time...</p>}>
        <PostList posts={posts} />
      </Suspense>
    </div>
  );
}

export default LatestPosts;
