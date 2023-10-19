import "./App.css";
import Bubbles from "./bubbles";
import { useEffect, useState } from "react";

function App() {
  let bubbleList = [
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

  const [firstBubble, setFirstBubble] = useState(false);
  const [secondBubble, setSecondBubble] = useState(false);
  const [thirdBubble, setThirdBubble] = useState(false);
  const [background, setBackground] = useState("background");
  const [unlocked, setUnlocked] = useState(false);

  // if button clicked, activate bubble key, if invalid bubble clicked, reset bubble keys
  function HandleBubbleClick(isKey, idProp) {
    if (isKey) {
      if (idProp == "bubble0") {
        console.log("first bubble selected");
        setFirstBubble(true);
      } else if (idProp == "bubble5") {
        console.log("sixth bubble selected");
        setSecondBubble(true);
      } else if ("bubble8") {
        console.log("ninth bubble selected");
        setThirdBubble(true);
      }
    }
  }

  function timeout() {
    return new Promise((res) => setTimeout(res, 600));
  }

  async function UpdateBackground() {
    await timeout();
    setBackground("unlockedBackground");
  }

  useEffect(() => {
    if (firstBubble && secondBubble && thirdBubble) {
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
