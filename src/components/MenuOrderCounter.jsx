import { useState } from "react"
import PageReport from "./PageReport"
import PagePreparation from "./PagePreparation"
import PageUpgrade from "./PageUpgrade"
import PageGoal from "./PageGoal"

import "../css/MenuOrderCounter.css"

export default function MenuOrderCounter() {
  const [currentPage, setCurrentPage] = useState("pageReport")
  const [navPages, setNavPages] = useState([
    { name: "pageReport", text: "Reporte diario" },
    { name: "pagePreparation", text: "Preparación" },
    { name: "pageUpgrade", text: "Mejoras" },
    { name: "pageGoal", text: "Meta" },
  ])

  const pageComponents = {
    pageReport: <PageReport setCurrentPage={setCurrentPage} />,
    pagePreparation: <PagePreparation />,
    pageUpgrade: <PageUpgrade setNavPages={setNavPages} />,
    pageGoal: <PageGoal />
  }

  return (
    <div className="MenuOrderCounter">
      <nav>
        <ul>
          {navPages.map((page, index) => (
            <li key={index}>
              <button 
                className={(currentPage === page.name) ? "buttonSelect" : "buttonNoSelect"}
                onClick={() => setCurrentPage(page.name)}>
                {page.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {pageComponents[currentPage]}
    </div>
  )
}