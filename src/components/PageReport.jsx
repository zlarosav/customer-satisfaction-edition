import "../css/PageReport.css"

export default function PageReport({ setCurrentPage }) {
  return (
    <section className="PageReport">
      <div className="row-top">
        <div className="PageReport-left">
          <h1>Reporte de Ayer</h1>
          <table>
            <tbody>
              <tr className="highlighted-row">
                <td>El día terminó por</td>
                <td>Falta de ingredientes</td>
              </tr>
              <tr>
                <td>Tazas vendidas</td>
                <td>6 <span className="green-word">(+6)</span></td>
              </tr>
              <tr className="highlighted-row">
                <td>Ingresos</td>
                <td>$108 <span className="green-word">(+108)</span></td>
              </tr>
              <tr>
                <td>Ingresos Extra</td>
                <td>$0 <span className="green-word">(+0)</span></td>
              </tr>
              <tr className="highlighted-row">
                <td>Total de clientes en cola</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Clientes no atendidos</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="PageReport-right">
          <h1>Feedback del Cliente</h1>
          <div className="feedback">
            <h2>Opinión Promedio</h2>
            <p>5.46</p>
            <span className="green-word">(+5.46)</span>
          </div>
          <ul className="comment-box">
            <li>Comentarios repetidos:</li>
            <li>Muy dulce para tomar.</li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="row-bottom">
        <button className="btn" onClick={() => setCurrentPage("pagePreparation")}>Siguiente</button>
      </div>
    </section>
  )
}