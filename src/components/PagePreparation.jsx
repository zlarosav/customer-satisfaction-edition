import { useState } from "react"
import Quantifier from "./Quantifier"

import "../css/PagePreparation.css"

export default function PagePreparation() {
  const [amountMilkTea, setAmountMilkTea] = useState(3)
  const [amountBrownSugar, setAmountBrownSugar] = useState(2)
  const [amountBoba, setAmountBoba] = useState(2)
  const [pricePerCup, setPricePerCup] = useState(12)

  const costPerCup = amountMilkTea+(amountBrownSugar*2)+(amountBoba*2)
  const profitPerCup = pricePerCup-costPerCup

  const [stockSupplies, setStockSupplies] = useState(1)

  return (
    <section className="PagePreparation">
      <div className="cuerpo left-column">

        <div className="product-container">
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

        <div className="quantifiers-container">
          <Quantifier minValue={amountBrownSugar + 1} inputValue={amountMilkTea} setInputValue={setAmountMilkTea}>Leche con té</Quantifier>
          <Quantifier minValue={2} maxValue={amountMilkTea - 1} inputValue={amountBrownSugar} setInputValue={setAmountBrownSugar}>Azúcar Morena</Quantifier>
          <Quantifier minValue={2} inputValue={amountBoba} setInputValue={setAmountBoba}>Boba</Quantifier>
          <div className="cost-profit">
            <p>Costo por copa: <span style={{fontWeight: 700}}>${costPerCup}</span></p>
            {profitPerCup > 0 && <p>Ganancia: <span style={{fontWeight: 700}} className="green-word">$+{profitPerCup}</span></p>}
            {profitPerCup <= 0 && <p>Ganancia: <span style={{fontWeight: 700}} className="red-word">${profitPerCup}</span></p>}
          </div>
          <Quantifier minValue={12} maxValue={50} priceValue={true} inputValue={pricePerCup} setInputValue={setPricePerCup}>Precio de Venta</Quantifier>
        </div>
      </div>
      <div className="right-column">
        <div className="row-top">
          <Quantifier minValue={1} maxValue={300} inputValue={stockSupplies} setInputValue={setStockSupplies} style={{width: "200px"}}>Reabastecer el stock <br/>de suministros</Quantifier>
          <button className="btn-restock" disabled={true}>REABASTECER $0</button>
          <div className="currentSupplies">
            <p>Taza estimada de los<br/>suministros actuales</p>
            <p>6</p>
          </div>
        </div>
        <div className="row-bottom">
          <button className="btn-startDay">Empezar día</button>
        </div>
      </div>
    </section>
  )
}
