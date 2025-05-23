import "./PostList.css";
import Post from "./Post";

export default function PostList() {
  return (
    <div className="Posts-container">
      <Post title="This is the Post Title" body="The Post Body" />
      <Post title="This is the Post Title" body="The Post Body" />
      <Post title="This is the Post Title" body="The Post Body" />
      <Post title="This is the Post Title" body="The Post Body" />
      <Post title="This is the Post Title" body="The Post Body" />
    </div>
  );
}
