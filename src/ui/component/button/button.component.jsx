import "./button.css";

export function Button({ text, callback, styleSecundary }) {
  return (
    <button
      className={`customer-acquisition_text_button ${styleSecundary}`}
      onClick={callback}
    >
      {text}
    </button>
  );
}
