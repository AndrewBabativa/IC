import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import todo from '../../assets/images/todo.svg';
import market from '../../assets/images/mercado.svg';
import product from '../../assets/images/producto.svg';
import country from '../../assets/images/paises.svg';
import figures from '../../assets/images/publicaciones.svg';
import './Main.css';
import { faBookmark, faCircleChevronRight, faLink } from '@fortawesome/free-solid-svg-icons';
import { News } from '../../models/news.model';

const Main: React.FC = () => {
  let news: News[] = [{
    id: 1,
    image: 'https://www.reuters.com/resizer/fFtLyfvK4eERH9otyTu1NTrrJAs=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QY32QEPJIRL2XFBP5ZHV6NL5SU.jpg',
    title: 'EU trade relationships by country',
    sumary: 'The EU and New Zealand have today signed their free trade agreement (FTA), which will deliver significant gains for the EU. The deal will cut some €140 million a year in duties for EU companies from the first year of application. The...',
    date: 'August 21',
    source: 'By European Commision',
}];

  const [content] = useState(news);

  return (
    <main>
      <div className="container-main">
        <div className="tabs">
          <span className="tab active">
            <img src={todo} alt="todo" className="tab-icon" />
            <div className="tab-text">Todo</div>
          </span>
          <span className="tab">
            <img src={market} alt="mercado" className="tab-icon" />
            <div className="tab-text">Mercados</div>
          </span>
          <span className="tab">
            <img src={product} alt="producto" className="tab-icon" />
            <div className="tab-text">Productos</div>
          </span>
          <span className="tab">
            <img src={country} alt="paises" className="tab-icon" />
            <div className="tab-text">Países</div>
          </span>
          <span className="tab">
            <img src={figures} alt="publicaciones" className="tab-icon" />
            <div className="tab-text">Publicaciones</div>
          </span>
          <span className="tab">
            <img src={market} alt="otro" className="tab-icon" />
            <div className="tab-text">Otro</div>
          </span>
          <span className="tab">
            <FontAwesomeIcon icon={faCircleChevronRight} color="#FF5C39" className="tab-icon" />
          </span>
        </div>
        {content.map((item, index) => (
          <div className="content">
            <div className="tab-content-filter">
              <span className='preference'>Nombre preferencia</span>
              <span className='preference'>Nombre preferencia</span>
              <span className='preference'>Nombre preferencia</span>
              <span className='preference'>Ver todos</span>
            </div>

            <div className="tab-content-main">
              <div className="tab-content-main-photo">
                <img src="https://www.reuters.com/resizer/fFtLyfvK4eERH9otyTu1NTrrJAs=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QY32QEPJIRL2XFBP5ZHV6NL5SU.jpg" alt="eu" />
              </div>
              <div className="tab-content-main-sumary">
                <div className="tab-content-main-title">EU trade relationships by country</div>
                <div className="tab-content-main-text">
                  The EU anhid New Zealand have today signed their free tra de agreement (FTA), which will deliver significant gains for the EU. The deal will cut some €140 million a year in duties for EU companies from the first year of application. The...
                </div>
                <div className="tab-content-footer-filter">
                  <span className='preference'>Nombre preferencia</span>
                </div>
                <div className="tab-content-footer">
                  <div className="tab-content-footer-date">Agust 21</div>
                  <div className="tab-content-footer-tag">● By European Commision</div>
                  <FontAwesomeIcon icon={faLink} className="tab-content-footer-share" color="#D4D8DB" />
                  <FontAwesomeIcon icon={faBookmark} className='tab-content-footer-save' color="#D4D8DB" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
