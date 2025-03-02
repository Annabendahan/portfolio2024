import * as React from "react"
import '../components/style.scss'
import { Link } from 'gatsby';
import Layout from '../components/layout'


import h1 from '../images/h1.png'
import h2 from '../images/h2.png'
import h3 from '../images/h3.png'
import h4 from '../images/h4.png'
import h5 from '../images/h5.png'
import h6 from '../images/h6.png'
import h7 from '../images/h7.png'
import h8 from '../images/h8.png'
import h9 from '../images/h9.png'
import h10 from '../images/h10.png'



const IndexPage = () => {
  return (
    <main>
       <Layout>
       
      <div className="projects">
        <div className="projects_line">
        <Link to="/sacaballons">
          <div className="projects_line_p">
            <img src={h1} alt="h1" />
            <div className="projects_line_p_text">
              <p> <b>SACS À BALLONS  ～  2023   </b><br/>
              </p>
            </div>
          </div>
        </Link>
        <Link to="/welovethisgame">
          <div className="projects_line_p">
            <img src={h5} alt="h2" />
            <div className="projects_line_p_text">
              <p> <b>TOURNOI WE LOVE THIS GAME  ～  2022    </b><br/>
              </p>
            </div>
          </div>
          </Link>
        <Link to="/setdesign">
          <div className="projects_line_p">
            <img src={h10} alt="h2" />
            <div className="projects_line_p_text">
              <p> <b>SET DESIGN  ～  2022/23   </b><br/>
              </p>
            </div>
          </div>
          </Link>
       
         
        </div>
       
        <div className="projects_line">
          
        <Link to="/compo">
          <div className="projects_line_p">
            <img src={h3} alt="h3" />
            <div className="projects_line_p_text">
              <p> <b> COMPO POUR MATCH  ～  2021    </b><br/>
              </p>
            </div>
          </div>
          </Link>
          <Link to="/maillotsolympe">
          <div className="projects_line_p">
            <img src={h2} alt="h2" />
            <div className="projects_line_p_text">
              <p> <b>MAILLOTS DU CLUB OLYMPE  ～  2022   </b><br/>
              </p>
            </div>
          </div>
          </Link>
        <a href="https://jgenerator.netlify.app/" target="_blank" rel="site">
          <div className="projects_line_p">
            <img src={h4} alt="h1" />
            <div className="projects_line_p_text">
              <p> <b>SOCCER JERSEY GENERATOR   ～  2022    </b><br/>
              </p>
            </div>
          </div>
        </a>
         
         
        </div>
        <div className="projects_line">
        <Link to="/ticketvelasca">
          <div className="projects_line_p">
            <img src={h6} alt="h3" />
            <div className="projects_line_p_text">
              <p> <b> TICKET POUR L’ AS VELASCA  ～  2022        </b><br/>
              </p>
            </div>
          </div>
          </Link>
        <Link to="/sacamain">
          <div className="projects_line_p">
            <img src={h7} alt="h1" />
            <div className="projects_line_p_text">
              <p> <b>SAC À MAIN  ～  2023    </b><br/>
              </p>
            </div>
          </div>
          </Link>
          <Link to="/sitedesateliersfc">
          <div className="projects_line_p">
            <img src={h8} alt="h2" />
            <div className="projects_line_p_text">
              <p> <b> SITE DES ATELIERS FC  ～  2021    </b><br/>
              </p>
            </div>
          </div>
          </Link>
        
        </div>
        <div className="projects_line_p_last">
        <Link to="/lesateliersfc">
            <img src={h9} alt="h2" />
            <div className="projects_line_p_text">
              <p> <b> PARTICIPATION AUX MAILLOTS DES ATELIERS FC  ～  2021   </b><br/>
              </p>
            </div>
        
          </Link>
          
          </div>
      </div>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Anna Bendahan</title>
