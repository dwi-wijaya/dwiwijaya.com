import { ServicesData } from "@/constants/data/services";
import PageHeading from "../../common/PageHeading";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
        {ServicesData.map(({ id, icon, title, description,  },index) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.05, delay: index * 0.1 }}
              className="card text-center !p7-6 ring-0 hover:ring-1 hover:ring-primary dark:hover:ring-1 dark:hover:ring-[#ff9f8c68]"
              key={id}
              data-aos="fade-right"
            >
              <i className={`text-5xl text-primary bx bx-${icon}`}></i>
              <h3 className="my-3 font-semibold">{title}</h3>
              <p className="text-sm font-light text-subtext">{description}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};
export default Services;
