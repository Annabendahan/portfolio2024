import Layout from '../components/layout'
import * as React from "react"
import '../components/style.scss'

import h2 from '../images/h2.png'
import p1 from '../images/maillot/m1.png'
import p2 from '../images/maillot/m2.png'
import p3 from '../images/maillot/m3.png'
import p4 from '../images/maillot/m4.png'
import p5 from '../images/maillot/m5.png'
import p6 from '../images/maillot/m6.png'

import { Link } from 'gatsby';




const Sab = () => {
  return (
    <main>
        <Layout>
        <div className="project">
          <div className="project_mainpic">
            <img src={h2} alt="h2" />
          </div>
          <div className="project_text">
            <h3> MAILLOTS DU CLUB OLYMPE  ～  2022 </h3>
            <p className="project_text_desc">Création d’un jeu de maillots pour le club de foot Olympe. <br/>
            Design, patronage, sourcing, assemblage, couture, finitions, flocage. </p>
            
           <p> <i> Avec Nino Gardent-Bolzer <br/>
            Photos de Marion Renerre </i>  <br/></p>
               
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

