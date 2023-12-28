import React, {  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sugerencias.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Sugerencias: React.FC = () => {
  return (
    <div className="container">
      <div className="Frame70">
        <div className="Frame73">
          <div className="sugerencias">Sugerencias</div>
          {/* ... Otros elementos dentro de Frame73 */}
        </div>
        <div className="Frame71">
          <div className="sugerencias-titulo">EU trade relationships by country</div>
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
        <div className="sugerencia-vermas">Ver más sugerencias</div>
        <FontAwesomeIcon icon={faArrowRight} color="#ECEEEF" />
      </div>
      </div>
    </div>
  );
};

export default Sugerencias;
