import "./App.css";
import Bubbles from "./bubbles";
import { useEffect, useState } from "react";

const bubbleList = [
  { color: "#e4c1f9", size: "200px", isKey: true },
  { color: "#d0f4de", size: "100px", isKey: false },
  { color: "#a9def9", size: "60px", isKey: false },
  { color: "#fcf6bd", size: "140px", isKey: false },
  { color: "#ff99c8", size: "35px", isKey: false },
  { color: "#e4c1f9", size: "250px", isKey: true },
  { color: "#a9def9", size: "160px", isKey: false },
  { color: "#fcf6bd", size: "110px", isKey: false },
  { color: "#ff99c8", size: "50px", isKey: true },
  { color: "#a9def9", size: "100px", isKey: false },
  { color: "#d0f4de", size: "130px", isKey: false },
  { color: "#e4c1f9", size: "30px", isKey: false },
  { color: "#ff99c8", size: "160px", isKey: false },
  { color: "#fcf6bd", size: "200px", isKey: false },
  { color: "#d0f4de", size: "40px", isKey: false },
];

function timeout() {
  return new Promise((res) => setTimeout(res, 550));
}

function bubbleTimeout() {
  return new Promise((res) => setTimeout(res, 5000));
}

function App() {
  const [firstBubble, setFirstBubble] = useState(false);
  const [secondBubble, setSecondBubble] = useState(false);
  const [thirdBubble, setThirdBubble] = useState(false);
  const [background, setBackground] = useState("background");
  const [unlocked, setUnlocked] = useState(false);
  const [invalidShake, setInvalidShake] = useState(false);
  const [invalidKey, setInvalidKey] = useState(false);
  const [keyPresses, setKeyPresses] = useState(2);

  // if button clicked, activate bubble key, if invalid bubble clicked, reset bubble keys
  function HandleBubbleClick(isKey, idProp, bubbleSelected) {
    if (!bubbleSelected) {
      decrement();
      return;
    } else {
      increment();
    }
    if (isKey && !invalidKey) {
      console.log("hello");
      if (idProp == "bubble0") {
        setFirstBubble(true);
      } else if (idProp == "bubble5") {
        setSecondBubble(true);
      } else if ("bubble8") {
        setThirdBubble(true);
      }
    } else if (!isKey) {
      setInvalidKey(true);
      setFirstBubble(false);
      setSecondBubble(false);
      setThirdBubble(false);
    }
    if (keyPresses == 5) {
      setInvalidKey(false);
      setFirstBubble(false);
      setSecondBubble(false);
      setThirdBubble(false);

      setInvalidShake(true);
      setKeyPresses(2);
    }
  }

  const increment = () => {
    const newCount = keyPresses + 1;
    setKeyPresses(newCount);
  };
  const decrement = () => {
    const newCount = keyPresses - 1;
    setKeyPresses(newCount);
  };

  async function UpdateBackground() {
    await timeout();
    setBackground("unlockedBackground");
  }

  useEffect(() => {
    if (firstBubble && secondBubble && thirdBubble) {
      console.log("in here");
      setUnlocked(true);
    }
  }, [firstBubble, secondBubble, thirdBubble]);

  return (
    <div className="App">
      <div className={background}>
        {bubbleList.map((bubble, index) => {
          return (
            <Bubbles
              updateBackground={UpdateBackground}
              bubbleKeyClick={HandleBubbleClick}
              bubbleShake={invalidShake}
              bubblePopped={unlocked}
              color={bubble.color}
              size={bubble.size}
              isKey={bubble.isKey}
              key={index}
              idProp={`bubble${index}`}
            ></Bubbles>
          );
        })}
      </div>
    </div>
  );
}

export default App;
