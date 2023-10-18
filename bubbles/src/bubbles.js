import "./bubbles.css";
import { useEffect, useState } from "react";

export default function Bubbles(props) {
  const [bubbleSelected, setBubbleSelected] = useState(false);

  function BubbleClicked() {
    setBubbleSelected(!bubbleSelected);
  }

  return (
    <div>
      <button
        className={bubbleSelected ? "focusedBubble" : "bubble"}
        id={props.idProp}
        style={{
          backgroundColor: props.color,
          width: props.size,
          height: props.size,
        }}
        onClick={BubbleClicked}
      ></button>
    </div>
  );
}
