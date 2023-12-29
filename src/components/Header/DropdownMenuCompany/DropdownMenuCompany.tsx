import React from 'react';
import './DropdownMenuCompany.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faSquareFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import  servicios from '../../../assets/images/servicios.svg';
import  nosotros  from '../../../assets/images/nosotros.svg';
import  sugerencias from '../../../assets/images/sugerencias.svg';

const DropdownMenuCompany: React.FC = () => {
    return (
        <div className="frame-84">
            <div className="frame-80">
                <div className="frame-79">
                    <img src={nosotros} alt="Link Solid"  />
                    <div className="text-btn">Nosotros</div>
                </div>
                <div className="frame-78">
                    <img src={servicios} alt="Link Solid" />
                    <div className="text-btn">Servicios</div>
                </div>
                <div className="frame-81">
                    <img src={sugerencias} alt="Link Solid"  />
                    <div className="text-btn">Sugerencias</div>
                </div>
            </div>
            <div className="frame-83" >
                <div className="frame-98">
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="frame-99">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </div>
                <div className="frame-100">
                    <FontAwesomeIcon icon={faSquareFacebook}/>
                </div>
                <div className="frame-101">
                    <FontAwesomeIcon icon={faYoutube}/>
                </div>
            </div>
        </div>
    );
};

export default DropdownMenuCompany;
