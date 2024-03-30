import { useState } from "react";
import Pin from "@/assets/pin.svg";
import PageHeading from "../../common/PageHeading";
import Image from "next/image";
import { portfolioData } from "@/constants/data/portfolio";
import PortfolioCategory from "./PortfolioCategory";

const Portfolio = () => {
  const [items, setItems] = useState(portfolioData);
  const [activeCategory, setActiveCategory] = useState("all");

  const filterItems = (categoryItem) => {
    if (categoryItem === "all") {
      setItems(portfolioData);
    } else {
      const updatedItems = portfolioData.filter((curElem) => {
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
    <>
      <PortfolioCategory filter={filterItems} active={activeCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
        {items.map((elem) => {
          const { id, image, title, category, isFeatured, desc } = elem;
          return (
            <div className="group/portfolio relative flex flex-col overflow-hidden rounded-xl " key={id}>
              <div className="work__thumbnail">
                <div className="absolute flex items-center top-2 right-2 gap-2 z-[1]">
                  {isFeatured && (
                    <span className="flex items-center gap-1 px-2 py-1 bg-orange-300 text-black rounded-md z-10">
                      <Image src={Pin} alt="" srcSet="" />
                      Featured{" "}
                    </span>
                  )}
                  <div className="px-2 py-1 bg-orange-300 text-black rounded-md z-10">
                    <i className={IconCategory[category]}></i> 
                  </div>
                </div>
                <div className="relative">
                  <Image src={image} alt="" className="w-full object-cover h-48" />
                  <div className="flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 justify-center items-center text-white group-hover/portfolio:opacity-80 ">
                    View Project<i className="bx bx-right-arrow-alt"></i>
                  </div>
                </div>
              </div>
              <div className="p-5 flex flex-col justify-between h-full gap-3  bg-container border border-stroke">
                <h3 className="font-semibold group-hover/portfolio:text-primary">{title}</h3>
                <p className="text-sm overflow-hidden whitespace-normal overflow-ellipsis line-clamp-2 text-subtext">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
