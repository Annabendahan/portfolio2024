import Layout from '../components/layout'
import * as React from "react"
import '../components/style.scss'

import h8 from '../images/h8.png'
import p2 from '../images/sitelafc/p2.png'
import p3 from '../images/sitelafc/p3.png'
import p4 from '../images/sitelafc/p4.png'
import v1 from '../images/sitelafc/VIDEOSITE.mp4'


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
          <div className="project_video">
            <video autoPlay loop muted playsInline={true}>
                <source src={v1} crossOrigin="anonymous" type="video/mp4" />
            </video>
          </div>
          <br/><br/> <br/><br/>
        </div>
        </Layout>
    </main>
  )
}

export default Sab

