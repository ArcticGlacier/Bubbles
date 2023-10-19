import "./bubbles.css";
import { useEffect, useState } from "react";

export default function Bubbles(props) {
  const [bubbleSelected, setBubbleSelected] = useState(false);

  function BubbleClicked() {
    setBubbleSelected(!bubbleSelected);
  }

  function BubbleStyle() {
    if (props.bubbleShake) {
      return `shake ${props.idProp}`;
    } else if (props.bubblePopped) {
      props.updateBackground();
      return `popped ${props.idProp}`;
    } else if (bubbleSelected) {
      return `focusedBubble ${props.idProp}`;
    } else {
      return `bubble ${props.idProp}`;
    }
  }

  useEffect(() => {
    props.bubbleKeyClick(props.isKey, props.idProp, bubbleSelected);
  }, [bubbleSelected]);

  return (
    <div>
      <button
        className={BubbleStyle()}
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
