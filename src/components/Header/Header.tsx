import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMagnifyingGlass, faLayerGroup, faBookmark, faRoute, faDolly, faListCheck, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import DropdownMenuUser from './DropdownMenuUser/DropdownMenuUser';
import DropdownMenuCompany from "./DropdownMenuCompany/DropdownMenuCompany";

const Header: React.FC = () => {
  const [isDropdownUserOpen, setIsDropdownUserOpen] = useState(false);
  const [isDropdownCompanyOpen, setIsDropdownCompanyOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownCompanyToggle = () => {
    setIsDropdownCompanyOpen(!isDropdownCompanyOpen);
  };

  const handleDropdownUserToggle = () => {
    setIsDropdownUserOpen(!isDropdownUserOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownCompanyOpen(false);
        setIsDropdownUserOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav className="navbar">
        <div className="frame-33">
          <div className="interconectar-menu" ref={dropdownRef} onClick={handleDropdownCompanyToggle}>
            <img src={logo} alt="Logo" className="interconectar-menu" />
            <div className="frame-19">
              <FontAwesomeIcon icon={isDropdownCompanyOpen ? faCaretUp : faCaretDown} color="#FFFFFF" />
            </div>
          </div>
          <div className="frame-20">
            <FontAwesomeIcon icon={faHome} color="#e3efea" />
          </div>
          <div className="frame-28">
            <input type="text" className="buscar-noticia" placeholder="Buscar noticia o sugerencia" />
            <div className="frame-21">
              <FontAwesomeIcon icon={faMagnifyingGlass} color="#FFFFFF" />
            </div>
          </div>
          <div className="frame-29">
            <div className="herramientas">Herramientas</div>
            <div className="frame-22">
              <FontAwesomeIcon icon={faDolly} color="#425563" />
            </div>
            <div className="frame-22">
              <FontAwesomeIcon icon={faRoute} color="#425563" />
            </div>
            <div className="frame-23">
              <FontAwesomeIcon icon={faListCheck} color="#425563" />
            </div>
          </div>
          <div className="frame-30" ref={dropdownRef} onClick={handleDropdownUserToggle}>
            <div className="cuenta">Cuenta</div>
            <div className="frame-22-2">
              <FontAwesomeIcon icon={faLayerGroup} color="#425563" />
            </div>
            <div className="frame-23-2">
              <FontAwesomeIcon icon={faBookmark} color="#425563" />
            </div>
            <div className="frame-32">
              <div className="frame-31">
                <div className="d">D</div>
              </div>
              <FontAwesomeIcon icon={isDropdownUserOpen ? faCaretUp : faCaretDown} color="#FFFFFF" />
            </div>
          </div>
        </div>
      </nav>
      {isDropdownCompanyOpen && <DropdownMenuCompany />}
      {isDropdownUserOpen && <DropdownMenuUser />}
    </header>
  );
}

export default Header;
