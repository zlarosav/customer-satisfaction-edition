import "../css/Quantifier.css"

export default function PagePreparation({ minValue, maxValue, priceValue, inputValue, setInputValue, style, children }) {
  return (
    <div className="quantifier">
      <label /* htmlFor={`input-${children.split(" ").join("-")}`} */>{children}</label>
      <div className="input-wrapper">
        {priceValue && <span>$</span>}
        <input
          type="number"
          /* id={`input-${children.split(" ").join("-")}`} */
          style={style}
          min={minValue}
          max={maxValue || 10}
          value={inputValue}
          onChange={e => setInputValue(Number(e.target.value))}
        />
      </div>
    </div>
  )
}