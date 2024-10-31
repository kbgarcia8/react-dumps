import "../styles/Button.css";

export function Button({
  text = "Click Me!",
  source = "/src/assets/no-image.svg",
  alt = "no-image",
  processClick
}) {

  return (
    <>
      <button onClick={() => processClick()}>
        <img src={source} alt={alt} />
        <span>{text}</span>
      </button>
    </>
  );
}