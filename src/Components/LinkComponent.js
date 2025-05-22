export default function LinkComponent({ name, link, target }) {
  return (
    <div>
      <a href={link} target={target}>
        {name}
      </a>
    </div>
  );
}
