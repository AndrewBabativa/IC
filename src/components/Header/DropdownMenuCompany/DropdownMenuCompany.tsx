import React from 'react';
import './DropdownMenuCompany.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faSquareFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const DropdownMenuCompany: React.FC = () => {
    return (
        <div className="frame-84">
            <div className="frame-80">
                <div className="frame-79">
                    <FontAwesomeIcon icon={faLayerGroup} color="#425563" />
                    <div className="nosotros">Nosotros</div>
                </div>
                <div className="frame-78">
                    <FontAwesomeIcon icon={faLayerGroup} color="#425563" />
                    <div className="servicios">Servicios</div>
                </div>
                <div className="frame-81">
                    <FontAwesomeIcon icon={faBookmark} color="#425563" />
                    <div className="sugerencias-dd">Sugerencias</div>
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
