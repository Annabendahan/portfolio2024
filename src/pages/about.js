import Layout from '../components/layout'
import * as React from "react"
import '../components/style.scss'
import h9 from '../images/h9.png'
import p1 from '../images/about/p1.png'
import p2 from '../images/about/p2.png'
import p3 from '../images/about/p3.png'
import p4 from '../images/about/p4.png'
import p5 from '../images/about/p5.png'
import p6 from '../images/about/p6.png'
import p7 from '../images/about/p7.png'
import p8 from '../images/about/p8.png'
import p9 from '../images/about/p9.png'
import p10 from '../images/about/p10.png'
import p11 from '../images/about/p11.png'
import p12 from '../images/about/p12.png'
import p13 from '../images/about/p13.png'
import p14 from '../images/about/p14.png'
import p15 from '../images/about/p15.png'
import p16 from '../images/about/p16.png'
import p17 from '../images/about/p17.png'

import { Link } from 'gatsby';




const About = () => {
  return (
    <main>
        <Layout>
            <div className='about_grid'>
                <div className='about_grid_line'>
                    <div className='about_grid_line_p'>
                        <img src={p1} alt="p1" />
                    </div>
                    <div className='about_grid_line_p'>
                    <div className='about_grid_line_p_desc'>
                        <p>Développeuse web de formation (Paris Dauphine + le Wagon Barcelone), j’ai exercé en agence, chez Veepee et chez Chanel. <br/><br/>
                        Peu à peu, en parallèle du code, j’ai développé une activité plus créative. Le partage d’un atelier Plateau Urbain avec des ami.e.s designer et footballeur.euses a donné naissance à plusieurs projets, comme l’organisation de tournois, la confection de maillots, de brassards, de drapeaux, de sacs. J’ai ainsi pu me former au projet de design ainsi qu’à diverses pratiques (couture, patronage, découpe textile, flocage, sublimation, impression, linogravure).<br/><br/>
                        J’alterne aujourd’hui des missions de code et de set-design (notamment avec Justine Ponthieux pour Dior et Yeezy), tout en continuant à côté des projets personnels.<br/><br/><br/>
                            <hr/>
                            <b>
                            an.bendahan@gmail.com
                            <br/>
                            0659133919
                            <br/>
                            Paris/Montreuil
                            </b>
                            </p>     
                            </div>            
                    </div>
                    <div className='about_grid_line_p'>
                        <img src={p2} alt="p1" />
                    </div>
                </div>
                <div className='about_grid_line'>
                    <div className='about_grid_line_p'>
                        <img src={p3} alt="p1" />
                    </div>
                    <div className='about_grid_line_p'>
                        <img src={p4} alt="p1" />
                    </div>
                    <div className='about_grid_line_p'>
                        <img src={p5} alt="p1" />
                    </div>
                </div>
                <div className='about_grid_line'>
                    <div className='about_grid_line_p'>
                            <img src={p6} alt="p1" />
                        </div>
                        <div className='about_grid_line_p'>
                            <img src={p7} alt="p1" />
                        </div>
                        <div className='about_grid_line_p'>
                            <img src={p8} alt="p1" />
                        </div>
                    </div>
                </div>
                <div className='about_grid_line'>
                        <div className='about_grid_line_p'>
                            <img src={p9} alt="p1" />
                        </div>
                        <div className='about_grid_line_p'>
                            <img src={p10} alt="p1" />
                        </div>
                        <div className='about_grid_line_p'>
                            <img src={p11} alt="p1" />
                        </div>
                </div>
                <div className='about_grid_line'>
                        <div className='about_grid_line_p'>
                            <img src={p12} alt="p1" />
                        </div>
                        <div className='about_grid_line_p'>
                            <img src={p13} alt="p1" />
                        </div>
                        <div className='about_grid_line_p'>
                            <img src={p14} alt="p1" />
                        </div>
                </div>
                <div className='about_grid_line'>
                        <div className='about_grid_line_p'>
                            <img src={p15} alt="p1" />
                        </div>
                        <div className='about_grid_line_p'>
                            <img src={p16} alt="p1" />
                        </div>
                        <div className='about_grid_line_p'>
                            <img src={p17} alt="p1" />
                        </div>
                </div>
        </Layout>
    </main>
  )
}

export default About


