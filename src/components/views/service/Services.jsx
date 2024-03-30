import { ServicesData } from "@/constants/data/services";
import PageHeading from "../../common/PageHeading";

const Services = () => {
  return (
    <>
      <PageHeading
        title='Services'
        description='Learn about the specialized services I offer to clients.'
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
        {ServicesData.map(({ id, icon, title, description }) => {
          return (
            <div data-aos="fade-right" className="card text-center !p7-6 ring-0 hover:ring-1 hover:ring-primary dark:hover:ring-1 dark:hover:ring-[#ff9f8c68]" key={id}>
              <i className={`text-5xl text-primary bx bx-${icon}`}></i>
              <h3 className="my-3 font-semibold">{title}</h3>
              <p className="text-sm font-light text-subtext">{description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Services;
