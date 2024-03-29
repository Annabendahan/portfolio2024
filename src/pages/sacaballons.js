import Layout from '../components/layout'
import * as React from "react"
import '../components/style.scss'

import h1 from '../images/h1.png'
import p1 from '../images/sab/sab1.png'
import p2 from '../images/sab/sab2.png'
import p3 from '../images/sab/sab3.png'
import p4 from '../images/sab/sab4.png'
import p5 from '../images/sab/sab5.png'
import p6 from '../images/sab/sab6.png'

import { Link } from 'gatsby';




const Sab = () => {
  return (
    <main>
        <Layout>
        <div className="project">
          <div className="project_mainpic">
            <img src={h1} alt="h1" />
          </div>
          <div className="project_text">
           <h3> SACS À BALLONS  ～  2023  </h3>
            <p className="project_text_desc">Réalisation de sacs à ballons en corde et en sangle.  <br/>
            Patronage, assemblage, couture.  </p>
                <p><i>
            Photos de Thomas Signollet </i> 
                </p>
          </div>
          <div className="project_grid">
            <div className="project_grid_line">
              <div className="project_grid_line_p">
                <img src={p1} alt="p1" />
              </div>
              <div className="project_grid_line_p">
                <img src={p2} alt="p2" />
              </div>
              <div className="project_grid_line_p">
                <img src={p3} alt="p3" />
              </div>
            </div>
            <div className="project_grid_line2">
              <div className="project_grid_line2_p">
                <img src={p4} alt="p1" />
              </div>
              <div className="project_grid_line2_p">
                <img src={p5} alt="p2" />
              </div>
              <div className="project_grid_line2_p">
                <img src={p6} alt="p3" />
              </div>
            </div>
          </div>
        </div>
        </Layout>
    </main>
  )
}

export default Sab

