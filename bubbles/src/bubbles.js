import "./bubbles.css";

export default function Bubbles(props) {
  console.log(props.idProp);
  return (
    <div>
      <button
        className="bubble"
        id={props.idProp}
        style={{
          backgroundColor: props.color,
          width: props.size,
          height: props.size,
        }}
      ></button>
    </div>
  );
}
