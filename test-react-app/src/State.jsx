import { useState } from "react";
import "./State.css";
import { sculptureList } from './data.js';

const COLORS = ["pink", "green", "blue", "yellow", "purple"];
//first example of State
export function State() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [count, setCount] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setCount((count) => count + 1)
  };

  return (
    <div
      className="State"
      style={{
        backgroundColor,
      }}
    >
        <h1> The color has been changed {count} times</h1>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
//second example of State
export function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
  
    function handleNextClick() {
      setIndex(index + 1);
    }
    function handlePreviousClick() {
        setIndex(index - 1);
      }
  
    function handleMoreClick() {
      setShowMore(!showMore);
    }
  
    let sculpture = sculptureList[index];
    return (
      <>
        {index>0 && <button onClick={handlePreviousClick}>Previous</button>}
        {index<11 && <button onClick={handleNextClick}>Next</button>}        
        <h2>
          <i>{sculpture.name} </i> 
          by {sculpture.artist}
        </h2>
        <h3>  
          ({index + 1} of {sculptureList.length})
        </h3>
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
        <img 
          src={sculpture.url} 
          alt={sculpture.alt}
        />
      </>
    );
}
//state on forms
export function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  
    function handleFirstNameChange(e) {
      setFirstName(e.target.value)
    }
  
    function handleLastNameChange(e) {
      setLastName(e.target.value)
    }
  
    function handleReset() {
      setFirstName('')
      setLastName('')
    }
  
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>Hi, {firstName} {lastName}</h1>
        <button onClick={handleReset}>Reset</button>
      </form>
    );
}
//avoiding contradicting state
export function FeedbackForm() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('typing');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    await sendMessage(text);
    setStatus('sent');
  }

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent) {
    return <h1>Thanks for feedback!</h1>
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}
// Pretend to send a message.
function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

//lifting up state example
export function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan&lsquo;s largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for &quot;apple&quot; and is often translated as &quot;full of apples&quot;. In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}
function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
