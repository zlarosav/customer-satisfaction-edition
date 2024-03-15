import { useState } from "react"
import Quantifier from "./Quantifier"

import "../css/PagePreparation.css"

export default function PagePreparation() {
  const [amountMilkTea, setAmountMilkTea] = useState(3)
  const [amountBrownSugar, setAmountBrownSugar] = useState(2)
  const [amountBoba, setAmountBoba] = useState(2)

  return (
    <section className="PagePreparation">
      <div className="cuerpo left-column">

        <div className="left-column product-container">
          <img src="./vaso.png" alt="Vaso" className="glass-img" />
          <div className="limiter" style={{ height: `${amountMilkTea * 9}%` }}>
            <img src="./milk_tea.png" alt="Leche con té" />
          </div>
          <div className="limiter" style={{ height: `${amountBrownSugar * 9}%` }}>
            <img src="./brown_sugar.png" alt="Azúcar Morena" />
          </div>
          <div className="limiter" style={{ height: `${amountBoba * 9}%` }}>
            <img src="./boba.png" alt="Boba"/>
          </div>
        </div>

        <div className="right-column">
          <Quantifier minValue={amountBrownSugar + 1} inputValue={amountMilkTea} setInputValue={setAmountMilkTea}>Leche con té</Quantifier>
          <Quantifier minValue={2} maxValue={amountMilkTea - 1} inputValue={amountBrownSugar} setInputValue={setAmountBrownSugar}>Azúcar Morena</Quantifier>
          <Quantifier minValue={2} inputValue={amountBoba} setInputValue={setAmountBoba}>Boba</Quantifier>
        </div>
      </div>
      <div className="right-column">
        <div className="row-top"></div>
        <div className="row-bottom"></div>
      </div>
    </section>
  )
}
