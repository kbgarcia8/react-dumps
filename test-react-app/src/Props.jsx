function Button({ text = "Click Me!", color = "red", fontSize = 12, handleClick, url }) {
    const buttonStyle = {
      color: color,
      fontSize: fontSize + "px"
    };
  
    return (
      <button onClick={() => handleClick(url)} style={buttonStyle}>
        {text}
      </button>
    );
  }
  
  export function Props() {
    const handleButtonClick = (url) => {
      window.location.href = url;
    };
  
    return (
      <div>
        <Button handleClick={handleButtonClick} url={"https://www.theodinproject.com"} />
        <Button handleClick={handleButtonClick} url={"https://www.google.com"} />
      </div>
    );
  }
  