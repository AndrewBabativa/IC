import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Aside.css';

const Aside: React.FC = () => {
    return (
        <aside>
            <section className='card'>
                <div className="frame-35 card-1">
                    <span className="exam-time"></span>
                </div>
                <div className="frame-36 card-1">
                    <div className="frame-37">
                        <span className="test-exporter">Test de exportador</span>
                        <span className="description-text">Texto descriptivo sobre qué es esta herramienta.</span>
                    </div>
                    <span className="btn-ver">
                        <span className="txt-ver">Hacer Test</span>
                        <FontAwesomeIcon icon={faArrowRight} color="#ECEEEF" />
                    </span>
                </div>
            </section>
            <section className='card'>
                <div className="frame-35 card-2">
                    <div className="delivery-truck"></div>
                </div>
                <div className="frame-36 card-2">
                    <div className="frame-37">
                        <span className="calculadora-precios">Calculadora de precios</span>
                        <span className="texto-descriptivo">Texto descriptivo sobre qué es esta herramienta.</span>
                    </div>
                    <span className="btn-ver">
                        <span className="txt-ver">Calcular precios</span>
                        <FontAwesomeIcon icon={faArrowRight} color="#ECEEEF" />
                    </span>
                </div>
            </section>
            <section className='card'>
                <div className="frame-35 card-3">
                    <div className="captura-de-pantalla"></div>
                </div>
                <div className="frame-36 card-3">
                    <div className="frame-37">
                        <span className="calculadora-de-precios">Calculadora de precios competitivos</span>
                        <span className="texto-descriptivo">Texto descriptivo sobre qué es esta</span>
                    </div>
                    <span className="btn-ver">
                        <span className="txt-ver">Calcular precios</span>
                        <FontAwesomeIcon icon={faArrowRight} color="#ECEEEF" />
                    </span>
                </div>
            </section>
            <section className='card'>
                <div className="frame-35 card-4">
                    <div className="delivery-truck"></div>
                </div>
                <div className="frame-36 card-4">
                    <div className="frame-37">
                        <span className="calculadora-de-cubicaje">Calculadora de cubicaje</span>
                        <span className="texto-descriptivo">Texto descriptivo sobre qué es esta herramienta.</span>
                    </div>
                    <span className="btn-ver">
                        <span className="txt-ver">Calcular cubicaje</span>
                        <FontAwesomeIcon icon={faArrowRight} color="#ECEEEF" />
                    </span>
                </div>
            </section>
        </aside>
    );
};

export default Aside;
