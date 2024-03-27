import React from "react";
import icon1 from "../../assets/service-1.svg";
import icon2 from "../../assets/service-2.svg";
import icon3 from "../../assets/service-3.svg";
import PageHeading from "../elements/PageHeading";

const data = [
  {
    id: 2,
    icon: "code-block",
    title: "Web Development",
    description:
      "Build dynamic and responsive websites tailored to your needs, ensuring seamless functionality and optimal performance.",
  },
  {
    id: 1,
    icon: "palette",
    title: "UI/UX design",
    description:
      "Craft visually stunning and user-friendly interfaces that captivate your audience and enhance user experience.",
  },
  {
    id: 3,
    icon: "pen",
    title: "Design",
    description:
      "Create captivating visuals and branding materials that leave a lasting impression on your audience.",
  },
  {
    id: 4,
    icon: "chat",
    title: "Others",
    description:
      "Discuss any other specific needs or services you require, let's tailor a solution to meet your unique requirements.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services" data-aos='fade-up'>
      <PageHeading
        title='Services'
        description='Learn about the specialized services I offer to clients.'
      />
      
      <div className="services__container grid">
        {data.map(({ id, icon, title, description }) => {
          return (
            <div data-aos="fade-right" className="services__card" key={id}>
              <i className={`services__icon bx bx-${icon}`}></i>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
