/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import todo from '../../assets/images/todo.svg';
import market from '../../assets/images/market.svg';
import product from '../../assets/images/shoping.svg';
import country from '../../assets/images/paises.svg';
import figures from '../../assets/images/publicaciones.svg';
import linkSolid from '../../assets/images/link-solid.svg';
import bookmark from '../../assets/images/bookmark-regular.svg';
import point from '../../assets/images/point.svg';
import './Main.css';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { News } from '../../models/news.model';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
          <span className="tab-next">
            <FontAwesomeIcon icon={faCircleChevronRight} className="btn-next" />
          </span>
        </div>
        {content.map((item, index) => (
          <div className="content">
            <div className="tab-content-filter">
              <span className='preference'><a href="#" className='preference-text'>Nombre preferencia</a></span>
              <span className='preference'><a href="#" className='preference-text'>Nombre preferencia</a></span>
              <span className='preference'><a href="#" className='preference-text'>Nombre preferencia</a></span>
              <span><a href="#" className='ver-todos-text'>Ver todos</a></span>
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
                <div className="tab-content-main-footer">
                  <div className="tab-content-footer-date">Agust 21</div>
                  <img src={point} alt="point"/>
                  <div className="tab-content-footer-tag"> By European Commision</div>
                  <div className='content-btn-news'>
                    <img src={linkSolid} alt="Link Solid" className="tab-content-footer-share" />
                    <img src={bookmark} alt="Link Solid" className="tab-content-footer-save" />
                  </div>
                </div>
                <div className="tab-content-footer-filter">
                  <span className='preference-news'><a href="#" className='preference-text'>Nombre preferencia</a></span>
                </div>
              </div>
            </div>


            <div className="tab-content-secondary">
              <div className="tab-content-secondary-photo">
                <img src="https://p4.wallpaperbetter.com/wallpaper/932/557/215/basket-fruit-4k-full-hd-wallpaper-preview.jpg" alt="eu" />
              </div>
              <div className="tab-content-secondary-sumary">
                <div className="tab-content-main-title">EU trade relationships by country</div>
                <div className="tab-content-main-text">
                  The EU anhid New Zealand have today signed their free tra de agreement (FTA), which will deliver significant gains for the EU. The deal will cut some €140 million a year in duties for EU companies from the first year of application. The...
                </div>

                <div className="tab-content-footer">
                  <div className="tab-content-footer-filter">
                    <span className='preference-news'><a href="#" className='preference-text'>Nombre preferencia</a></span>
                  </div>
                  <div className="tab-content-footer-date">Agust 21</div>
                  <img src={point} alt="point"/>
                  <div className="tab-content-footer-tag">By European Commision</div>
                  <div className="content-btn-news">
                  <div className="tab-content-footer-filter">
                      <img src={linkSolid} alt="Link Solid" className="tab-content-footer-share" />
                    </div>
                      <img src={bookmark} alt="bookmark" className="tab-content-footer-save" />
                  </div>
                </div>
              </div>
            </div>
            <div className='container-btn'>
              <div className="noticias-ver-mas-boton">
                <div className="noticias-ver-mas-texto">Ver más noticias</div>
                <FontAwesomeIcon icon={faArrowRight} color="black" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
