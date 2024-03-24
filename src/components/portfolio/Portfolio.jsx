import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";
import PageHeading from "../elements/PageHeading";
import Category from "./Category";
import Pin from "../../assets/pin.svg";
const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [activeCategory, setActiveCategory] = useState("all");

  const filterItems = (categoryItem) => {
    if (categoryItem === "all") {
      setItems(Menu);
    } else {
      const updatedItems = Menu.filter((curElem) => {
        return curElem.category === categoryItem;
      });
      setItems(updatedItems);
    }
    setActiveCategory(categoryItem);
  };

  const IconCategory = {
    code: "bx bx-code-alt",
    uiux: "bx bx-palette",
    design: "bx bx-pen",
    others: "bx bx-customize",
  };

  return (
    <section
      className="work container section"
      id="portfolio"
      data-aos="fade-up"
    >
      <PageHeading
        title="My Works"
        description="Explore my latest projects and creations."
      />

      <Category filter={filterItems} active={activeCategory} />

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, isFeatured, desc } = elem;
          return (
            <div data-aos="fade-right" className="work__card" key={id}>
              <div className="work__thumbnail">
                <div className="work__overlay">
                  {isFeatured && (
                    <span className="featured">
                      <img src={Pin} alt="" srcSet="" />
                      Featured{" "}
                    </span>
                  )}
                  <div className="work__category">
                    <i className={IconCategory[category]}></i> 
                  </div>
                </div>
                <div className="relative">
                  <img src={image} alt="" className="work__img" />
                  <div className="work__mask">
                    View Project<i className="bx bx-right-arrow-alt"></i>
                  </div>
                </div>
              </div>
              <div className="work__desc">
                <h3 className="work__title">{title}</h3>
                <p className="work__subtitle">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
