import "./Post.css";

export default function Post({ title, body }) {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
