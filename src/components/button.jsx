export default function Button({ clickHandler, btnLabel, btnClass }) {
  return (
    <button className={`btn ${btnClass}`} onClick={clickHandler}>
      {btnLabel}
    </button>
  );
}
