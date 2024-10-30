import "../styles/Button.css";

export function Button({
  text = "Click Me!",
  source = "/src/assets/no-image.svg",
  alt = "no-image",
}) {
  return (
    <>
      <button onClick={() => {}}>
        <img src={source} alt={alt} />
        <span>{text}</span>
      </button>
    </>
  );
}
