import React from 'react'
import './Hero.css';

const Hero = ({}) => {
    return (
      <div>
          <section className="hero is-large is-info">
                <div className="hero-body">
                </div>
            </section>

            <section className="belowhero">
                <div className="belowhero-body">
                    <div className="container has-text-centerd">
                        <h1 className="title">
                            Cleopatra Hotel
                        </h1>
                        {/* <h2 className="subtitle">
                        Cleopatra Hotel es una propuesta para viajeros apasionados <br/>que ansían experiencias excepcionales.<br/>

Ubicado en Puerto Madero, el barrio más cosmopolita de la ciudad,<br/> disfrute de las más increíbles vistas de la ciudad y el río de la Plata, <br/> alojándose en sus lujosas y cómodas suites, <br/>descubriendo la amplia variedad de restaurantes y bares;<br/>y relajándose en el espléndido Beauty & Wellness Center.<br/>

Cleopatra Hotel es el reflejo perfecto entre la modernidad y la energía <br/>que caracterizan a la vibrante Buenos Aires.
                        </h2> */}
                    </div>
                </div>
            </section>
      </div> 
    );
};


export default Hero