import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <span>Acerca de Interconectar</span>
        <span>Servicios</span>
        <span>Términos de servicio</span>
        <span style={{marginRight: '250px'}}>Política de privacidad</span>
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faFacebookF}/>
        <FontAwesomeIcon icon={faInstagram}/>
        <FontAwesomeIcon icon={faLinkedin}/>
      </div>
    </footer>
  );
}

export default Footer;