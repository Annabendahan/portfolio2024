import Layout from '../components/layout'
import * as React from "react"
import h6 from '../images/h6.png'
import t1 from '../images/ticket/t1.png'
import t2 from '../images/ticket/t2.png'
import t3 from '../images/ticket/t3.png'
import t4 from '../images/ticket/t4.png'
import t5 from '../images/ticket/t5.png'
import v1 from "../images/ticket/v1.mp4"


import { Link } from 'gatsby';





const Ticket = () => {
  return (
    <main>
        <Layout>
        <div className="project">
          <div className="project_mainpic">
            <video autoPlay loop muted>
                <source src={v1} type="video/mp4" />
            </video>
          </div>
          <div className="project_text">
            <p><b> TICKET POUR L’ AS VELASCA  ～  2022    </b> <br/>
            Graphisme, flocage <br/>
            Club de foot artistique Milanais</p>
          </div>
          <div className="project_grid">
            <div className="project_grid_line">
              <div className="project_grid_line_p">
                <img src={t1} alt="p1" />
              </div>
              <div className="project_grid_line_p">
              <img src={h6} alt="p3" />
              </div>
              <div className="project_grid_line_p">
                <img src={t4} alt="p3" />
              </div>
            </div>
            <div className="project_grid_line">
              <div className="project_grid_line_p">
                <img src={t3} alt="p1" />
              </div>
              <div className="project_grid_line_p">
                <img src={t2} alt="p2" />
              </div>
              <div className="project_grid_line_p">
                <img src={t5} alt="p3" />
              </div>
            </div>
          </div>
        </div>
        </Layout>
    </main>
  )
}

export default Ticket

