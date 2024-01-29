import Layout from '../components/layout'
import * as React from "react"
import '../components/style.scss'

import h8 from '../images/h8.png'
import p2 from '../images/sitelafc/p2.png'
import p3 from '../images/sitelafc/p3.png'
import p4 from '../images/sitelafc/p4.png'


import { Link } from 'gatsby';




const Sab = () => {
  return (
    <main>
        <Layout>
        <div className="project">
          <div className="project_mainpic">
            <img src={h8} alt="h1" />
          </div>
          <div className="project_text">
           <h3> SITE DES ATELIERS FC  ～  2021   </h3>
            <p className="project_text_desc">Développement du site e-commerce des ATELIERS FC
Gatsby.js, React.js, HTML, SCSS, JS, Stripe </p>
                <p><i>
            Photos de Thomas Signollet </i> 
                </p>
          </div>
          <div className="project_grid">
            <div className="project_grid_line">
              <div className="project_grid_line_p">
                <img src={p2} alt="p1" />
              </div>
              <div className="project_grid_line_p">
                <img src={p4} alt="p2" />
              </div>
              <div className="project_grid_line_p">
                <img src={p3} alt="p3" />
              </div>
            </div>
          </div>
        </div>
        </Layout>
    </main>
  )
}

export default Sab

