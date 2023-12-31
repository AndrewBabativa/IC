import React, { FC,useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";
import preferencias_menu from "../../assets/images/preferencias-menu.svg";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMagnifyingGlass, faBookmark, faRoute, faDolly, faListCheck, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import DropdownMenuUser from './DropdownMenuUser/DropdownMenuUser';
import DropdownMenuCompany from "./DropdownMenuCompany/DropdownMenuCompany";

const Header: FC = () => {
  const [isDropdownUserOpen, setIsDropdownUserOpen] = useState(false);
  const [isDropdownCompanyOpen, setIsDropdownCompanyOpen] = useState(false);
  const dropdownUserRef = useRef<HTMLDivElement>(null);
  const dropdownCompanyRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownUserRef.current &&
      !dropdownUserRef.current.contains(event.target as Node) &&
      dropdownCompanyRef.current &&
      !dropdownCompanyRef.current.contains(event.target as Node)
    ) {
      setIsDropdownUserOpen(false);
      setIsDropdownCompanyOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownCompanyToggle = () => {
    setIsDropdownCompanyOpen((prevState) => !prevState);
    setIsDropdownUserOpen(false); 
  };

  const handleDropdownUserToggle = () => {
    setIsDropdownUserOpen((prevState) => !prevState);
    setIsDropdownCompanyOpen(false); 
  };

  return (
    <header>
      <div className="navbar">
        <div className="">
          <nav className="navbar">
            <div className="frame-33">

            <div className="frame-19" ref={dropdownCompanyRef} onClick={handleDropdownCompanyToggle}>
              <img src={logo} alt="Logo" className="interconectar-menu" />
              <FontAwesomeIcon icon={isDropdownCompanyOpen ? faCaretUp : faCaretDown} color="#FFFFFF" />
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
                <FontAwesomeIcon icon={faDolly} color="#425563" />
                
                </div>
                <div className="frame-23">
                <FontAwesomeIcon icon={faListCheck} color="#425563" />               
                </div>
                <div className="frame-22">
                <FontAwesomeIcon icon={faRoute} color="#425563" />          
                </div>
              </div>
              <div className="frame-30" ref={dropdownUserRef} onClick={handleDropdownUserToggle}>
                <div className="cuenta">Cuenta</div>
                <div className="frame-22-2">
                <img src={preferencias_menu} alt="preferencias_menu" />
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
        </div>
      </div>
      {isDropdownCompanyOpen && <DropdownMenuCompany />}
      {isDropdownUserOpen && <DropdownMenuUser />}
    </header>
  );
}

export default Header;
