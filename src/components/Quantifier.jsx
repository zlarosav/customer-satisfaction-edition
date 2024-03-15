import "../css/Quantifier.css"

export default function PagePreparation({ minValue, maxValue, inputValue, setInputValue, children }) {
  return (
    <div className="quantifier">
      <label htmlFor="input-milk-tea">{children}</label>
      <input
        type="number"
        id="input-milk-tea"
        min={minValue}
        max={maxValue || 10}
        value={inputValue}
        onChange={e => setInputValue(Number(e.target.value))}
      />
    </div>
  )
}