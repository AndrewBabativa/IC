import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DropdownMenuUser.css';
import { faCaretDown, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import  perfil from '../../../assets/images/perfil.svg';
import  preferencias  from '../../../assets/images/preferencias.svg';
import  guardados from '../../../assets/images/guardados.svg';
import  notificaciones from '../../../assets/images/notificaciones.svg';

const DropdownMenuUser: React.FC = () => {
    return (
        <div className="dropdown-menu-user">
            <div className="header">
                <div className="user">
                    <div className="icon">
                        <div className="icon-inner">
                        D
                        </div>
                    </div>
                    <div className="language-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/197/197593.png" alt="ES" />
                        <FontAwesomeIcon icon={faCaretDown} color='white' />
                    </div>
                </div>
                <div className='user-info'>
                    <div className="title">
                        Diana Vidal
                    </div>
                    <div className="email">
                        dianavidal@gmail.com
                    </div>
                </div>
            </div>
            <div className="options">
                <div className="option">
                    <div className="icon-inner">
                    <img src={perfil} alt="Link Solid" />
                    </div>
                    <div className="text">Cuenta</div>
                </div>
                <div className="option">
                    <div className="icon-inner">
                    <img src={preferencias} alt="Link Solid" />
                    </div>
                    <div className="text">Preferencias</div>
                </div>
                <div className="option">
                    <div className="icon-inner">
                    <img src={guardados} alt="Link Solid" />
                    </div>
                    <div className="text">Guardados</div>
                </div>
                <div className="option">
                    <div className="icon-inner">
                    <img src={notificaciones} alt="Link Solid"/>
                    </div>
                    <div className="text">Notificaciones</div>
                </div>
            </div>
            <div className="footer">
                <div className="guide">
                    Guía
                    <div className="icon-inner">
                        <img src="https://static.vecteezy.com/system/resources/previews/009/592/988/large_2x/3d-rendering-blue-and-yellow-color-user-icon-isolated-free-png.png"
                            alt="guia" height={'20px'}/>
                    </div>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <div className="logout">
                    Cerrar sesión
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </div>
            </div>
        </div>
    );
}

export default DropdownMenuUser;