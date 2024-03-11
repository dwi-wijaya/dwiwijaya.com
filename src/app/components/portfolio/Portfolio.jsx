'use client'

import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";
import Image from "next/image";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [activeCategory, setActiveCategory] = useState('Everythings');
  const filterItems = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
    setActiveCategory(categoryItem);
  };
  return (
    <section data-section className="work container section" id="portfolio">
      <div className="section__title__wrapper">
        <h2 className="section__title">Recents Works</h2>
      </div>

      <div className="work__filters">
        <span className={`work__item ${activeCategory === 'Everythings' ? 'active' : ''}`} onClick={() => { setItems(Menu); setActiveCategory('Everythings'); }}>Everythings</span>
        <span className={`work__item ${activeCategory === 'Creative' ? 'active' : ''}`} onClick={() => filterItems('Creative')}>Creative</span>
        <span className={`work__item ${activeCategory === 'Art' ? 'active' : ''}`} onClick={() => filterItems('Art')}>Art</span>
        <span className={`work__item ${activeCategory === 'Design' ? 'active' : ''}`} onClick={() => filterItems('Design')}>Design</span>
        <span className={`work__item ${activeCategory === 'Photography' ? 'active' : ''}`} onClick={() => filterItems('Photography')}>Photography</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__tumbnail">
                <Image src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a aria-label="demo" href="#" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Portfolio;
