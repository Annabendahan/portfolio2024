import * as React from "react"
import h32 from '../images/h32.png'
import p1 from '../images/compo/compo1.png'
import p2 from '../images/compo/compo2.png'
import p3 from '../images/compo/compo3.png'

import { Link } from 'gatsby';
import Layout from '../components/layout'




const Compo = () => {
  return (
    <main>
        <Layout>
        <div className="project">
          <div className="project_mainpic">
            <img src={h32} alt="h1" />
          </div>
          <div className="project_text">
            <p><b> COMPO POUR MATCH  ～  2021 </b> <br/>
                Compo de foot imprimée en risographie.  <br/>
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
          </div>
        </div>
        </Layout>
    </main>
  )
}

export default Compo

