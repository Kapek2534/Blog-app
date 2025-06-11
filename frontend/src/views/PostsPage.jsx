import { PostList } from "../components/PostList/PostList";
import { Topics } from "../components/Topics/Topics";
import { FlexContainer } from "../components/FlexContainer/FlexContainer";
import { useLoaderData } from "react-router-dom";

export function PostsPage() {
  const posts = useLoaderData();

  return (
    <FlexContainer>
      <Topics posts={posts} />
      <PostList posts={posts} />
    </FlexContainer>
  );
}
