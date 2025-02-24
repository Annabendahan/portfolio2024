import Layout from '../components/layout'
import * as React from "react"
import '../components/style.scss'

import h10 from '../images/h10.png'
import p1 from '../images/set/set1.png'
import p2 from '../images/set/set2.png'
import p3 from '../images/set/set3.png'




import { Link } from 'gatsby';


const Set = () => {
  return (
    <main>
        <Layout>
        <div className="project">
          <div className="project_mainpic">
            <img src={h10} alt="h1" />
          </div>
          <div className="project_text">
            <h3> SET DESIGN  ～  2022/2023    </h3>

            <p className="project_text_desc">
           Assistante set design pour Justine Ponthieux, sur shootings et défilés (Dior, Yeezy) </p>
            <p><i>Photos de Karl Hab, Brigitte Niedermair</i>  </p>
           
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

export default Set

