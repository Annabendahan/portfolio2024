import Layout from '../components/layout'
import * as React from "react"
import h9 from '../images/h9.png'
import p1 from '../images/lafc/l1.png'
import p2 from '../images/lafc/l2.png'
import p3 from '../images/lafc/l3.png'
import p4 from '../images/lafc/l4.png'
import p5 from '../images/lafc/l5.png'
import p6 from '../images/lafc/l6.png'

import { Link } from 'gatsby';




const Sab = () => {
  return (
    <main>
        <Layout>
        <div className="project">
          <div className="project_mainpic">
            <img src={h9} alt="h2" />
          </div>
          <div className="project_text">
           <h3>PARTICIPATION AUX MAILLOTS DES ATELIERS FC  ～  2023   </h3> 
           <p className="project_text_desc"> Production des maillots des Ateliers FC (découpe, flocage, échenillage). </p>
           <br/>
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

