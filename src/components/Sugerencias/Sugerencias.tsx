import React, { } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sugerencias.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Sugerencias: React.FC = () => {
  return (
    <div className="container-sugerencias">
      <div className="Frame70">
        <div className="sugerencias-title-container">
          <div className="sugerencias-title">sugerencias para ti</div>
        </div>
        <div className="Frame71">
          <div className="sugerencias-texto-titulo">EU trade relationships by country</div>
          <div className="sugerencias-texto">
            The EU and New Zealand have today signed their free trade agreement (FTA), which will deliver significant gains for the EU.
          </div>
          {/* ... Otros elementos dentro de Frame71 */}
        </div>
        <div className="Frame60">
          <div className="sugerencia-fecha">
            <div className="Agust21">Agust 21</div>
            {/* ... Otros elementos dentro de Frame61 */}
          </div>
        </div>
        <div className="sugerencia-ver-mas-boton">
          <div className="sugerencia-ver-mas-texto">Ver más sugerencias</div>
          <FontAwesomeIcon icon={faArrowRight} color="black" />
        </div>
      </div>
    </div>
  );
};

export default Sugerencias;
