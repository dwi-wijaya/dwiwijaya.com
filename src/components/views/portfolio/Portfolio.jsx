import { useState } from "react";
import Pin from "@/assets/pin.svg";
import PageHeading from "../../common/PageHeading";
import Image from "next/image";
import { portfolioData } from "@/constants/data/portfolio";
import PortfolioCategory from "./PortfolioCategory";
import Link from "next/link";

const Portfolio = ({ portfolios }) => {
  const [items, setItems] = useState(portfolios);
  const [activeCategory, setActiveCategory] = useState("all");

  const filterItems = (categoryItem) => {
    if (categoryItem === "all") {
      setItems(portfolios);
    } else {
      const updatedItems = portfolios.filter((curElem) => {
        return curElem.category === categoryItem;
      });
      updatedItems.length == 0 ?
      setItems(`~ Apologies, there are currently no portfolios available for ${categoryItem}`)
      : setItems(updatedItems);;
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5">
        {typeof items === 'string' ? (
          // Handle case when items is a string
          <p data-aos="fade-right"  className="text-subtext">{items}</p>
        ) : (
          // Handle case when items is an array of objects
          items.map((elem) => {
            const { id, thumbnail, name, category, isFeatured, excerpt, slug } = elem;
            return (
              <Link key={id} href={`portfolio/${slug}`}>
                <div data-aos="fade-right" className="group/portfolio relative flex flex-col overflow-hidden rounded-xl h-full">
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
                      <Image blurDataURL={thumbnail} src={thumbnail} alt="" width={999} height={999} className="w-full object-cover h-48" />
                      <div className="flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 justify-center items-center text-white group-hover/portfolio:opacity-80 ">
                        View Project<i className="bx bx-right-arrow-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col h-full gap-3  bg-container border border-stroke">
                    <h3 className="font-semibold group-hover/portfolio:text-primary">{name}</h3>
                    <p className="text-sm overflow-hidden whitespace-normal overflow-ellipsis line-clamp-2 text-subtext">{excerpt}</p>
                  </div>
                </div>
              </Link>
            );
          })
        )}

      </div>
    </>
  );
};

export default Portfolio;
