import Layout from '../components/layout'
import * as React from "react"
import h7 from '../images/h7.png'
import p1 from '../images/sac/s1.png'
import p2 from '../images/sac/s2.png'
import p3 from '../images/sac/s3.png'
import p4 from '../images/sac/s4.png'
import p5 from '../images/sac/s5.png'
import p6 from '../images/sac/s6.png'

import { Link } from 'gatsby';


const Sac = () => {
  return (
    <main>
        <Layout>
        <div className="project">
          <div className="project_mainpic">
            <img src={h7} alt="h1" />
          </div>
          <div className="project_text">
            <p><b> SAC À MAIN  ～  2023     </b> <br/>
            Réalisation d’un sac à main en tissu de récupération + étiquette 
            Patronage, assemblage, couture, linogravure, tamponage
            <br/>
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
            <div className="project_grid_line">
              <div className="project_grid_line_p">
                <img src={p4} alt="p1" />
              </div>
              <div className="project_grid_line_p">
                <img src={p5} alt="p2" />
              </div>
              <div className="project_grid_line_p">
                <img src={p6} alt="p3" />
              </div>
            </div>
          </div>
        </div>
        </Layout>
    </main>
  )
}

export default Sac

