import { useState } from 'react'
import PageReport from './PageReport'
import PagePreparation from './PagePreparation'
import PageUpgrade from './PageUpgrade'
import PageGoal from './PageGoal'

import '../css/MenuOrderCounter.css'

export default function MenuOrderCounter() {
  const [currentPage, setCurrentPage] = useState("pagePreparation")

  return (
    <div className="MenuOrderCounter">
      <nav>
        <ul>
          <li>
            <button 
              className={currentPage === "pageReport" && "buttonSelect"}
              onClick={() => setCurrentPage('pageReport')}>Reporte diario</button>
          </li>
          <li>
            <button 
              className={currentPage === "pagePreparation" && "buttonSelect"}
              onClick={() => setCurrentPage('pagePreparation')}>Preparación</button>
          </li>
          <li>
            <button 
              className={currentPage === "pageUpgrade" && "buttonSelect"}
              onClick={() => setCurrentPage('pageUpgrade')}>Mejoras</button>
          </li>
          <li>
            <button 
              className={currentPage === "pageGoal" && "buttonSelect"}
              onClick={() => setCurrentPage('pageGoal')}>Meta</button>
          </li>
        </ul>
      </nav>

      <section>
        {currentPage === 'pageReport' && <PageReport />}
        {currentPage === 'pagePreparation' && <PagePreparation />}
        {currentPage === 'pageUpgrade' && <PageUpgrade />}
        {currentPage === 'pageGoal' && <PageGoal />}
      </section>
    </div>
  )
}