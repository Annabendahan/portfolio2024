import Layout from '../components/layout'
import * as React from "react"
import h5 from '../images/h5.png'
import p1 from '../images/wltg/w1.png'
import p2 from '../images/wltg/w2.png'
import p3 from '../images/wltg/w3.png'
import p4 from '../images/wltg/w4.png'
import p5 from '../images/wltg/w5.png'
import p6 from "../images/wltg/w6.png"


import { Link } from 'gatsby';





const Welovethisgame = () => {
  return (
    <main>
        <Layout>
        <div className="project">
          <div className="project_mainpic">
            <img src={h5} alt="p1" />
          </div>
          <div className="project_text">
            <h3> TOURNOI WE LOVE THIS GAME  ～  2022     </h3> 
            <p className="project_text_desc">
            Co-organisation d’un tournoi de foot alternatif à la coupe du monde 2022 à la Cité Fertile avec le club Olympe. <br/>
            Participation à la réalisation de la charte graphique, et déclinaison en divers objets (écharpes, brassards, drapeaux, affiches).<br/>
            Flocage, sublimation, couture. </p>
            <p><i> Photos de Marion Renerre</i></p>
          </div>
          <div className="project_grid">
            <div className="project_grid_line">
              <div className="project_grid_line_p">
                <img src={p1} alt="p1" />
              </div>
              <div className="project_grid_line_p">
              <img src={p2} alt="p3" />
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

export default Welovethisgame

